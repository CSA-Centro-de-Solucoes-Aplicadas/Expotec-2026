// Conteúdo editável pelo Decap CMS em src/content/documentos.json
import conteudo from '@/content/documentos.json'

// Campo de link deixado em branco no painel vira `undefined`, como era antes
const semLinkVazio = (itens) => itens.map((item) => ({ ...item, href: item.href || undefined }))

export const avisos = semLinkVazio(conteudo.avisos)
export const recursos = semLinkVazio(conteudo.recursos)
export const arquivos = semLinkVazio(conteudo.arquivos)