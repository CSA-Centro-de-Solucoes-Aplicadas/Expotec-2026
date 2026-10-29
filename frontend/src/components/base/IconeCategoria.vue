<script setup>
defineProps({
    forma: {
        type: String,
        required: true
    },
    cor: {
        type: String,
        required: true
    }
})
</script>
<template>
    <span class="icone" :class="`icone-${forma}`" :style="{ backgroundColor: cor }" aria-hidden="true"></span>
</template>
<style scoped>
.icone {
    display: inline-block;
    flex-shrink: 0;
    width: 0.875rem;
    height: 0.875rem;
}

.icone-circulo {
    border-radius: 50%;
}

.icone-quadrado {
    border-radius: 0.125rem;
}

.icone-semicirculo {
    height: 0.4375rem;
    border-radius: 0.4375rem 0.4375rem 0 0;
}

.icone-pilula {
    width: 1.375rem;
    height: 0.625rem;
    border-radius: 999px;
}

.icone-triangulo {
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
}
</style>
