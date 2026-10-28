<template>
    <section>
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
    padding: 0 5rem;
    min-height: 40rem;
 }
section h2 {
    font-size: 3rem;
    line-height: 1.2;
    margin: 0;
}
section h3{
    font-size: 2.2rem;
}
 section span{
    color: #6B5444;
 }
 section > div {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 4rem;
}
 section > div > div{
        min-height: 12rem;
    padding: 5.5rem 1.25rem 1.25rem;
    border-radius: 0.2rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    height:20rem ;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    & h3{
        margin: 0;
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
</style>