<script setup>
import { onBeforeUnmount, onMounted, onUpdated, ref, useId } from 'vue'

defineProps({
    // Lista no formato { nome, logo }; basta adicionar itens para o carrossel crescer
    logos: {
        type: Array,
        required: true
    }
})

const trilha = ref(null)
const noInicio = ref(true)
const noFim = ref(true)
const idTrilha = useId()

function atualizarLimites() {
    const { scrollLeft, scrollWidth, clientWidth } = trilha.value
    noInicio.value = scrollLeft <= 1
    noFim.value = scrollLeft + clientWidth >= scrollWidth - 1
}

// Avança exatamente um cartão (largura + espaçamento), mantendo o alinhamento do scroll-snap
function rolar(direcao) {
    const cartao = trilha.value.firstElementChild
    const passo = cartao.offsetWidth + parseFloat(getComputedStyle(trilha.value).columnGap)
    const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    trilha.value.scrollBy({ left: direcao * passo, behavior: reduzirMovimento ? 'auto' : 'smooth' })
}

let observador
onMounted(() => {
    observador = new ResizeObserver(atualizarLimites)
    observador.observe(trilha.value)
})
onUpdated(atualizarLimites)
onBeforeUnmount(() => observador.disconnect())
</script>
<template>
    <div class="carrossel" role="region" aria-roledescription="carrossel">
        <ul :id="idTrilha" ref="trilha" class="trilha" tabindex="0" @scroll.passive="atualizarLimites">
            <li v-for="item in logos" :key="item.nome" class="cartao-logo">
                <img :src="item.logo" :alt="item.nome" loading="lazy">
            </li>
        </ul>
        <div class="controles">
            <button
                type="button"
                class="controle"
                aria-label="Mostrar anteriores"
                :aria-controls="idTrilha"
                :disabled="noInicio"
                @click="rolar(-1)"
            >
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
            </button>
            <button
                type="button"
                class="controle"
                aria-label="Mostrar próximos"
                :aria-controls="idTrilha"
                :disabled="noFim"
                @click="rolar(1)"
            >
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
    </div>
</template>
<style scoped>
.carrossel {
    --visiveis: 3.3;
    --espaco: 1rem;
}

.trilha {
    display: flex;
    gap: var(--espaco);
    margin: 0;
    padding: 0 0 0.75rem;
    list-style: none;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: thin;
}

.trilha:focus-visible {
    outline: 3px solid var(--cor-marrom);
    outline-offset: 4px;
}

/* Exibe uma fração do próximo cartão para indicar que há mais itens; em telas largas o cartão para em 24rem */
.trilha > li {
    flex: 0 0 min(24rem, calc((100% - (var(--visiveis) - 1) * var(--espaco)) / var(--visiveis)));
    scroll-snap-align: start;
}

.controles {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-top: 0.75rem;
}

.controle {
    display: grid;
    place-items: center;
    width: 2.75rem;
    height: 2.75rem;
    padding: 0;
    background-color: transparent;
    border: 2px solid var(--cor-marrom);
    border-radius: 50%;
    color: var(--cor-marrom);
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
}

.controle svg {
    width: 1.25rem;
    height: 1.25rem;
    fill: none;
    stroke: currentColor;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.controle:hover:not(:disabled) {
    background-color: var(--cor-marrom);
    color: white;
}

.controle:focus-visible {
    outline: 3px solid var(--cor-amarelo);
    outline-offset: 2px;
}

.controle:disabled {
    opacity: 0.35;
    cursor: default;
}

@media (max-width: 900px) {
    .carrossel {
        --visiveis: 2.3;
    }
}

@media (max-width: 600px) {
    .carrossel {
        --visiveis: 1.4;
        --espaco: 0.75rem;
    }
}
</style>
