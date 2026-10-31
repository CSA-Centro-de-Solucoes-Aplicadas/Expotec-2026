<template>
    <CabecalhoPagina
        sobretitulo="Mostra científica"
        titulo="Trabalhos científicos"
        descricao="Orientações para quem vai apresentar trabalho na Expotec 2026. Leia com atenção antes do dia da sua sessão."
    />

    <div class="diretrizes limite">
        <section
            v-for="(diretriz, indice) in diretrizes"
            :key="diretriz.titulo"
            :aria-labelledby="`diretriz-${indice}`"
        >
            <TituloSecao :id="`diretriz-${indice}`" :forma="diretriz.forma" :cor="diretriz.cor">
                {{ diretriz.titulo }}
            </TituloSecao>
            <!-- role="list" mantém a semântica de lista no Safari, que a remove com list-style: none -->
            <ol role="list">
                <li v-for="item in diretriz.itens" :key="item.texto">
                    <span>
                        {{ item.texto }}<a v-if="item.link" :href="item.link.href">{{ item.link.rotulo }}</a>{{ item.complemento }}
                    </span>
                </li>
            </ol>
        </section>
    </div>

    <section id="documentos" class="documentos" aria-labelledby="titulo-documentos">
        <div class="limite">
            <h2 id="titulo-documentos">Documentos da mostra</h2>
            <ul v-if="documentos.length">
                <li v-for="documento in documentos" :key="documento.titulo">
                    <BaseButton variant="secondary" :href="documento.href">{{ documento.titulo }}</BaseButton>
                </li>
            </ul>
            <p v-else class="sem-conteudo" role="status">Os documentos serão publicados em breve.</p>
        </div>
    </section>
</template>
<script setup>
import BaseButton from '@/components/base/BaseButton.vue'
import CabecalhoPagina from '@/components/base/CabecalhoPagina.vue'
import TituloSecao from '@/components/base/TituloSecao.vue'
import { diretrizes, documentos } from '@/data/trabalhos'
</script>
<style scoped>
.diretrizes {
    padding-block: 1.75rem 6rem;
}

.diretrizes section {
    padding-block: 2.75rem;
}

.diretrizes section + section {
    border-top: 1px solid var(--cor-borda-clara);
}

h2 {
    font-size: clamp(1.375rem, 1.2rem + 0.75vw, 1.75rem);
}


ol {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    margin: 1.25rem 0 0;
    padding: 0;
    list-style: none;
    counter-reset: item;
}

ol li {
    display: grid;
    grid-template-columns: 2.25rem minmax(0, 1fr);
    counter-increment: item;
    font-size: clamp(0.96875rem, 0.9rem + 0.3vw, 1.1875rem);
    font-weight: 400;
    line-height: 1.7;
}

ol li::before {
    content: counter(item) '.';
    color: var(--cor-texto-suave);
    font-size: 0.9375rem;
    font-weight: 800;
}

ol a {
    color: inherit;
    font-weight: 700;
    text-underline-offset: 0.15em;
}

ol a:focus-visible {
    outline: 3px solid var(--cor-amarelo);
    outline-offset: 2px;
}

.documentos {
    padding-block: 4.5rem;
    background-color: var(--cor-creme);
    border-top: 2px solid var(--cor-marrom);
    scroll-margin-top: 1rem;
}

.documentos ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 1.5rem 0 0;
    padding: 0;
    list-style: none;
}

.sem-conteudo {
    margin: 1.5rem 0 0;
    color: var(--cor-texto-suave);
    font-weight: 500;
}

.documentos .botao {
    min-height: 3.125rem;
    padding-inline: 1.625rem;
    background-color: white;
    font-size: 1rem;
    font-weight: 700;
}

.documentos .botao:hover {
    background-color: var(--cor-marrom);
}

@media (max-width: 600px) {
    .diretrizes {
        padding-block: 1rem 4rem;
    }

    .diretrizes section {
        padding-block: 2.5rem;
    }

    .documentos {
        padding-block: 3.5rem 4rem;
    }

    .documentos ul {
        flex-direction: column;
    }

    .documentos .botao {
        width: 100%;
    }
}
</style>
