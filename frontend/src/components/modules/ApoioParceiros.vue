<script setup>
import CarrosselLogos from '../base/CarrosselLogos.vue'
import { apoio, parceiros } from '@/data/home'
</script>
<template>
    <section class="limite" aria-labelledby="titulo-apoio">
        <h2 id="titulo-apoio">Apoio</h2>
        <ul class="apoio">
            <li v-for="item in apoio" :key="item.nome" class="cartao-logo">
                <img :src="item.logo" :alt="item.nome" loading="lazy">
            </li>
        </ul>

        <h2 id="titulo-parceiros">Parceiros</h2>
        <CarrosselLogos :logos="parceiros" aria-labelledby="titulo-parceiros" />
    </section>
</template>
<style scoped>
section {
    padding-block: var(--espaco-secao);
}

h2 + * {
    margin-top: 2rem;
}

.apoio {
    display: flex;
    margin-bottom: 3rem;
    padding: 0;
    list-style: none;
}

.apoio li {
    flex: 0 0 clamp(14rem, 27vw, 24rem);
}
</style>
