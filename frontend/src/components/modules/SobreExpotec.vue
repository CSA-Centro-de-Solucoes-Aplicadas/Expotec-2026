<template>
    <section id="sobre" class="limite">
        <div>
            <h2 class="titulo2-exp"> O que é a Expotec</h2>
            <p class="descricao-exp">A Exposição Científica, Tecnológica e Cultural do IFRN é o maior evento científico
                do Campus Natal-Central. É quando estudantes e servidores mostram à comunidade interna e externa o que
                se produz no campus em ensino, pesquisa, extensão e cultura.</p>
        </div>
        <img :src="homesobreexp" alt="Estudantes apresentam robôs de LEGO a crianças em um estande da Expotec">
    </section>
</template>
<script setup>
import homesobreexp from '@/assets/homesobreexp.png'
</script>
<style scoped>
section {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
    gap: 3rem;
    padding-block: var(--espaco-secao);
}

section p {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.6;
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
        gap: 1rem;
    }

    section p {
        font-size: 1rem;
    }
}
</style>
