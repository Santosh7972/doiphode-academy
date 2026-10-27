<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>
<template>
  <AppHeader />
  <main id="main">
    <RouterView v-slot="{ Component }"><Transition name="page" mode="out-in"><component :is="Component" /></Transition></RouterView>
  </main>
  <AppFooter />
</template>
