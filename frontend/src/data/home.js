// Conteúdo da Home e imagens do site, editáveis pelo Decap CMS em src/content/home.json.
// As imagens ficam em public/uploads e são referenciadas pelo caminho (/uploads/...), não por import.
import conteudo from '@/content/home.json'
import contatoJson from '@/content/contato.json'

export const site = conteudo.site
export const hero = conteudo.hero
export const sobre = conteudo.sobre

// Edição sem fotos continua válida: a Home mostra "serão publicadas em breve"
export const edicoes = [...conteudo.edicoes]
  .sort((a, b) => b.ano - a.ano)
  .map((edicao) => ({
    ano: edicao.ano,
    fotos: (edicao.fotos ?? []).filter((f) => f.imagem).map((f) => ({ src: f.imagem, alt: f.alt })),
  }))

// Itens sem logo são ignorados para não renderizar <img> quebrada
const comLogo = (itens) => (itens ?? []).filter((item) => item.logo)

export const apoio = comLogo(conteudo.apoio)
export const parceiros = comLogo(conteudo.parceiros)
export const realizacao = comLogo(conteudo.realizacao)

export const contato = contatoJson
