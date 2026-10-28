<template>
    <section>
        <div>
            <h2 class="titulo2-exp"> O que é a Expotec</h2>
            <p class="descricao-exp">A Exposição Científica, Tecnológica e Cultural do IFRN é o maior evento científico
                do Campus Natal-Central. É quando estudantes e servidores mostram à comunidade interna e externa o que
                se produz no campus em ensino, pesquisa, extensão e cultura.</p>
        </div>
        <img :src="homesobreexp" alt="">
    </section>
</template>
<script setup>
import homesobreexp from '@/assets/homesobreexp.png'
</script>
<style scoped>
section {
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 0 5rem;
    min-height: 40rem;
}

section div {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 30rem;
}

section h2 {
    font-size: 3rem;
    line-height: 1.2;
    margin: 0;
}

section p {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.8;
}

section img {
    height: 30rem;
    width: auto;
    object-fit: contain;
}
</style>