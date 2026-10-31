<script setup>
import expotec from '@/assets/expotec-extenso.svg'
import { contato, realizacao } from '@/data/home'
</script>
<template>
    <footer>
        <div class="conteudo limite">
            <div class="marca">
                <img :src="expotec" alt="Expotec" class="logotipo">
                <h2 class="rotulo">Realização</h2>
                <ul class="realizacao">
                    <li v-for="item in realizacao" :key="item.nome">
                        <img :src="item.logo" :alt="item.nome" loading="lazy">
                    </li>
                </ul>
            </div>
            <address id="contato">
                <h2 class="rotulo">Contato</h2>
                <a :href="`https://www.instagram.com/${contato.instagram}`" target="_blank" rel="noopener">
                    Instagram @{{ contato.instagram }}
                </a>
                <a :href="`mailto:${contato.email}`">{{ contato.email }}</a>
            </address>
        </div>
        <div class="creditos">
            <p class="limite">
                Desenvolvido pelo <a href="https://csa.cnat.ifrn.edu.br/" target="_blank" rel="noopener">Centro de Soluções Aplicadas</a>
            </p>
        </div>
    </footer>
</template>
<style scoped>
footer {
    /* Faixa colorida com as cores da identidade visual */
    border-top: 0.875rem solid;
    border-image: linear-gradient(
            to right,
            #ff8c1a 0 8.33%, #2eb10a 0 16.66%, #007172 0 25%, #29d0d3 0 33.33%,
            #fdc803 0 41.66%, #ff7270 0 50%, #e02929 0 58.33%, #5300bb 0 66.66%,
            #a86bff 0 75%, #ff55ff 0 83.33%, #cf37df 0 91.66%, #84ff5e 0
        ) 1;
    background-color: var(--cor-marrom-escuro);
    color: white;
}

.conteudo {
    display: flex;
    justify-content: space-between;
    gap: 2.5rem 3rem;
    padding-block: 5rem 3rem;
}

.logotipo {
    display: block;
    width: 19rem;
}

.rotulo {
    margin: 2rem 0 0.75rem;
    color: var(--cor-amarelo);
    font-size: 0.875rem;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-transform: uppercase;
}

.realizacao {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem 3rem;
    margin: 0;
    padding: 0;
    list-style: none;
}

.realizacao img {
    display: block;
    height: 2.75rem;
    width: auto;
}

address {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-style: normal;
}

address .rotulo {
    margin-top: 0;
}

a {
    color: inherit;
}

address a {
    text-decoration: none;
}

address a:hover {
    text-decoration: underline;
}

a:focus-visible {
    outline: 2px solid var(--cor-amarelo);
    outline-offset: 2px;
}

.creditos {
    padding-block: 1.5rem;
    border-top: 1px solid rgb(255 255 255 / 0.2);
    font-size: 0.875rem;
    font-weight: 400;
}

.creditos p {
    margin-block: 0;
}

@media (max-width: 900px) {
    .conteudo {
        flex-direction: column;
        padding-top: 3rem;
    }

    .logotipo {
        width: 14rem;
    }

    .realizacao {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    .realizacao img {
        height: 2.25rem;
    }
}
</style>
