<template>
    <Hero/>
    <ListraFormas/>
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
    import ListraFormas from '@/components/base/ListraFormas.vue';
    import SobreExpotec from '@/components/modules/SobreExpotec.vue';
    import Pluralidade from '@/components/modules/Pluralidade.vue';
    import ProgramacaoEvento from '@/components/modules/ProgramacaoEvento.vue';
    import EdicoesPassadas from '@/components/modules/EdicoesPassadas.vue';
    import ApoioParceiros from '@/components/modules/ApoioParceiros.vue';
</script>
