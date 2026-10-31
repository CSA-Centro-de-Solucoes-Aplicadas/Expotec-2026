// Atividades editáveis pelo Decap CMS em src/content/atividades.json; dias e categorias são fixos do evento
import conteudo from '@/content/atividades.json'

export const categorias = [
  { id: 'palestra', nome: 'Palestra', forma: 'semicirculo', cor: '#5300bb' },
  { id: 'oficina', nome: 'Oficina', forma: 'triangulo', cor: '#ff8c1a' },
  { id: 'minicurso', nome: 'Minicurso', forma: 'quadrado', cor: '#2eb10a' },
  { id: 'exposicao', nome: 'Exposição', forma: 'circulo', cor: '#18b2b5' },
  { id: 'cultural', nome: 'Cultural', forma: 'circulo', cor: '#cf37df' },
]

// A forma decorativa usa `cor` quando o dia não está selecionado e `corForma` quando está.
export const dias = [
  { id: 'quarta', nome: 'Quarta', data: '25/11', cor: '#ff8c1a', forma: 'triangulo', corForma: '#fde068' },
  { id: 'quinta', nome: 'Quinta', data: '26/11', cor: '#29d0d3', forma: 'semicirculo', corForma: '#18b2b5' },
  { id: 'sexta', nome: 'Sexta', data: '27/11', cor: '#a86bff', forma: 'circulo', corForma: '#7323d8' },
]

export const atividades = conteudo.atividades