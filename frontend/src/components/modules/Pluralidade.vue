<template>
    <section class="limite">
    <span class="tema">TEMA 2026</span>
    <h2 class="titulo-pluralidade">Vozes: pluralidade na Educação, Ciência e Tecnologia</h2>
    <p class="conteudo-pluralidade">Cada curso, cada laboratório e cada pessoa fala do seu jeito. Esta edição celebra as muitas formas de produzir, comunicar e compartilhar conhecimento.</p>
    <div>
        <div class="educacao">
            <h3>Educação</h3>
            <p>Salas, laboratórios e projetos que mostram como se aprende e se ensina no campus.</p>
        </div>
        <div class="ciencia">
            <h3>Ciência</h3>
            <p>Pesquisas apresentadas por quem as faz, da iniciação científica aos grupos de pesquisa.</p>
        </div>
        <div class="tecnologia">
            <h3>Tecnologia</h3>
            <p>Soluções criadas nos cursos técnicos, nas graduações e nos projetos de extensão.</p>
        </div>
    </div>
    </section>
</template>
<script setup></script>
<style scoped>
 section{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-block: var(--espaco-secao);
 }
section h3{
    font-size: clamp(1.5rem, 1.2rem + 0.8vw, 1.875rem);
    font-weight: 800;
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
 section > div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
}
 section > div > div{
    padding: 1.5rem 2rem;
    border-radius: 0.2rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    min-height: 19rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    & h3{
        margin: 0;
    }
    & p{
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.5;
        margin: 0.5rem 0 0;
        opacity: 0.85;
    }
 }
 section .educacao{
    background-color: #ff912e;
    background-image: url('@/assets/Educação.svg');
 }
 .ciencia{
    background-color: #48c8cc;
    background-image: url('@/assets/Ciência.svg');
 }
 .tecnologia{
    background-color: #a45ff2;
    background-image: url('@/assets/Tecnologia.svg');
 }

 @media (max-width: 900px) {
    section > div {
        grid-template-columns: 1fr;
    }
    section > div > div{
        min-height: 15rem;
        padding: 1.5rem;
    }
 }
</style>
