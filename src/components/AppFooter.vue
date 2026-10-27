<script setup>
import { t } from '../data/translations'
import { academy } from '../data/academy'
import WhatsAppButton from './WhatsAppButton.vue'
import RevealOnScroll from './RevealOnScroll.vue'
const links = [['/', 'home'], ['/about', 'about'], ['/courses', 'courses'], ['/contact', 'contact']]
const year = new Date().getFullYear()
</script>
<template>
  <footer class="footer">
    <RevealOnScroll class="container fgrid">
      <div><div class="brand light"><img src="/images/academy-logo.png" alt="Doiphode Academy logo" width="56" height="56" /><span>Doiphode<br />Academy</span></div><p>{{ t.footerText }}</p></div>
      <nav :aria-label="t.quick"><h2>{{ t.quick }}</h2><RouterLink v-for="[to, k] in links" :key="to" :to="to">{{ t.nav[k] }}</RouterLink></nav>
      <div><h2>{{ t.contactHead }}</h2>
        <a v-for="p in academy.phones" :key="p" :href="'tel:' + p">{{ p }}</a>
        <p>{{ t.address }}</p><WhatsAppButton :label="t.wa" /></div>
    </RevealOnScroll>
    <p class="copy">© {{ year }} Doiphode Academy. {{ t.rights }}</p>
  </footer>
</template>
