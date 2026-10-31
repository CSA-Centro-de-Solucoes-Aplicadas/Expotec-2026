<template>
    <CabecalhoPagina
        class="cabecalho-sobre"
        titulo="Sobre a Expotec"
        descricao="A Expotec é um evento bienal que mostra à sociedade o que o campus produz no ensino, na pesquisa e na extensão."
    >
        <p>
            A exposição visa estimular a produção e a disseminação do conhecimento científico e tecnológico no
            campus. Além de ser uma oportunidade para os estudantes apresentarem seus projetos, compartilharem
            resultados e trocarem experiências com colegas e profissionais de áreas afins.
        </p>
        <template #lateral>
            <img :src="site.mascote" :alt="site.mascoteAlt" class="mascote">
        </template>
    </CabecalhoPagina>
    <ListraFormas/>

    <section class="tema limite" aria-labelledby="titulo-tema">
        <TituloSecao id="titulo-tema" forma="circulo" cor="#ff8c1a">O tema de 2026</TituloSecao>
        <h3 class="nome-tema"><span class="destaque">Vozes</span>: pluralidade na Educação, Ciência e Tecnologia</h3>
        <p>
            Em 2026, a Expotec convida o campus a ouvir as muitas vozes que fazem a escola: estudantes, servidores,
            pesquisadores, extensionistas e a comunidade ao redor. Cada curso, laboratório e projeto tem um jeito
            próprio de produzir e comunicar conhecimento.
        </p>
        <p>
            Pluralidade é reconhecer essas diferenças como força. É dar espaço a quem nem sempre é ouvido, aproximar
            áreas que raramente conversam e mostrar que educação, ciência e tecnologia se fazem em conjunto.
        </p>
        <CartoesPluralidade class="cartoes-tema" />
    </section>

    <section class="impacto" aria-labelledby="titulo-impacto">
        <div class="limite">
            <TituloSecao id="titulo-impacto" forma="triangulo" cor="#2eb10a">Impacto do tema</TituloSecao>
            <p>
                Quando mais vozes participam, o conhecimento chega mais longe. A Expotec quer estimular estudantes a
                apresentar seus trabalhos com confiança, ampliar o diálogo entre cursos e aproximar o que é produzido
                no campus das pessoas que vivem a cidade. Assim, o evento fortalece uma escola mais diversa, acessível
                e conectada à sociedade.
            </p>
        </div>
    </section>
</template>
<script setup>
import CabecalhoPagina from '@/components/base/CabecalhoPagina.vue'
import ListraFormas from '@/components/base/ListraFormas.vue'
import TituloSecao from '@/components/base/TituloSecao.vue'
import CartoesPluralidade from '@/components/modules/CartoesPluralidade.vue'
import { site } from '@/data/home'
</script>
<style scoped>
/* A listra de formas logo abaixo já separa o cabeçalho, então a borda sai */
.cabecalho-sobre {
    border-bottom: 0;
}

/* O PNG tem margens transparentes: estas medidas apoiam os pés do mascote sobre a listra, como no protótipo */
.mascote {
    position: relative;
    z-index: 1;
    width: min(27.25rem, 34vw);
    height: auto;
    margin: 0 4.375rem -0.875rem 0;
}

.tema p,
.impacto p {
    margin: 1.25rem 0 0;
    font-size: clamp(1rem, 0.95rem + 0.15vw, 1.0625rem);
    font-weight: 400;
    line-height: 1.75;
}

.tema {
    padding-block: 5rem 5.5rem;
}

.nome-tema {
    margin: 2.25rem 0 0;
    font-size: clamp(1.375rem, 1rem + 1.6vw, 2rem);
    font-weight: 800;
    line-height: 1.25;
}

.destaque {
    color: #ff8c1a;
}

.cartoes-tema {
    margin-top: 2.5rem;
}

.impacto {
    padding-block: 6rem;
    background-color: var(--cor-creme);
    border-top: 2px solid var(--cor-marrom);
}

.impacto p {
    margin-top: 1.5rem;
    font-size: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
    line-height: 1.65;
}

@media (max-width: 600px) {
    .tema {
        padding-block: 3.5rem 4rem;
    }

    .nome-tema {
        margin-top: 1.75rem;
    }

    .impacto {
        padding-block: 3.5rem 4rem;
    }
}
</style>
