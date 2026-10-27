<script setup>
import { t } from '../data/translations'
import Icon from './Icon.vue'
import RevealOnScroll from './RevealOnScroll.vue'
</script>
<template>
  <RevealOnScroll tag="ul" class="features container" :aria-label="t.featuresLabel">
    <li v-for="f in t.features" :key="f[0]"><Icon :name="f[2]" /><div><strong>{{ f[0] }}</strong><span>{{ f[1] }}</span></div></li>
  </RevealOnScroll>
</template>
