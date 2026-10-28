<template>
<header>
    <router-link to="/"><img :src="expotec" alt="Logotipo da Expotec" class="logotipo"/></router-link>
    <nav class="nav-principal">
        <ul>
            <li>Sobre</li>
            <li>Organização</li>
            <li>Trabalhos científicos</li>
            <li>Documentos</li>
            <li>Contato</li>
        </ul>
    </nav>
</header>
</template>
<style scoped>


    header{
        width: 100%;
        height: 4.5rem;
        display: flex;
        & img{
            width: 14rem;
        }
        padding-left:5rem ;
        padding-right:5rem ;
          justify-content: space-between;
         align-items: center;
        border-bottom: 2px solid black;
        }
    .nav-principal > ul{
        height: auto;
        display: flex;
        list-style-type: none;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;
    }


</style>
<script setup>
    import expotec from '@/assets/expotec-extenso.svg'
</script>
