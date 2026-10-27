<script setup>
import { t } from '../data/translations'
import RevealOnScroll from '../components/RevealOnScroll.vue'
import WhatsAppButton from '../components/WhatsAppButton.vue'
import BookArt from '../components/BookArt.vue'
import { academy } from '../data/academy'
</script>
<template>
  <section class="page-head"><div class="container"><h1>{{ t.aboutTitle }}</h1></div></section>
  <section class="container about">
    <RevealOnScroll><h2>{{ t.aboutHead }}</h2><p>{{ t.aboutIntro }}</p>
      <dl class="facts">
        <div><dt>{{ t.teacherLabel }}</dt><dd>{{ academy.teacher }}</dd></div>
        <div><dt>{{ t.qualLabel }}</dt><dd>{{ t.qual }}</dd></div>
        <div><dt>{{ t.expLabel }}</dt><dd>{{ t.exp }}</dd></div>
        <div><dt>{{ t.boardLabel }}</dt><dd>{{ t.board }}</dd></div>
        <div><dt>{{ t.langsLabel }}</dt><dd>{{ t.langs }}</dd></div>
        <div><dt>{{ t.addressLabel }}</dt><dd>{{ t.address }}</dd></div>
      </dl>
      <WhatsAppButton :label="t.waEnquire" />
    </RevealOnScroll>
    <RevealOnScroll :delay="100" class="art-panel"><BookArt :label="t.aboutArt" /></RevealOnScroll>
  </section>
</template>
