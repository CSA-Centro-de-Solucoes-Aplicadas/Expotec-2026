// Conteúdo da Home (edições passadas, apoio e parceiros).
// Os logos em assets/logos foram recortados do protótipo: substitua pelos originais quando estiverem disponíveis.
import contatoJson from '@/content/contato.json'
import fotoRobotica from '@/assets/homesobreexp.png'
import logoFuncern from '@/assets/logos/funcern.png'
import logoCern from '@/assets/logos/cern.png'
import logoAeb from '@/assets/logos/aeb.png'
import logoMcti from '@/assets/logos/mcti.png'
import logoLivraria from '@/assets/logos/livraria-2048x1024.png'
import logoMcm from '@/assets/logos/mcm-2048x1024.png'
import logoIfrn from '@/assets/logos/ifrn.png'
import logoDpeq from '@/assets/logos/dpeq.png'
import logoDirex from '@/assets/logos/direx.png'

// Fotos de assets/edicoes, nomeadas pelo ano da edição (ex.: 2016-expotec2.png)
const fotos = import.meta.glob('../assets/edicoes/*', { eager: true, import: 'default' })
const foto = (arquivo, alt) => ({ src: fotos[`../assets/edicoes/${arquivo}`], alt })

export const edicoes = [
  {
    ano: 2021,
    fotos: [
      foto('2021-expotec3.png', 'Apresentadores abrem a Expotec no palco do auditório'),
      foto('2021-expotec.png', 'Trio de clarinete, piano e violoncelo se apresenta no palco'),
      foto('2021-expotec2.jpg', 'Músico toca violão sentado no Palco Cultural'),
      foto('2021-expotec4.png', 'Estudante canta no espetáculo O Nordeste Tecnológico'),
    ],
  },
  {
    ano: 2017,
    fotos: [
      foto('2017-oficina.jpg', 'Estudante auxilia visitante em uma oficina prática'),
      { src: fotoRobotica, alt: 'Crianças observam robôs de LEGO em um estande' },
      foto('2017-danca.jpg', 'Apresentação de dança no palco do evento'),
      foto('2017-estande.jpg', 'Estudante apresenta projeto com placa solar em um estande'),
    ],
  },
  {
    ano: 2016,
    fotos: [
      foto('2016-expotec.png', 'Estudantes e professores posam diante dos pôsteres de seus projetos'),
      foto('2016-expotec2.png', 'Banda sinfônica do campus se apresenta com regente'),
      foto('2016-expotec3.png', 'Estudantes tocam clarinete na banda sinfônica'),
      foto('2016-expotec4.png', 'Integrantes de um grupo escoteiro no estande de doações'),
    ],
  },
  {
    ano: 2014,
    fotos: [
      foto('2014-expotec.png', 'Estudantes jogam um jogo de tabuleiro gigante no estande de Educação Matemática'),
      foto('2014-expotec2.png', 'Violinista e pianista se apresentam no palco para estudantes'),
      foto('2014-expotec3.png', 'Estudantes fazem uma atividade ao ar livre no gramado do campus'),
      foto('2014-expotec4.png', 'Visitantes participam de jogos matemáticos em um estande'),
    ],
  },
  {
    ano: 2013,
    fotos: [
      foto('2013-expotec2.png', 'Placa iluminada da Expotec 2013 ao anoitecer'),
      foto('2013-expotec.png', 'Estudantes e professor jogam no estande Aqui é Legal Aprender Matemática'),
      foto('2013-expotec3.png', 'Estudantes recebem premiação no auditório'),
      foto('2013-expotec4.png', 'Estudantes pintam juntos um painel coletivo'),
    ],
  },
]

export const apoio = [{ nome: 'FUNCERN – Fundação de Apoio ao IFRN', logo: logoFuncern }]

export const parceiros = [
  { nome: 'CERN', logo: logoCern },
  { nome: 'AEB – Agência Espacial Brasileira', logo: logoAeb },
  { nome: 'Ministério da Ciência, Tecnologia e Inovação', logo: logoMcti },
  { nome: 'Livraria Cooperativa Cultural', logo: logoLivraria },
  { nome: 'MCM – Museu de Ciências Morfológicas', logo: logoMcm },
]

export const realizacao = [
  { nome: 'Instituto Federal do Rio Grande do Norte – Campus Natal-Central', logo: logoIfrn },
  { nome: 'DPEQ – Diretoria de Pesquisa e Inovação', logo: logoDpeq },
  { nome: 'DIREX – Diretoria de Extensão', logo: logoDirex },
]

export const contato = contatoJson