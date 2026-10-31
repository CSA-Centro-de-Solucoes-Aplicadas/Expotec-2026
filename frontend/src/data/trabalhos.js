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

// Documento sem arquivo no painel ainda não foi publicado: fica fora da página até ganhar um link
export const documentos = conteudo.documentos.filter((doc) => doc.href)