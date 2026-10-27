<script setup>
import { t } from '../data/translations'
import FeatureStrip from '../components/FeatureStrip.vue'
import WhatsAppButton from '../components/WhatsAppButton.vue'
import RevealOnScroll from '../components/RevealOnScroll.vue'
import BookArt from '../components/BookArt.vue'
const previews = [['/about', 'previewAbout', 'previewAboutText'], ['/courses', 'previewCourses', 'previewCoursesText'], ['/contact', 'previewContact', 'previewContactText']]
</script>
<template>
  <section class="hero">
    <div class="container hero-in">
      <div class="hero-text">
        <p class="label h1">{{ t.open }}</p>
        <h1 class="h2">{{ t.heroTitle }}</h1>
        <p class="lead h3">{{ t.heroText }}</p>
        <p class="badge h4">{{ t.opening }}</p>
        <div class="actions h5">
          <RouterLink to="/courses" class="btn btn-gold">{{ t.explore }}<span class="arrow" aria-hidden="true">→</span></RouterLink>
          <RouterLink to="/about" class="btn btn-ghost">{{ t.aboutBtn }}</RouterLink>
          <WhatsAppButton cue />
        </div>
      </div>
      <div class="hero-art"><BookArt :label="t.heroArt" /></div>
    </div>
  </section>
  <FeatureStrip />
  <section class="container previews">
    <RevealOnScroll v-for="(p, i) in previews" :key="p[0]" tag="article" class="card preview" :delay="i * 80">
      <h2>{{ t[p[1]] }}</h2><p>{{ t[p[2]] }}</p>
      <RouterLink :to="p[0]" class="link">{{ t.learnMore }}<span class="arrow" aria-hidden="true">→</span></RouterLink>
    </RevealOnScroll>
  </section>
</template>
