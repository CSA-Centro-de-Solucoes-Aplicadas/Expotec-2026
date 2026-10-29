<template>
    <div class="cartoes">
        <div v-for="eixo in eixos" :key="eixo.classe" class="cartao" :class="eixo.classe">
            <h3>{{ eixo.titulo }}</h3>
            <p>{{ eixo.texto }}</p>
        </div>
    </div>
</template>
<script setup>
const eixos = [
    {
        classe: 'educacao',
        titulo: 'Educação',
        texto: 'Salas, laboratórios e projetos que mostram como se aprende e se ensina no campus.',
    },
    {
        classe: 'ciencia',
        titulo: 'Ciência',
        texto: 'Pesquisas apresentadas por quem as faz, da iniciação científica aos grupos de pesquisa.',
    },
    {
        classe: 'tecnologia',
        titulo: 'Tecnologia',
        texto: 'Soluções criadas nos cursos técnicos, nas graduações e nos projetos de extensão.',
    },
]
</script>
<style scoped>
.cartoes {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
}
.cartao {
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
        font-size: clamp(1.5rem, 1.2rem + 0.8vw, 1.875rem);
        font-weight: 800;
    }
    & p{
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.5;
        margin: 0.5rem 0 0;
        opacity: 0.85;
    }
}
.educacao{
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
    .cartoes {
        grid-template-columns: 1fr;
    }
    .cartao{
        min-height: 15rem;
        padding: 1.5rem;
    }
}
</style>
