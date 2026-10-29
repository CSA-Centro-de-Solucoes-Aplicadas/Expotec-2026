// Conteúdo provisório da página de documentos. Preencha `href` com o endereço
// de cada aviso, página ou arquivo quando for publicado.

export const avisos = [
  { data: '[dd/mm]', titulo: 'Submissão de trabalhos para a mostra científica', href: undefined },
  { data: '[dd/mm]', titulo: 'Inscrições em minicursos e oficinas pelo SUAP', href: undefined },
  { data: '[dd/mm]', titulo: 'Orientações para montagem dos estandes', href: undefined },
]

// `cor` é o fundo do cartão; `forma` e `corForma` definem a forma decorativa no canto
export const recursos = [
  {
    titulo: 'Certificados',
    texto: 'Emita o certificado de participação, apresentação ou organização.',
    cor: '#fdc803',
    forma: 'circulo',
    corForma: '#f0b503',
    href: undefined,
  },
  {
    titulo: 'Manual do participante',
    texto: 'Como se inscrever, onde ficam os espaços e o que levar.',
    cor: '#29d0d3',
    forma: 'circulo',
    corForma: '#18b2b5',
    href: undefined,
  },
  {
    titulo: 'Manual do expositor',
    texto: 'Montagem do estande, horários e regras de apresentação.',
    cor: '#ff7270',
    forma: 'pilula',
    corForma: '#ff3f3e',
    href: undefined,
  },
  {
    titulo: 'Modelos de trabalho',
    texto: 'Modelos de resumo, artigo e pôster para a mostra científica.',
    cor: '#84ff5e',
    forma: 'triangulo',
    corForma: '#66e540',
    href: undefined,
  },
]

export const arquivos = [
  { tipo: 'PDF', titulo: 'Regulamento da Expotec 2026', href: undefined },
  { tipo: 'PDF', titulo: 'Edital da mostra científica', href: undefined },
  { tipo: 'DOCX', titulo: 'Modelo de resumo expandido', href: undefined },
  { tipo: 'PPTX', titulo: 'Template oficial de apresentação', href: undefined },
  { tipo: 'PPTX', titulo: 'Modelo de pôster', href: undefined },
]
