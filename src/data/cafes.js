// Troque SEU_SHEET_ID pelo ID da sua planilha (fica na URL, entre /d/ e /edit).
// A aba referenciada deve ser a "publicada" (só o que já foi revisado).
export const CAFES_SHEET_URL = `https://opensheet.elk.sh/${import.meta.env.VITE_SHEETS_ID}/cafeterias`;

// Dados de exemplo — usados como fallback se a planilha ainda não estiver
// configurada ou se a busca falhar. Substitua pelos dados reais na planilha.
export const CAFES_FALLBACK = [
  {
    nome: "Oop Café",
    endereco: "[endereço aqui]",
    site: "#",
    descricao: "[conteúdo aqui — breve descrição do Oop Café]",
  },
  {
    nome: "Cheirin Bão",
    endereco: "[endereço aqui]",
    site: "#",
    descricao: "[conteúdo aqui — breve descrição do Cheirin Bão]",
  },
  {
    nome: "Belô Café",
    endereco: "[endereço aqui]",
    site: "#",
    descricao: "[conteúdo aqui — breve descrição do Belô Café]",
  },
  {
    nome: "Ô Café",
    endereco: "[endereço aqui]",
    site: "#",
    descricao: "[conteúdo aqui — breve descrição do Ô Café]",
  },
];
