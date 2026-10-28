<script setup>
defineProps(
    {
        variant: {
            type: String,
            default: 'primary'
        },
        type: {
            type: String,
            default : 'button'
        }
    }
)
</script>
<template>
    <button
    type="type"
    class="botao"
    :class="`botao-${variant}`"
    >
    <slot />
    </button>

</template>
<style scoped>
.botao {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.7rem 1.4rem;
  border: 2px solid #382310;
  border-radius: 999px;

  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 600;

  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.botao-primary {
  background-color: #382310;
  color: white;
}

.botao-primary:hover {
  background-color: #52351e;
}

.botao-secondary {
  background-color: transparent;
  color: #382310;
}

.botao-secondary:hover {
  background-color: #382310;
  color: white;
}
</style>