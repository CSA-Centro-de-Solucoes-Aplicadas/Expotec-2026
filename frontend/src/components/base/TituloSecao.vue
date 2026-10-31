<script setup>
import IconeCategoria from './IconeCategoria.vue'

defineProps({
    forma: {
        type: String,
        required: true
    },
    cor: {
        type: String,
        required: true
    }
})
</script>
<template>
    <h2 class="titulo-secao">
        <IconeCategoria :forma="forma" :cor="cor" />
        <slot />
    </h2>
</template>
<style scoped>
.titulo-secao {
    display: grid;
    grid-template-columns: 2.25rem minmax(0, 1fr);
    align-items: center;
    font-size: clamp(1.375rem, 1.2rem + 0.75vw, 1.75rem);
}

/* Tamanhos dos ícones de forma nos títulos, conforme os protótipos */
.titulo-secao .icone-circulo {
    width: 1.25rem;
    height: 1.25rem;
}

.titulo-secao .icone-triangulo {
    width: 1.25rem;
    height: 1.125rem;
}

.titulo-secao .icone-quadrado {
    width: 1rem;
    height: 1rem;
    border-radius: 0.1875rem;
}

.titulo-secao .icone-semicirculo {
    width: 1.375rem;
    height: 0.6875rem;
}
</style>
