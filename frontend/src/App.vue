<script setup>
import Header from './components/layout/header.vue';
import RodapeSite from './components/layout/RodapeSite.vue';
</script>

<template>
  <Header/>
  <main class="content">
    <router-view />
  </main>
  <RodapeSite/>
</template>

<style scoped></style>
