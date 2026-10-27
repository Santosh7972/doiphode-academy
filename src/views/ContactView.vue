<script setup>
import { t } from '../data/translations'
import { academy } from '../data/academy'
import Icon from '../components/Icon.vue'
import RevealOnScroll from '../components/RevealOnScroll.vue'
import WhatsAppButton from '../components/WhatsAppButton.vue'
</script>
<template>
  <section class="page-head"><div class="container"><h1>{{ t.contactTitle }}</h1><p>{{ t.contactIntro }}</p></div></section>
  <section class="container contact">
    <RevealOnScroll class="card">
      <WhatsAppButton />
      <ul class="clist">
        <li v-for="p in academy.phones" :key="p"><Icon name="phone" /><div><span>{{ t.phoneLabel }}</span><a :href="'tel:' + p">{{ p }}</a></div></li>
        <li><Icon name="pin" /><div><span>{{ t.addressLabel }}</span>{{ t.address }}</div></li>
        <li><Icon name="clock" /><div><span>{{ t.batchLabel }}</span>{{ t.batch }}</div></li>
        <li><Icon name="cap" /><div><span>{{ t.openLabel }}</span>{{ t.openingDate }}</div></li>
      </ul>
    </RevealOnScroll>
    <RevealOnScroll :delay="100" class="card mapcard">
      <h2>{{ t.mapTitle }}</h2>
      <div class="map" aria-hidden="true"><Icon name="pin" /></div>
      <p class="note">{{ t.mapNote }}</p>
      <a :href="academy.mapUrl" target="_blank" rel="noopener noreferrer" class="btn btn-gold">{{ t.directions }}<span class="arrow" aria-hidden="true">→</span></a>
    </RevealOnScroll>
  </section>
</template>
