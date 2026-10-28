<template>
    <section>
        <p class="institution-text"> IFRN · CAMPUS NATAL-CENTRAL · EDIÇÃO 2026 </p>
        <h1><img :src="expotec" alt=""></h1>
        <h3 class="theme-title">Vozes: pluralidade na Educação, Ciência e Tecnologia</h3>
        <p class="info-text">data - Natal, RN</p>
        <div>
        <BaseButton variant="primary">
            Ver programação
        </BaseButton>
        <BaseButton variant="secondary">
            Submeter trabalho
        </BaseButton>
        </div>
    </section>
</template>
<script setup>
import expotec from "@/assets/expotec-extenso.svg"
import BaseButton from "../base/BaseButton.vue";
</script>
<style scoped>
section{
    background-image: url('@/assets/Hero.svg');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center top;
    height: 45rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    & .institution-text{
        margin: 0;
    }
    & .institution-text, & .info-text{
        background-color: white;
        width: max-content;
        padding: 0.5rem;
        border-radius: 5rem;

    }

    & div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;
    }
    & h3{
        font-size: 1.5rem;
    }
}

</style>