<template>
    <CabecalhoPagina
        titulo="Organização"
        descricao="Servidores das diretorias e coordenações do Campus Natal-Central que formam a comissão da Expotec 2026."
    />

    <section class="comissao limite" aria-labelledby="titulo-comissao">
        <TituloSecao id="titulo-comissao" forma="circulo" cor="#ff8c1a">Comissão geral</TituloSecao>
        <!-- Colunas CSS: os setores descem pela esquerda e continuam na direita, como no protótipo -->
        <div class="setores">
            <section v-for="(setor, indice) in setores" :key="setor.nome" class="setor" :aria-labelledby="`setor-${indice}`">
                <h3 :id="`setor-${indice}`"><IconeCategoria :forma="setor.forma" :cor="setor.cor" />{{ setor.nome }}</h3>
                <ul>
                    <li v-for="membro in setor.membros" :key="membro.nome">
                        {{ membro.nome }}
                        <span v-if="membro.funcao" class="funcao">{{ membro.funcao }}</span>
                    </li>
                </ul>
            </section>
        </div>
    </section>
</template>
<script setup>
import CabecalhoPagina from '@/components/base/CabecalhoPagina.vue'
import IconeCategoria from '@/components/base/IconeCategoria.vue'
import TituloSecao from '@/components/base/TituloSecao.vue'
import { setores } from '@/data/organizacao'
</script>
<style scoped>
.comissao {
    padding-block: 5rem 6rem;
}

.setores {
    columns: 2;
    column-gap: 4rem;
    margin-top: 2rem;
}

.setor {
    break-inside: avoid;
    padding-bottom: 2.75rem;
}

h3 {
    display: grid;
    grid-template-columns: 1.375rem minmax(0, 1fr);
    align-items: center;
    margin: 0;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid var(--cor-marrom);
    color: var(--cor-texto-suave);
    font-size: 0.75rem;
    font-weight: 800;
    line-height: 1.5;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    min-height: 3.25rem;
    padding-block: 0.75rem;
    border-bottom: 1px solid var(--cor-borda-clara);
    font-size: clamp(0.9375rem, 0.9rem + 0.15vw, 1.0625rem);
    line-height: 1.4;
}

.funcao {
    flex-shrink: 0;
    padding: 0.25rem 0.625rem;
    background-color: var(--cor-amarelo);
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
}

@media (max-width: 900px) {
    .setores {
        columns: 1;
    }
}

@media (max-width: 600px) {
    .comissao {
        padding-block: 3.5rem 4rem;
    }

    .setores {
        margin-top: 1.5rem;
    }

    .setor {
        padding-bottom: 2.25rem;
    }
}
</style>
