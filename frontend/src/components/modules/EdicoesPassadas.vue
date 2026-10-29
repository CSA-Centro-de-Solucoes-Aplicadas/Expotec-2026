<script setup>
import { computed, ref } from 'vue'
import { edicoes } from '@/data/home'

const anoSelecionado = ref(edicoes[0].ano)
const edicaoSelecionada = computed(() => edicoes.find((edicao) => edicao.ano === anoSelecionado.value))
</script>
<template>
    <section class="limite" aria-labelledby="titulo-edicoes">
        <h2 id="titulo-edicoes">Edições passadas</h2>

        <div class="anos" role="group" aria-label="Ano da edição">
            <button
                v-for="edicao in edicoes"
                :key="edicao.ano"
                type="button"
                class="ano"
                :aria-pressed="anoSelecionado === edicao.ano"
                @click="anoSelecionado = edicao.ano"
            >
                {{ edicao.ano }}
            </button>
        </div>

        <ul v-if="edicaoSelecionada.fotos.length" class="galeria">
            <li v-for="foto in edicaoSelecionada.fotos" :key="foto.src">
                <img :src="foto.src" :alt="foto.alt" loading="lazy">
            </li>
        </ul>
        <p v-else class="sem-fotos" role="status">As fotos da edição {{ anoSelecionado }} serão publicadas em breve.</p>
    </section>
</template>
<style scoped>
section {
    padding-block: var(--espaco-secao);
}

.anos {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1.75rem;
    margin: 1.5rem 0 1.75rem;
}

.ano {
    padding: 0.25rem 0.125rem;
    background: none;
    border: 0;
    border-bottom: 3px solid transparent;
    color: var(--cor-texto-suave);
    font-family: inherit;
    font-size: 1.125rem;
    font-weight: 800;
    cursor: pointer;
}

.ano:hover,
.ano[aria-pressed='true'] {
    color: var(--cor-marrom);
}

.ano[aria-pressed='true'] {
    border-bottom-color: #ff8c1a;
}

.ano:focus-visible {
    outline: 3px solid var(--cor-marrom);
    outline-offset: 2px;
}

.galeria {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.25rem;
    margin: 0;
    padding: 0;
    list-style: none;
}

.galeria img {
    display: block;
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    border-radius: 0.25rem;
}

.sem-fotos {
    margin: 0;
    color: var(--cor-texto-suave);
    font-weight: 500;
}

@media (max-width: 900px) {
    .galeria {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.75rem;
    }
}
</style>
