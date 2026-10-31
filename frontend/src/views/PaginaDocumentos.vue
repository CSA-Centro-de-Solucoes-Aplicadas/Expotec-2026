<template>
    <CabecalhoPagina
        titulo="Documentos"
        descricao="Avisos, certificados, manuais e modelos da Expotec 2026 em um só lugar."
    />

    <div class="limite">
        <section class="secao" aria-labelledby="titulo-avisos">
            <TituloSecao id="titulo-avisos" forma="circulo" cor="#ff8c1a">Avisos</TituloSecao>
            <ul v-if="avisos.length" class="avisos">
                <li v-for="aviso in avisos" :key="aviso.titulo">
                    <span class="data">{{ aviso.data }}</span>
                    <span class="titulo-aviso">{{ aviso.titulo }}</span>
                    <a v-if="aviso.href" :href="aviso.href" class="link-acao">Ler aviso<span class="visualmente-oculto">: {{ aviso.titulo }}</span></a>
                </li>
            </ul>
            <p v-else class="sem-conteudo" role="status">Os avisos serão publicados em breve.</p>
        </section>

        <section class="secao" aria-labelledby="titulo-recursos">
            <TituloSecao id="titulo-recursos" forma="triangulo" cor="#2eb10a">Certificados e manuais</TituloSecao>
            <ul class="recursos">
                <li v-for="recurso in recursos" :key="recurso.titulo" class="recurso" :style="{ backgroundColor: recurso.cor }">
                    <span
                        class="decoracao"
                        :class="`decoracao-${recurso.forma}`"
                        :style="{ backgroundColor: recurso.corForma }"
                        aria-hidden="true"
                    ></span>
                    <h3>{{ recurso.titulo }}</h3>
                    <p>{{ recurso.texto }}</p>
                    <a v-if="recurso.href" :href="recurso.href" class="link-acao">Acessar<span class="visualmente-oculto"> {{ recurso.titulo }}</span></a>
                    <span v-else class="em-breve">Em breve</span>
                </li>
            </ul>
        </section>
    </div>

    <section class="arquivos" aria-labelledby="titulo-arquivos">
        <div class="limite">
            <TituloSecao id="titulo-arquivos" forma="semicirculo" cor="#29d0d3">Arquivos para baixar</TituloSecao>
            <ul v-if="arquivos.length">
                <li v-for="arquivo in arquivos" :key="arquivo.titulo">
                    <span class="tipo">{{ arquivo.tipo }}</span>
                    <span class="titulo-arquivo">{{ arquivo.titulo }}</span>
                    <a
                        :href="arquivo.href"
                        download
                        class="link-acao"
                    >Baixar<span class="visualmente-oculto"> {{ arquivo.titulo }} ({{ arquivo.tipo }})</span></a>
                </li>
            </ul>
            <p v-else class="sem-conteudo" role="status">Os arquivos serão publicados em breve.</p>
        </div>
    </section>
</template>
<script setup>
import CabecalhoPagina from '@/components/base/CabecalhoPagina.vue'
import TituloSecao from '@/components/base/TituloSecao.vue'
import { arquivos, avisos, recursos } from '@/data/documentos'
</script>
<style scoped>
ul {
    margin: 2rem 0 0;
    padding: 0;
    list-style: none;
}

.secao {
    padding-block: 4.5rem;
}

.secao + .secao {
    padding-top: 1.5rem;
}

/* Links de texto das listas e cartões ("Ler aviso", "Acessar", "Baixar") */
.link-acao {
    color: inherit;
    text-decoration: underline;
    font-size: 0.875rem;
    font-weight: 800;
    text-underline-offset: 0.15em;
    white-space: nowrap;
}

.link-acao:focus-visible {
    outline: 3px solid var(--cor-marrom);
    outline-offset: 2px;
}

.avisos {
    border-top: 2px solid var(--cor-marrom);
}

.avisos li {
    display: grid;
    grid-template-columns: 11.375rem minmax(0, 1fr) auto;
    align-items: center;
    gap: 1rem;
    min-height: 4.5rem;
    padding-block: 1rem;
    border-bottom: 1px solid var(--cor-borda-clara);
}

/* Mesmo estilo da mensagem de edições sem fotos, na Home */
.sem-conteudo {
    margin: 2rem 0 0;
    color: var(--cor-texto-suave);
    font-weight: 500;
}

.data {
    color: var(--cor-texto-suave);
    font-size: 0.875rem;
}

.titulo-aviso,
.titulo-arquivo {
    font-size: clamp(1.0625rem, 1rem + 0.2vw, 1.125rem);
    font-weight: 600;
    line-height: 1.45;
}

.recursos {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.25rem;
}

.recurso {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 14.375rem;
    padding: 1.75rem;
    border-radius: 0.375rem;
}

.recurso h3 {
    margin: 0;
    font-size: clamp(1.375rem, 1.25rem + 0.3vw, 1.5rem);
    font-weight: 800;
    line-height: 1.2;
}

.recurso p {
    margin: 1.25rem 0 1.5rem;
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.6;
}

.recurso .link-acao,
.recurso .em-breve {
    margin-top: auto;
    align-self: flex-start;
    font-size: 0.9375rem;
}

.recurso .em-breve {
    font-weight: 800;
}

/* Forma decorativa no canto inferior direito, atrás do texto */
.decoracao {
    position: absolute;
    z-index: -1;
}

.decoracao-circulo {
    right: -1.5rem;
    bottom: -2.5rem;
    width: 8.25rem;
    aspect-ratio: 1;
    border-radius: 50%;
}

.decoracao-pilula {
    right: -2rem;
    bottom: 1.75rem;
    width: 9.5rem;
    height: 4rem;
    border-radius: 999px;
}

.decoracao-triangulo {
    right: -1.25rem;
    bottom: 0;
    width: 8.25rem;
    height: 8.125rem;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.arquivos {
    padding-block: 4.5rem 6rem;
    background-color: var(--cor-creme);
    border-top: 2px solid var(--cor-marrom);
}

.arquivos ul {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
}

.arquivos li {
    display: grid;
    grid-template-columns: 4rem minmax(0, 1fr) auto;
    align-items: center;
    gap: 1.5rem;
    min-height: 4.1875rem;
    padding: 0.75rem 1.5rem;
    background-color: white;
    border-radius: 0.25rem;
}

.tipo {
    justify-self: start;
    padding: 0.25rem 0.875rem;
    background-color: var(--cor-creme);
    border-radius: 999px;
    font-size: 0.6875rem;
    font-weight: 800;
    letter-spacing: 0.08em;
}

@media (max-width: 1024px) {
    .recursos {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 600px) {
    ul {
        margin-top: 1.5rem;
    }

    .secao {
        padding-block: 3.5rem;
    }

    .secao + .secao {
        padding-top: 0.5rem;
    }

    .avisos li,
    .arquivos li {
        grid-template-columns: minmax(0, 1fr);
        justify-items: start;
        gap: 0.5rem;
    }

    .avisos li {
        padding-block: 1.25rem;
    }

    .data {
        font-size: 0.8125rem;
    }

    .recursos {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .recurso {
        padding: 1.75rem;
    }

    .arquivos {
        padding-block: 3.5rem 4rem;
    }

    .arquivos li {
        padding: 1.25rem;
    }
}
</style>
