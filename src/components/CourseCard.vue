<script setup>
import Icon from './Icon.vue'
import WhatsAppButton from './WhatsAppButton.vue'
import RevealOnScroll from './RevealOnScroll.vue'
import { t } from '../data/translations'
defineProps({ course: Object, delay: Number })
</script>
<template>
  <RevealOnScroll tag="article" class="card course" :delay="delay">
    <div class="ci"><Icon :name="course.icon" /></div>
    <h3>{{ course.name }}</h3>
    <p>{{ course.desc }}</p>
    <ul class="ticks"><li v-for="i in course.info" :key="i"><Icon name="check" />{{ i }}</li></ul>
    <WhatsAppButton :course="course.name" :label="t.waEnquire" />
  </RevealOnScroll>
</template>
