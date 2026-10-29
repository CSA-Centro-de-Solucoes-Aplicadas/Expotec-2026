// Conteúdo provisório da Home (edições passadas, apoio e parceiros).
// As imagens em assets/edicoes e assets/logos foram recortadas do protótipo:
// substitua pelos arquivos originais quando estiverem disponíveis.
import fotoOficina from '@/assets/edicoes/2021-oficina.jpg'
import fotoRobotica from '@/assets/homesobreexp.png'
import fotoDanca from '@/assets/edicoes/2021-danca.jpg'
import fotoEstande from '@/assets/edicoes/2021-estande.jpg'
import logoFuncern from '@/assets/logos/funcern.png'
import logoCern from '@/assets/logos/cern.png'
import logoAeb from '@/assets/logos/aeb.png'
import logoMcti from '@/assets/logos/mcti.png'
import logoLivraria from '@/assets/logos/livraria-2048x1024.png'
import logoMcm from '@/assets/logos/mcm-2048x1024.png'
import logoIfrn from '@/assets/logos/ifrn.png'
import logoDpeq from '@/assets/logos/dpeq.png'
import logoDirex from '@/assets/logos/direx.png'

export const edicoes = [
  {
    ano: 2021,
    fotos: [
      { src: fotoOficina, alt: 'Estudante auxilia visitante em uma oficina prática' },
      { src: fotoRobotica, alt: 'Crianças observam robôs de LEGO em um estande' },
      { src: fotoDanca, alt: 'Apresentação de dança no palco do evento' },
      { src: fotoEstande, alt: 'Estudante apresenta projeto com placa solar em um estande' },
    ],
  },
  { ano: 2017, fotos: [] },
  { ano: 2016, fotos: [] },
  { ano: 2014, fotos: [] },
  { ano: 2013, fotos: [] },
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

export const contato = {
  instagram: 'expotec.cnat',
  email: 'expotec.cnat@ifrn.edu.br',
  telefone: '(84) 4005-9998',
  endereco: ['Av. Senador Salgado Filho, 1559, Tirol', 'Natal, RN · CEP 59015-000'],
}
