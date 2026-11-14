#!/usr/bin/env bash
# Publica a develop em produção: faz o merge (só fast-forward) na main e envia.
# Uso: npm run publicar   (de dentro da branch develop, sem alterações pendentes)
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"

atual=$(git branch --show-current)
if [ "$atual" != "develop" ]; then
  echo "Rode na branch develop (você está em '$atual')."
  exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "Há alterações não commitadas. Commite ou descarte antes de publicar:"
  git status --short
  exit 1
fi

git fetch origin --quiet

if [ "$(git rev-parse develop)" != "$(git rev-parse origin/develop)" ]; then
  echo "A develop tem commits que não foram enviados. Rode: git push"
  exit 1
fi

# A main não pode ter nada que a develop não tenha (senão não seria fast-forward)
if ! git merge-base --is-ancestor origin/main develop; then
  echo "A main tem commits que a develop não tem. Traga-os antes: git merge origin/main"
  exit 1
fi

novos=$(git log --oneline origin/main..develop)
if [ -z "$novos" ]; then
  echo "Nada para publicar: a main já está igual à develop."
  exit 0
fi

echo "Vão para produção (cafealmanaque.com):"
echo "$novos"
echo
echo "Confira se as variáveis de build da Cloudflare NÃO têm VITE_AMBIENTE=teste."
read -r -p "Publicar agora? [s/N] " resposta
case "$resposta" in
  s|S) ;;
  *) echo "Cancelado."; exit 1 ;;
esac

# Se algo falhar no meio, volta para a develop
trap 'git checkout develop >/dev/null 2>&1 || true' EXIT

git checkout main
git merge --ff-only origin/main
git merge --ff-only develop
git push origin main
git checkout develop

echo
echo "Publicado. A Cloudflare faz o deploy da main em 1 a 2 minutos."
