import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: () => import('@/views/PaginaSobre.vue'),
      meta: { titulo: 'Sobre' },
    },
    {
      path: '/trabalhos-cientificos',
      name: 'TrabalhosCientificos',
      component: () => import('@/views/TrabalhosCientificos.vue'),
      meta: { titulo: 'Trabalhos científicos' },
    },
    {
      path: '/documentos',
      name: 'Documentos',
      component: () => import('@/views/PaginaDocumentos.vue'),
      meta: { titulo: 'Documentos' },
    },
    {
      path: '/contato',
      name: 'Contato',
      component: () => import('@/views/PaginaContato.vue'),
      meta: { titulo: 'Contato' },
    },
  ],
  // Volta à posição salva, rola até a âncora (ex.: /#sobre) ou começa a página nova no topo
  scrollBehavior(to, from, posicaoSalva) {
    if (posicaoSalva) return posicaoSalva
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.titulo ? `${to.meta.titulo} · EXPOTEC` : 'EXPOTEC'
})

export default router
