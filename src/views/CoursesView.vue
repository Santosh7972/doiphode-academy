<script setup>
import { t } from '../data/translations'
import CourseCard from '../components/CourseCard.vue'
</script>
<template>
  <section class="page-head"><div class="container"><h1>{{ t.coursesTitle }}</h1><p>{{ t.coursesIntro }}</p></div></section>
  <section class="container cgrid"><CourseCard v-for="(c, i) in t.courses" :key="c.id" :course="c" :delay="i * 80" /></section>
</template>
