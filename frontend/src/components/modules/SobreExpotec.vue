
<template>
    <section id="sobre" class="limite">
        <p class="descricao-exp">{{ sobre.descricao }}</p>

        <img :src="sobre.imagem" :alt="sobre.imagemAlt">
    </section>
</template>

<script setup>
import { sobre } from '@/data/home'
</script>

<style scoped>
section {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    align-items: start;
    gap: 3rem;
    padding-block: var(--espaco-secao);
}

section p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.7;
    margin: 0;
}

section img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    border-radius: 0.25rem;
}

@media (max-width: 768px) {
    section {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    section p {
        font-size: 1rem;
    }
}
</style>
