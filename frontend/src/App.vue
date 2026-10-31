<script setup>
import CabecalhoSite from './components/layout/CabecalhoSite.vue';
import RodapeSite from './components/layout/RodapeSite.vue';
</script>

<template>
  <CabecalhoSite/>
  <main>
    <router-view />
  </main>
  <RodapeSite/>
</template>
