// Dados provisórios da programação. Para integrar com a API, basta substituir
// estes arrays por dados no mesmo formato.

import conteudo from '@/content/atividades.json'

export const linkSuap = 'https://suap.ifrn.edu.br'

export const categorias = [
  { id: 'palestra', nome: 'Palestra', forma: 'semicirculo', cor: '#5300bb' },
  { id: 'oficina', nome: 'Oficina', forma: 'triangulo', cor: '#ff8c1a' },
  { id: 'minicurso', nome: 'Minicurso', forma: 'quadrado', cor: '#2eb10a' },
  { id: 'exposicao', nome: 'Exposição', forma: 'circulo', cor: '#18b2b5' },
  { id: 'cultural', nome: 'Cultural', forma: 'circulo', cor: '#cf37df' },
]

// `data` fica como [dd/mm] até a definição do calendário do evento.
// A forma decorativa usa `cor` quando o dia não está selecionado e `corForma` quando está.
export const dias = [
  { id: 'quarta', nome: 'Quarta', data: '[dd/mm]', cor: '#ff8c1a', forma: 'triangulo', corForma: '#fde068' },
  { id: 'quinta', nome: 'Quinta', data: '[dd/mm]', cor: '#29d0d3', forma: 'semicirculo', corForma: '#18b2b5' },
  { id: 'sexta', nome: 'Sexta', data: '[dd/mm]', cor: '#a86bff', forma: 'circulo', corForma: '#7323d8' },
]

export const atividades = conteudo.atividades