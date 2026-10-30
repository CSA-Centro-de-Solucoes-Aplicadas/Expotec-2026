// Conteúdo editável pelo Decap CMS em src/content/trabalhos.json
import conteudo from '@/content/trabalhos.json'

// Remove `link` quando o campo opcional vier vazio, para o v-if da view não renderizar um <a> vazio
export const diretrizes = conteudo.diretrizes.map((diretriz) => ({
  ...diretriz,
  itens: diretriz.itens.map((item) => ({
    ...item,
    link: item.link?.href ? item.link : undefined,
  })),
}))

// Campo de link deixado em branco no painel vira `undefined`, como era antes
export const documentos = conteudo.documentos.map((doc) => ({ ...doc, href: doc.href || undefined }))