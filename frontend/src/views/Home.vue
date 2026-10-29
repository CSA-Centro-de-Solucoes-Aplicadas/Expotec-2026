<template>
    <Hero/>
    <div class="listra-formas" aria-hidden="true"></div>
    <SobreExpotec/>
    <hr class="divisor">
    <Pluralidade/>
    <ProgramacaoEvento/>
    <EdicoesPassadas/>
    <hr class="divisor">
    <ApoioParceiros/>
</template>
<script setup>
    import Hero from '@/components/modules/Hero.vue';
    import SobreExpotec from '@/components/modules/SobreExpotec.vue';
    import Pluralidade from '@/components/modules/Pluralidade.vue';
    import ProgramacaoEvento from '@/components/modules/ProgramacaoEvento.vue';
    import EdicoesPassadas from '@/components/modules/EdicoesPassadas.vue';
    import ApoioParceiros from '@/components/modules/ApoioParceiros.vue';
</script>
<style scoped>
    /* Até 1440px a listra ocupa a largura exata (12 quadrados de 1/12 da tela).
       Acima disso a altura trava em 7.5rem e as formas se repetem sem esticar. */
    .listra-formas{
        /* width explícito: sem ele o max-height é transferido pelo aspect-ratio e limita a largura */
        width: 100%;
        aspect-ratio: 12 / 1;
        min-height: 4rem;
        max-height: 7.5rem;
        background: url('@/assets/Listra de formas.svg') center / auto 100% repeat-x;
    }

    /* No mobile a listra quebra em duas linhas de 6 formas */
    @media (max-width: 600px) {
        .listra-formas{
            aspect-ratio: 3 / 1;
            min-height: 0;
            max-height: none;
            background:
                url('@/assets/Listra de formas.svg') 0 0 / 200% 50% no-repeat,
                url('@/assets/Listra de formas.svg') 100% 100% / 200% 50% no-repeat;
        }
    }
</style>
