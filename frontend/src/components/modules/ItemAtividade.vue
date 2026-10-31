<script setup>
import BaseButton from '../base/BaseButton.vue'
import IconeCategoria from '../base/IconeCategoria.vue'

defineProps({
    atividade: {
        type: Object,
        required: true
    },
    categoria: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <li class="atividade">
        <p class="horario">{{ atividade.inicio }} – {{ atividade.fim }}</p>
        <div class="detalhes">
            <h3>{{ atividade.titulo }}</h3>
            <p>{{ atividade.local }}</p>
        </div>
        <p class="categoria">
            <IconeCategoria :forma="categoria.forma" :cor="categoria.cor" />
            {{ categoria.nome }}
        </p>
        <!-- Sem link de inscrição no CMS (ex.: exposições abertas), o botão não aparece -->
        <BaseButton
            v-if="atividade.inscricao"
            variant="secondary"
            :href="atividade.inscricao"
            target="_blank"
            rel="noopener"
            :aria-label="`Inscrever-se em ${atividade.titulo} (abre em nova aba)`"
        >
            Inscrever-se
        </BaseButton>
    </li>
</template>
<style scoped>
.atividade {
    display: grid;
    grid-template-columns: 11rem minmax(0, 1fr) 8.5rem auto;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
    background-color: white;
    border-radius: 0.25rem;
}

.atividade p {
    margin: 0;
}

.horario {
    font-size: 1rem;
    font-weight: 700;
}

.detalhes h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 0.25rem;
}

.detalhes p {
    color: var(--cor-texto-suave);
    font-size: 0.9375rem;
    font-weight: 400;
}

.categoria {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
}

@media (max-width: 900px) {
    .atividade {
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 0.75rem 1rem;
        padding: 1.5rem;
        border-radius: 1rem;
    }

    .horario,
    .detalhes {
        grid-column: 1 / -1;
    }

    .detalhes h3 {
        font-size: 1.125rem;
        line-height: 1.3;
    }
}
</style>
