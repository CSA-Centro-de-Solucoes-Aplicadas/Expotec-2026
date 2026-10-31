<template>
<header>
    <div class="cabecalho limite">
        <router-link to="/"><img :src="site.logo" alt="Logotipo da Expotec" class="logotipo"/></router-link>
        <nav class="nav-principal" aria-label="Navegação principal">
            <ul>
                <li v-for="item in itensMenu" :key="item.rotulo">
                    <router-link v-slot="{ href, navigate }" :to="item.destino" custom>
                        <a :href="href" :aria-current="ativo(item) ? 'page' : undefined" @click="navigate">{{ item.rotulo }}</a>
                    </router-link>
                </li>
            </ul>
        </nav>
        <button
            type="button"
            class="botao-icone botao-menu"
            aria-label="Abrir menu"
            aria-controls="menu-lateral"
            :aria-expanded="menuAberto"
            @click="abrirMenu"
        >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
    </div>

    <!-- <dialog> modal: fundo sobreposto, foco preso no menu, Escape e conteúdo da página inerte -->
    <dialog
        id="menu-lateral"
        ref="menu"
        class="menu-lateral"
        aria-label="Menu"
        @click="fecharAoClicarFora"
        @close="aoFecharMenu"
    >
        <div class="menu-conteudo">
            <button type="button" class="botao-icone botao-fechar" aria-label="Fechar menu" @click="fecharMenu">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            <nav aria-label="Navegação principal">
                <ul>
                    <li v-for="item in itensMenu" :key="item.rotulo">
                        <router-link v-slot="{ href, navigate }" :to="item.destino" custom>
                            <a
                                :href="href"
                                :aria-current="ativo(item) ? 'page' : undefined"
                                @click="navigate($event); fecharMenu()"
                            >{{ item.rotulo }}</a>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </dialog>
</header>
</template>
<style scoped>


    header{
        width: 100%;
        border-bottom: 2px solid var(--cor-marrom);
    }
    .cabecalho{
        min-height: 4.5rem;
        display: flex;
        padding-block: 0.75rem;
        gap: 2rem;
        justify-content: space-between;
        align-items: center;
        & img{
            display: block;
            width: 14rem;
        }
    }
    .nav-principal > ul{
        height: auto;
        display: flex;
        list-style-type: none;
        justify-content: space-between;
        align-items: center;
        gap: 0.375rem;
        margin: 0;
        padding: 0;
        font-size: 0.875rem;
        white-space: nowrap;
        & li > *{
            display: block;
            padding: 0.75rem 0.875rem;
            border-radius: 999px;
        }
    }

    /* Página atual: pílula amarela. Restrito ao menu, pois o router-link do logo também recebe aria-current na Home */
    nav li > [aria-current='page']{
        background-color: var(--cor-amarelo);
        font-weight: 700;
        &:hover{
            text-decoration: none;
        }
    }

    a{
        color: inherit;
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }
    a:focus-visible, .botao-icone:focus-visible{
        outline: 3px solid var(--cor-amarelo);
        outline-offset: 2px;
    }

    .botao-icone{
        display: grid;
        place-items: center;
        width: 2.75rem;
        height: 2.75rem;
        padding: 0;
        background: none;
        border: 2px solid var(--cor-marrom);
        border-radius: 50%;
        color: var(--cor-marrom);
        cursor: pointer;
        & svg{
            width: 1.375rem;
            height: 1.375rem;
            fill: none;
            stroke: currentColor;
            stroke-width: 2.5;
            stroke-linecap: round;
        }
    }
    .botao-menu, .menu-lateral{
        display: none;
    }

    .menu-lateral{
        inset: 0 0 0 auto;
        width: min(20rem, 85vw);
        height: 100dvh;
        max-height: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-left: 2px solid var(--cor-marrom);
        background-color: var(--cor-fundo);
        color: var(--cor-marrom);
        translate: 100% 0;
        transition: translate 0.3s ease, overlay 0.3s allow-discrete, display 0.3s allow-discrete;
        &::backdrop{
            background-color: rgb(56 35 16 / 0.5);
            opacity: 0;
            transition: opacity 0.3s ease, overlay 0.3s allow-discrete, display 0.3s allow-discrete;
        }
    }
    .menu-lateral[open]{
        translate: 0 0;
        &::backdrop{
            opacity: 1;
        }
    }
    @starting-style{
        .menu-lateral[open]{
            translate: 100% 0;
        }
        .menu-lateral[open]::backdrop{
            opacity: 0;
        }
    }

    /* Faixa colorida no topo do menu, como no rodapé */
    .menu-conteudo{
        display: flex;
        flex-direction: column;
        min-height: 100%;
        padding: 1.25rem 1.5rem 2rem;
        border-top: 0.5rem solid;
        border-image: linear-gradient(to right, #ff8c1a 0 25%, #2eb10a 0 50%, #29d0d3 0 75%, #a86bff 0) 1;
        & nav ul{
            margin: 1.5rem 0 0;
            padding: 0;
            list-style: none;
        }
        & li{
            border-bottom: 1px solid var(--cor-borda-clara);
        }
        & li > *{
            display: block;
            padding: 1rem 0;
            font-size: 1.125rem;
            font-weight: 700;
        }
        /* Pílula com recuo negativo para o texto continuar alinhado aos demais itens */
        & li > [aria-current='page']{
            margin-inline: -0.875rem;
            padding-inline: 0.875rem;
            border-radius: 999px;
        }
    }
    .botao-fechar{
        align-self: flex-end;
    }

    @media (prefers-reduced-motion: reduce){
        .menu-lateral, .menu-lateral::backdrop{
            transition: none;
        }
    }

    /* Abaixo do breakpoint a navegação desktop dá lugar ao menu lateral */
    @media (max-width: 960px) {
        .nav-principal{
            display: none;
        }
        .botao-menu{
            display: grid;
        }
        .menu-lateral[open]{
            display: block;
        }
    }

</style>
<script setup>
    import { onBeforeUnmount, onMounted, ref } from 'vue'
    import { useRoute } from 'vue-router'
    import { site } from '@/data/home'

    const itensMenu = [
        { rotulo: 'Sobre', destino: '/sobre' },
        { rotulo: 'Organização', destino: '/organizacao' },
        { rotulo: 'Trabalhos científicos', destino: '/trabalhos-cientificos' },
        { rotulo: 'Documentos', destino: '/documentos' },
        { rotulo: 'Contato', destino: '/contato' },
    ]

    // Compara só o caminho: âncoras como /#sobre não marcam a Home como página atual
    const rota = useRoute()
    const ativo = (item) => rota.path === item.destino

    const menu = ref(null)
    const menuAberto = ref(false)
    const telaDesktop = window.matchMedia('(min-width: 961px)')

    function abrirMenu() {
        menu.value.showModal()
        menuAberto.value = true
        document.documentElement.style.overflow = 'hidden'
    }

    function fecharMenu() {
        menu.value.close()
        aoFecharMenu()
    }

    // Também ligado ao evento close do <dialog>, que cobre o fechamento nativo pelo Escape
    function aoFecharMenu() {
        menuAberto.value = false
        document.documentElement.style.overflow = ''
    }

    // Cliques no fundo sobreposto chegam com o próprio <dialog> como alvo
    function fecharAoClicarFora(evento) {
        if (evento.target === menu.value) fecharMenu()
    }

    function fecharSeDesktop(evento) {
        if (evento.matches && menuAberto.value) fecharMenu()
    }

    onMounted(() => telaDesktop.addEventListener('change', fecharSeDesktop))
    onBeforeUnmount(() => {
        telaDesktop.removeEventListener('change', fecharSeDesktop)
        document.documentElement.style.overflow = ''
    })
</script>
