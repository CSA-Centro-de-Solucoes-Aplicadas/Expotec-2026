// Atividades editáveis pelo CMS em src/content/atividades/*.json; dias e categorias são fixos do evento
const arquivos = import.meta.glob('@/content/atividades/*.json', { eager: true, import: 'default' })

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

const horarioEmMinutos = (horario = '') => {
  const [hora = '0', minuto = '0'] = String(horario).trim().split(/[h:]/)
  return Number(hora) * 60 + Number(minuto)
}

const ordemDias = { quarta: 1, quinta: 2, sexta: 3 }

export const atividades = Object.values(arquivos).sort((a, b) => {
  const diffDia = (ordemDias[a.dia] || 99) - (ordemDias[b.dia] || 99)
  if (diffDia !== 0) return diffDia
  return horarioEmMinutos(a.inicio) - horarioEmMinutos(b.inicio)
})