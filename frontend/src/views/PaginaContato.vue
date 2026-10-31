<template>
    <CabecalhoPagina
        class="sobretitulo-so-mobile"
        sobretitulo="Fale com a gente"
        titulo="Contato"
        descricao="Dúvidas sobre inscrições, programação ou apresentação de trabalhos? Escolha o canal que preferir."
    />

    <div class="contato limite">
        <dl class="canais">
            <div v-for="canal in canais" :key="canal.rotulo" class="canal">
                <dt><IconeCategoria :forma="canal.forma" :cor="canal.cor" />{{ canal.rotulo }}</dt>
                <dd>
                    <a
                        v-if="canal.href"
                        :href="canal.href"
                        :target="canal.externo ? '_blank' : undefined"
                        :rel="canal.externo ? 'noopener' : undefined"
                    >{{ canal.valor }}</a>
                    <template v-else>
                        <span v-for="linha in [].concat(canal.valor)" :key="linha" class="linha">{{ linha }}</span>
                    </template>
                </dd>
            </div>
        </dl>
        <img :src="mascote" alt="Mascote da Expotec acenando" class="mascote">
    </div>
</template>
<script setup>
import CabecalhoPagina from '@/components/base/CabecalhoPagina.vue'
import IconeCategoria from '@/components/base/IconeCategoria.vue'
import mascote from '@/assets/mascote/mascote.png'
import { contato } from '@/data/home'

const canais = [
    { rotulo: 'E-mail', valor: contato.email, href: `mailto:${contato.email}`, forma: 'circulo', cor: '#ff8c1a' },
    { rotulo: 'Telefone', valor: contato.telefone, forma: 'triangulo', cor: '#2eb10a' },
    {
        rotulo: 'Instagram',
        valor: `@${contato.instagram}`,
        href: `https://www.instagram.com/${contato.instagram}`,
        externo: true,
        forma: 'semicirculo',
        cor: '#29d0d3',
    },
    { rotulo: 'Endereço', valor: contato.endereco, forma: 'quadrado', cor: '#5300bb' },
]
</script>
<style scoped>
/* O protótipo desktop não exibe o sobretítulo; o mobile exibe */
@media (min-width: 601px) {
    .sobretitulo-so-mobile :deep(.sobretitulo) {
        display: none;
    }
}

.contato {
    display: grid;
    grid-template-columns: minmax(0, 714fr) minmax(0, 566fr);
    align-items: start;
    padding-block: 4.5rem 6rem;
}

.canais {
    margin: 0;
    border-top: 2px solid var(--cor-marrom);
}

.canal {
    position: relative;
    padding-left: 3rem;
    padding-block: 1.625rem 1.5rem;
    border-bottom: 1px solid var(--cor-borda-clara);
}

.canal .icone {
    position: absolute;
    top: 1.625rem;
    left: 0;
    width: 1.375rem;
    height: 1.375rem;
    margin-left: 0.1875rem;
}

.canal .icone-semicirculo {
    height: 0.6875rem;
    margin-top: 0.5rem;
}

.canal .icone-quadrado {
    width: 1.125rem;
    height: 1.125rem;
    margin: 0.25rem 0 0 0.3125rem;
    border-radius: 0.1875rem;
}

dt {
    color: var(--cor-texto-suave);
    font-size: 0.8125rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

dd {
    margin: 0.5rem 0 0;
    font-size: clamp(1.0625rem, 1rem + 0.25vw, 1.25rem);
    font-weight: 600;
    line-height: 1.45;
    overflow-wrap: anywhere;
}

dd a {
    color: inherit;
    text-underline-offset: 0.15em;
}

dd a:focus-visible {
    outline: 3px solid var(--cor-amarelo);
    outline-offset: 2px;
}

.linha {
    display: block;
}

/* O PNG tem margens transparentes: estas medidas posicionam o desenho como no protótipo */
.mascote {
    justify-self: end;
    width: min(30.5rem, 100%);
    height: auto;
    margin: -0.75rem 1rem 0 0;
}

@media (max-width: 900px) {
    .contato {
        grid-template-columns: 1fr;
    }

    /* O protótipo mobile não exibe o mascote */
    .mascote {
        display: none;
    }
}

@media (max-width: 600px) {
    .contato {
        padding-block: 2.625rem 4rem;
    }

    .canal .icone {
        width: 1.25rem;
        height: 1.25rem;
        margin-left: 0;
    }

    .canal .icone-semicirculo {
        height: 0.625rem;
    }
}
</style>
