#!/usr/bin/env python3
"""Gera as imagens do site (PNG + WebP leves, SVG limpo e favicons) a partir dos SVG da marca.

Uso (da raiz do projeto ou de qualquer pasta):
    python3 assets/brand/gerar-imagens.py            # gera tudo
    python3 assets/brand/gerar-imagens.py selo       # só o que casar com "selo"
    python3 assets/brand/gerar-imagens.py favicon    # só os favicons
    python3 assets/brand/gerar-imagens.py --lista    # mostra o que seria gerado

Requisitos: Inkscape (renderiza os SVG) e Pillow. Nada é instalado por aqui.

Saídas:
    public/img/marca/<nome>.svg           SVG sem metadados do editor
    public/img/marca/<nome>-<largura>.png PNG com paleta reduzida (bem menor, sem perda visível)
    public/img/marca/<nome>-<largura>.webp
    public/favicon.svg, favicon.ico, favicon-16/32/48/64/192/512.png,
    public/apple-touch-icon.png, maskable-512.png, og-image.png
"""
import re
import shutil
import subprocess
import sys
import tempfile
from io import BytesIO
from pathlib import Path

from PIL import Image

BRAND = Path(__file__).resolve().parent
PUBLIC = BRAND.parent.parent / "public"
MARCA = PUBLIC / "img" / "marca"

CREME = (251, 238, 221)   # mesmo fundo do og-image e do apple-touch atuais
CAFE = (82, 42, 17)       # #522a11, o marrom do icone-app

# nome do arquivo em assets/brand -> larguras (px) das versões raster
MARCA_TAMANHOS = {
    "logo-cafe-almanaque": [480, 960, 1600],
    "logo-fundo-claro": [480, 960, 1900],
    "logo-fundo-escuro": [480, 960, 1900],
    "selo-cafe-almanaque": [256, 512, 1024],
    "simbolo-cafe-almanaque": [128, 256, 512],
    "icone-app": [192, 512],
}
# a paleta é peça de brand board, não vai para o site

FAVICON_PNGS = [16, 32, 48, 64, 192, 512]
ICO_TAMANHOS = [16, 32, 48, 64]
APPLE = 180
MASKABLE = 512
OG = (1200, 630)

WEBP_QUALIDADE = 88
PNG_MIN_PARA_PALETA = 128   # abaixo disso o PNG já é minúsculo e a paleta só estraga a borda


# ---------- utilidades ----------
def limpar_svg(texto: str) -> str:
    """Tira só o que é lixo de editor; não mexe nos desenhos."""
    texto = re.sub(r"<\?xml[^>]*\?>\s*", "", texto)
    texto = re.sub(r"<!--.*?-->\s*", "", texto, flags=re.S)
    texto = re.sub(r"\s*<sodipodi:namedview.*?/>", "", texto, flags=re.S)
    texto = re.sub(r"\s+(?:inkscape|sodipodi):[a-zA-Z\-]+=\"[^\"]*\"", "", texto)
    texto = re.sub(r"\s+xmlns:(?:inkscape|sodipodi)=\"[^\"]*\"", "", texto)
    texto = re.sub(r"\s+id=\"(?:svg|defs|g|path|namedview|rect|layer)\d*\"", "", texto)
    texto = re.sub(r"<defs\s*/>\s*", "", texto)
    texto = re.sub(r">\s+<", "><", texto)          # espaços entre tags
    texto = re.sub(r"\s{2,}", " ", texto)           # indentação dentro das tags
    return texto.strip() + "\n"


def renderizar(svg: Path, largura: int) -> Image.Image:
    """SVG -> RGBA na largura pedida, com fundo transparente."""
    with tempfile.TemporaryDirectory() as tmp:
        saida = Path(tmp) / "r.png"
        subprocess.run(
            ["inkscape", str(svg), "-o", str(saida), "-w", str(largura), "--export-background-opacity=0"],
            check=True, capture_output=True,
        )
        return Image.open(saida).convert("RGBA")


def salvar_png(img: Image.Image, destino: Path, paleta: bool) -> int:
    if paleta:
        # flat color + bordas suaves: 256 cores com alpha, sem dithering (dithering vira ruído)
        img = img.quantize(colors=256, method=Image.Quantize.FASTOCTREE, dither=Image.Dither.NONE)
    destino.parent.mkdir(parents=True, exist_ok=True)
    img.save(destino, format="PNG", optimize=True)
    return destino.stat().st_size


def salvar_webp(img: Image.Image, destino: Path) -> int:
    destino.parent.mkdir(parents=True, exist_ok=True)
    img.save(destino, format="WEBP", quality=WEBP_QUALIDADE, alpha_quality=100, method=6)
    return destino.stat().st_size


def sobre_fundo(img: Image.Image, cor) -> Image.Image:
    base = Image.new("RGBA", img.size, cor + (255,))
    base.alpha_composite(img)
    return base


def kb(n: int) -> str:
    return f"{n / 1024:.1f} KB"


# ---------- tarefas ----------
def tarefa_marca(nome: str, larguras: list[int]) -> list[str]:
    fonte = BRAND / f"{nome}.svg"
    if not fonte.exists():
        return [f"  ! {nome}.svg não encontrado, pulei"]
    linhas = []
    MARCA.mkdir(parents=True, exist_ok=True)
    limpo = limpar_svg(fonte.read_text(encoding="utf-8"))
    (MARCA / f"{nome}.svg").write_text(limpo, encoding="utf-8")
    linhas.append(f"  {nome}.svg  {kb(fonte.stat().st_size)} -> {kb(len(limpo.encode()))}")
    for w in larguras:
        img = renderizar(fonte, w)
        p = salvar_png(img, MARCA / f"{nome}-{w}.png", paleta=w >= PNG_MIN_PARA_PALETA)
        q = salvar_webp(img, MARCA / f"{nome}-{w}.webp")
        linhas.append(f"  {nome}-{w}  {img.width}x{img.height}  png {kb(p)}  webp {kb(q)}")
    return linhas


def simbolo_quadrado(tmp: Path) -> Path:
    """Cópia do símbolo com viewBox quadrado e 3% de folga, centrada (base dos favicons)."""
    texto = limpar_svg((BRAND / "simbolo-cafe-almanaque.svg").read_text(encoding="utf-8"))
    x, y, w, h = [float(v) for v in re.search(r'viewBox="([^"]+)"', texto).group(1).split()]
    lado = max(w, h) * 1.03
    nx, ny = x + w / 2 - lado / 2, y + h / 2 - lado / 2
    texto = re.sub(r'viewBox="[^"]+"', f'viewBox="{nx:.1f} {ny:.1f} {lado:.1f} {lado:.1f}"', texto, count=1)
    destino = tmp / "simbolo-quadrado.svg"
    destino.write_text(texto, encoding="utf-8")
    return destino


def tarefa_favicon() -> list[str]:
    linhas = []
    with tempfile.TemporaryDirectory() as t:
        quadrado = simbolo_quadrado(Path(t))
        svg_final = quadrado.read_text(encoding="utf-8")
        (PUBLIC / "favicon.svg").write_text(svg_final, encoding="utf-8")
        linhas.append(f"  favicon.svg  {kb(len(svg_final.encode()))}")

        # cada tamanho renderizado direto do SVG (mais nítido que reduzir um PNG grande).
        # Em série: duas instâncias do Inkscape ao mesmo tempo abortam (perfil compartilhado).
        tamanhos = sorted(set(FAVICON_PNGS + ICO_TAMANHOS + [APPLE, MASKABLE]))
        imagens = {s: renderizar(quadrado, s) for s in tamanhos}

        for s in FAVICON_PNGS:
            p = salvar_png(imagens[s], PUBLIC / f"favicon-{s}.png", paleta=s >= PNG_MIN_PARA_PALETA)
            linhas.append(f"  favicon-{s}.png  {kb(p)}")

        # .ico com várias resoluções dentro (cada uma em PNG)
        ico = imagens[max(ICO_TAMANHOS)]
        ico.save(PUBLIC / "favicon.ico", format="ICO", sizes=[(s, s) for s in ICO_TAMANHOS],
                 append_images=[imagens[s] for s in ICO_TAMANHOS if s != max(ICO_TAMANHOS)])
        linhas.append(f"  favicon.ico  {'/'.join(str(s) for s in ICO_TAMANHOS)}px  {kb((PUBLIC / 'favicon.ico').stat().st_size)}")

        # iOS ignora transparência: precisa de fundo opaco
        simbolo_apple = renderizar(quadrado, round(APPLE * 0.86))
        apple = Image.new("RGBA", (APPLE, APPLE), CREME + (255,))
        apple.alpha_composite(simbolo_apple, ((APPLE - simbolo_apple.width) // 2, (APPLE - simbolo_apple.height) // 2))
        p = salvar_png(apple.convert("RGB"), PUBLIC / "apple-touch-icon.png", paleta=False)
        linhas.append(f"  apple-touch-icon.png  {APPLE}x{APPLE}  {kb(p)}")

        # maskable (Android): fundo sangrando até a borda, símbolo dentro dos 80% centrais (zona segura)
        seguro = renderizar(quadrado, round(MASKABLE * 0.62))
        mask = Image.new("RGBA", (MASKABLE, MASKABLE), CAFE + (255,))
        mask.alpha_composite(seguro, ((MASKABLE - seguro.width) // 2, (MASKABLE - seguro.height) // 2))
        p = salvar_png(mask, PUBLIC / "maskable-512.png", paleta=True)
        linhas.append(f"  maskable-512.png  {kb(p)}")
    return linhas


def tarefa_og() -> list[str]:
    fonte = BRAND / "logo-cafe-almanaque.svg"
    logo = renderizar(fonte, round(OG[0] * 0.8))
    if logo.height > OG[1] * 0.86:                    # limita pela altura se ficar alto demais
        logo = logo.resize((round(logo.width * OG[1] * 0.86 / logo.height), round(OG[1] * 0.86)), Image.LANCZOS)
    tela = Image.new("RGBA", OG, CREME + (255,))
    tela.alpha_composite(logo, ((OG[0] - logo.width) // 2, (OG[1] - logo.height) // 2))
    p = salvar_png(tela, PUBLIC / "og-image.png", paleta=True)
    return [f"  og-image.png  {OG[0]}x{OG[1]}  {kb(p)}"]


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    so_lista = "--lista" in sys.argv

    tarefas = [(n, lambda n=n, l=l: tarefa_marca(n, l)) for n, l in MARCA_TAMANHOS.items()]
    tarefas += [("favicon", tarefa_favicon), ("og-image", tarefa_og)]
    if args:
        tarefas = [(n, f) for n, f in tarefas if any(a in n for a in args)]
    if not tarefas:
        sys.exit("Nada casou com: " + " ".join(args))

    if so_lista:
        print("\n".join(n for n, _ in tarefas))
        return
    if not shutil.which("inkscape"):
        sys.exit("Inkscape não encontrado no PATH.")

    for nome, fn in tarefas:
        print(f"[{nome}]")
        print("\n".join(fn()))
    print(f"\nSalvo em {PUBLIC.relative_to(BRAND.parent.parent)}/")


if __name__ == "__main__":
    main()
