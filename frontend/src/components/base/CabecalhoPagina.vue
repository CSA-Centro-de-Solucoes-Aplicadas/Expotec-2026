<script setup>
defineProps({
    sobretitulo: {
        type: String,
        default: ''
    },
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <div class="cabecalho-pagina">
        <div class="limite">
            <div class="texto">
                <p v-if="sobretitulo" class="sobretitulo">{{ sobretitulo }}</p>
                <h1>{{ titulo }}</h1>
                <p v-if="descricao" class="descricao">{{ descricao }}</p>
                <!-- Parágrafos extras, com o mesmo estilo da descrição -->
                <slot />
            </div>
            <!-- Ilustração opcional à direita, apoiada na base do cabeçalho; oculta em telas estreitas -->
            <div v-if="$slots.lateral" class="lateral">
                <slot name="lateral" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.cabecalho-pagina {
    border-bottom: 2px solid var(--cor-marrom);
}

.cabecalho-pagina .limite {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    column-gap: 1.5rem;
}

.texto {
    padding-block: 5rem 4.25rem;
}

.lateral {
    align-self: end;
    padding-top: 3rem;
    line-height: 0;
}

.sobretitulo {
    margin: 0 0 1rem;
    color: var(--cor-texto-suave);
    font-size: 0.8125rem;
    font-weight: 800;
    letter-spacing: 0.2em;
    text-transform: uppercase;
}

h1 {
    margin: 0;
    font-size: clamp(2.125rem, 1.4rem + 2.9vw, 3.5rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.01em;
}

.descricao,
:slotted(p) {
    max-width: 47rem;
    margin: 1.25rem 0 0;
    font-size: clamp(1rem, 0.95rem + 0.25vw, 1.1875rem);
    font-weight: 400;
    line-height: 1.65;
}

:slotted(p) {
    margin-top: 1.5rem;
}

@media (max-width: 900px) {
    .lateral {
        display: none;
    }
}

@media (max-width: 600px) {
    .texto {
        padding-block: 3.75rem 3.25rem;
    }
}
</style>
