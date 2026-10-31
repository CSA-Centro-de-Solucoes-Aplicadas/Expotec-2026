<template>
    <section class="limite">
    <span class="tema">TEMA 2026</span>
    <h2 class="titulo-pluralidade">Vozes: pluralidade na Educação, Ciência e Tecnologia</h2>
    <p class="conteudo-pluralidade">Cada curso, cada laboratório e cada pessoa fala do seu jeito. Esta edição celebra as muitas formas de produzir, comunicar e compartilhar conhecimento.</p>
    <CartoesPluralidade/>
    </section>
</template>
<script setup>
import CartoesPluralidade from './CartoesPluralidade.vue'
</script>
<style scoped>
 section{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-block: var(--espaco-secao);
 }
 section span{
    color: var(--cor-texto-suave);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    margin-bottom: 0.75rem;
 }
 .conteudo-pluralidade{
    font-weight: 400;
    line-height: 1.6;
    margin: 1rem 0 2.5rem;
 }
</style>
