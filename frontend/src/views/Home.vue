<template>
    <Hero/>
    <img :src="Formas" alt="Formas Geométricas">
    <SobreExpotec/>
    <Pluralidade/>
</template>
<script setup>
    import Hero from '@/components/modules/Hero.vue';
    import Formas from '@/assets/Listra de formas.svg'
    import SobreExpotec from '@/components/modules/SobreExpotec.vue';
    import Pluralidade from '@/components/modules/Pluralidade.vue';
</script>
<style scoped>
    img{
        width: 100%;
        display: block;
        height: auto;
    }
</style>