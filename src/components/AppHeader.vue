<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { lang, setLang, t } from '../data/translations'
import WhatsAppButton from './WhatsAppButton.vue'
const open = ref(false), scrolled = ref(false), route = useRoute()
const links = [['/', 'home'], ['/about', 'about'], ['/courses', 'courses'], ['/contact', 'contact']]
const onScroll = () => { scrolled.value = window.scrollY > 8 }
const onKey = (e) => { if (e.key === 'Escape') open.value = false }
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('keydown', onKey) })
onBeforeUnmount(() => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey) })
watch(() => route.fullPath, () => { open.value = false })
</script>
<template>
  <header class="header" :class="{ scrolled }">
    <div class="container header-in">
      <RouterLink to="/" class="brand" aria-label="Doiphode Academy"><img src="/images/academy-logo.png" alt="Doiphode Academy logo" width="56" height="56" /><span>Doiphode<br />Academy</span></RouterLink>
      <button class="burger" :class="{ on: open }" :aria-expanded="open" aria-controls="site-nav" :aria-label="t.menu" @click="open = !open"><i></i><i></i><i></i></button>
      <nav id="site-nav" class="nav" :class="{ open }" :aria-label="t.mainNav">
        <RouterLink v-for="[to, k] in links" :key="to" :to="to">{{ t.nav[k] }}</RouterLink>
        <div class="langs" role="group" :aria-label="t.langLabel">
          <button :aria-pressed="lang === 'en'" :class="{ on: lang === 'en' }" @click="setLang('en')">EN</button>
          <button :aria-pressed="lang === 'mr'" :class="{ on: lang === 'mr' }" lang="mr" @click="setLang('mr')">मराठी</button>
        </div>
        <WhatsAppButton :label="t.wa" />
      </nav>
    </div>
  </header>
</template>
