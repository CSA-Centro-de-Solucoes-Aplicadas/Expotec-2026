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
        },
        // Com href o botão vira link (navegação); sem href, é um <button> (ação)
        href: {
            type: String,
            default: undefined
        }
    }
)
</script>
<template>
    <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : type"
    class="botao"
    :class="`botao-${variant}`"
    >
    <slot />
    </component>

</template>
<style scoped>
.botao {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.7rem 1.4rem;
  border: 2px solid var(--cor-marrom);
  border-radius: 999px;

  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;

  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.botao:focus-visible {
  outline: 3px solid var(--cor-amarelo);
  outline-offset: 2px;
}

.botao-primary {
  background-color: var(--cor-marrom);
  color: white;
}

.botao-primary:hover {
  background-color: #52351e;
}

.botao-secondary {
  background-color: transparent;
  color: var(--cor-marrom);
}

.botao-secondary:hover {
  background-color: var(--cor-marrom);
  color: white;
}
</style>
