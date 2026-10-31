<template>
    <section>
        <!-- Cada forma é ancorada à borda mais próxima e escala com a largura da tela (base: 1440px) -->
        <div class="formas" aria-hidden="true">
            <span class="forma circulo-laranja"></span>
            <span class="forma circulo-amarelo"></span>
            <span class="forma triangulo-roxo"></span>
            <span class="forma semicirculo-azul"></span>
            <span class="forma pilula-rosa"></span>
            <span class="forma triangulo-verde"></span>
        </div>
        <p class="institution-text"> IFRN · CAMPUS NATAL-CENTRAL · EDIÇÃO 2026 </p>
        <h1><img :src="expotec" alt="Expotec"></h1>
        <p class="theme-title">Vozes: pluralidade na Educação, Ciência e Tecnologia</p>
        <p class="info-text">25 de novembro · Natal, RN</p>
        <div class="acoes">
        <BaseButton variant="primary" href="#programacao" @click.prevent="rolarParaProgramacao">
            Ver programação
        </BaseButton>
        <BaseButton
            variant="secondary"
            href="https://portal.ifrn.edu.br/campus/natalcentral/processo-seletivos-servidores/expotec-2026-submissao-de-trabalhos/"
            target="_blank"
            rel="noopener"
        >
            Submeter trabalho
        </BaseButton>
        </div>
    </section>
</template>
<script setup>
import expotec from "@/assets/expotec-extenso.svg"
import BaseButton from "../base/BaseButton.vue";

// Rolagem suave feita aqui, pois a âncora nativa salta direto; respeita quem pede menos movimento
function rolarParaProgramacao() {
    const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById('programacao').scrollIntoView({ behavior: reduzirMovimento ? 'auto' : 'smooth' })
}
</script>
<style scoped>
section{
    position: relative;
    isolation: isolate;
    overflow: hidden;
    min-height: clamp(32rem, 44.5vw, 44rem);
    padding: 3rem var(--margem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    text-align: center;
    & p{
        margin: 0;
    }
    & .institution-text{
        font-size: 0.8125rem;
        font-weight: 700;
        letter-spacing: 0.18em;
    }
    & .institution-text, & .info-text{
        background-color: white;
        max-width: 100%;
        padding: 0.5rem 0.75rem;
        border-radius: 5rem;
    }
    & .info-text{
        font-size: 0.875rem;
    }
    & h1{
        margin: 0.5rem 0;
        line-height: 0;
    }
    & h1 img{
        width: min(56rem, 100%);
        height: auto;
    }
    & .theme-title{
        font-size: clamp(1rem, 0.8rem + 0.8vw, 1.5rem);
        margin-bottom: 0.5rem;
    }

    & .acoes{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;
        margin-top: 1.5rem;
    }
}

.formas{
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
}

/* Tamanhos em vw equivalem às medidas do protótipo em 1440px; clamp() limita os extremos.
   Os translate em % são relativos à própria forma, então o recorte nas bordas é sempre proporcional. */
.forma{
    position: absolute;
    opacity: 0.2;
}

.circulo-laranja{
    top: 0;
    left: 0;
    width: clamp(8rem, 18vw, 18rem);
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #ff8c1a;
    transform: translate(-42%, -38%);
}

.circulo-amarelo{
    top: clamp(1.5rem, 2.8vw, 3rem);
    left: 18%;
    width: clamp(3rem, 6.25vw, 6rem);
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #fdc803;
}

.triangulo-roxo{
    top: 0;
    left: 69.7%;
    width: clamp(4rem, 8.33vw, 8rem);
    aspect-ratio: 1;
    background-color: #5300bb;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    transform: translateY(-42%);
}

.semicirculo-azul{
    top: clamp(2.5rem, 4.9vw, 5rem);
    left: 87.5%;
    width: clamp(7rem, 15.3vw, 15rem);
    aspect-ratio: 2 / 1;
    border-radius: 999px 999px 0 0;
    background-color: #29d0d3;
}

.pilula-rosa{
    bottom: 15%;
    left: 78%;
    width: clamp(6rem, 13.9vw, 13rem);
    aspect-ratio: 200 / 64;
    border-radius: 999px;
    background-color: #ff55ff;
}

.triangulo-verde{
    bottom: 0;
    left: 0;
    width: clamp(5rem, 10.4vw, 10rem);
    aspect-ratio: 150 / 130;
    background-color: #2eb10a;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    transform: translateY(25%);
}

@media (max-width: 600px) {
    section{
        & .institution-text{
            font-size: 0.6875rem;
            letter-spacing: 0.12em;
            padding: 0.5rem 0;
        }
        & .acoes{
            flex-direction: column;
            align-items: stretch;
        }
    }

    /* Na coluna estreita a pílula acompanha a área dos botões, como no protótipo mobile */
    .pilula-rosa{
        left: auto;
        right: 1rem;
        bottom: 22%;
    }
}

</style>
