<script setup>
import { computed, ref } from 'vue'
import IconeCategoria from '../base/IconeCategoria.vue'
import ItemAtividade from './ItemAtividade.vue'
import { atividades, categorias, dias } from '@/data/programacao'

const diaSelecionado = ref(dias[0].id)
const categoriaSelecionada = ref('todas')

const categoriasPorId = Object.fromEntries(categorias.map((categoria) => [categoria.id, categoria]))

const atividadesFiltradas = computed(() =>
    atividades.filter(
        (atividade) =>
            atividade.dia === diaSelecionado.value &&
            (categoriaSelecionada.value === 'todas' || atividade.categoria === categoriaSelecionada.value)
    )
)
</script>
<template>
    <section id="programacao" aria-labelledby="titulo-programacao">
        <div class="limite">
            <div class="cabecalho">
                <h2 id="titulo-programacao">Programação</h2>
                <p>Escolha o dia e o tipo de atividade. As inscrições são feitas pelo SUAP.</p>
            </div>

            <div class="dias" role="group" aria-label="Dia do evento">
                <button
                    v-for="dia in dias"
                    :key="dia.id"
                    type="button"
                    class="dia"
                    :class="`dia-${dia.id}`"
                    :aria-pressed="diaSelecionado === dia.id"
                    :style="{ '--cor-dia': dia.cor }"
                    @click="diaSelecionado = dia.id"
                >
                    <span class="dia-nome">{{ dia.nome }}</span>
                    <span class="dia-data">{{ dia.data }}</span>
                    <IconeCategoria
                        :forma="dia.forma"
                        :cor="diaSelecionado === dia.id ? dia.corForma : dia.cor"
                    />
                </button>
            </div>

            <div class="filtros" role="group" aria-label="Tipo de atividade">
                <button
                    type="button"
                    class="filtro"
                    :aria-pressed="categoriaSelecionada === 'todas'"
                    @click="categoriaSelecionada = 'todas'"
                >
                    Todas
                </button>
                <button
                    v-for="categoria in categorias"
                    :key="categoria.id"
                    type="button"
                    class="filtro"
                    :aria-pressed="categoriaSelecionada === categoria.id"
                    @click="categoriaSelecionada = categoria.id"
                >
                    <IconeCategoria :forma="categoria.forma" :cor="categoria.cor" />
                    {{ categoria.nome }}
                </button>
            </div>

            <ul v-if="atividadesFiltradas.length" class="atividades">
                <ItemAtividade
                    v-for="atividade in atividadesFiltradas"
                    :key="atividade.id"
                    :atividade="atividade"
                    :categoria="categoriasPorId[atividade.categoria]"
                />
            </ul>
            <p v-else class="sem-atividades" role="status">
                {{ atividades.length ? 'Nenhuma atividade encontrada para este dia e tipo.' : 'A programação será publicada em breve.' }}
            </p>
        </div>
    </section>
</template>
<style scoped>
section {
    padding-block: var(--espaco-secao);
    background-color: var(--cor-creme);
    border-top: 2px solid var(--cor-marrom);
    border-bottom: 2px solid var(--cor-marrom);
    scroll-margin-top: 1rem;
}

.cabecalho {
    margin-bottom: 2rem;
}

.cabecalho p {
    margin: 0.25rem 0 0;
    color: var(--cor-texto-suave);
    font-weight: 400;
}


button {
    font-family: inherit;
    color: var(--cor-marrom);
    cursor: pointer;
}

button:focus-visible {
    outline: 3px solid var(--cor-marrom);
    outline-offset: 2px;
}

.dias {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
    margin-bottom: 2rem;
}

.dia {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.25rem 1.25rem 1rem;
    background-color: white;
    border: 2px solid var(--cor-marrom);
    border-radius: 0.375rem;
    text-align: left;
}

.dia[aria-pressed='true'] {
    background-color: var(--cor-dia);
}

.dia-nome {
    font-size: 1.375rem;
    font-weight: 700;
}

.dia-data {
    margin-top: 0.125rem;
    font-size: 1rem;
    font-weight: 600;
}

.dia .icone {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 1.375rem;
    height: 1.375rem;
}

.dia .icone-semicirculo {
    height: 0.6875rem;
}

.dia-quarta .icone {
    top: auto;
    bottom: 0;
    right: 0;
    width: 3.5rem;
    height: 3.5rem;
}

.filtros {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
}

.filtro {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.125rem;
    background-color: transparent;
    border: 2px solid var(--cor-marrom);
    border-radius: 999px;
    font-size: 0.875rem;
    font-weight: 700;
    transition: background-color 0.2s, color 0.2s;
}

.filtro:hover {
    background-color: white;
}

.filtro[aria-pressed='true'] {
    background-color: var(--cor-marrom);
    color: white;
}

.atividades {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: 0;
    padding: 0;
    list-style: none;
}

.sem-atividades {
    padding: 2rem 1.5rem;
    background-color: white;
    border-radius: 0.25rem;
    font-weight: 500;
    text-align: center;
}

@media (max-width: 600px) {
    .dias {
        gap: 0.5rem;
    }

    .dia {
        padding: 0.75rem 0.625rem;
    }

    .dia-nome {
        font-size: 1rem;
    }

    .dia-data {
        font-size: 0.8125rem;
    }

    .dia .icone {
        top: 0.5rem;
        right: 0.5rem;
        width: 0.875rem;
        height: 0.875rem;
    }

    .dia .icone-semicirculo {
        height: 0.4375rem;
    }

    .dia-quarta .icone {
        top: auto;
        bottom: 0;
        right: 0;
        width: 2rem;
        height: 2rem;
    }
}
</style>
