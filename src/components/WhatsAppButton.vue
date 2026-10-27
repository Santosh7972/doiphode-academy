<script setup>
import { computed } from 'vue'
import { lang, t } from '../data/translations'
import { waLink } from '../data/academy'
const props = defineProps({ course: String, label: String, cue: Boolean })
const href = computed(() => waLink(lang.value, props.course))
</script>
<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" class="btn btn-wa" :class="{ cue }">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.300c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.900c.1.200.1.400 0 .5l-.4.600-.3.400c-.1.200-.2.300 0 .6.6 1 1.400 1.800 2.400 2.300.3.200.5.100.7-.1l.8-1c.2-.2.4-.2.6-.1l1.800.9c.2.100.4.200.4.300.1.200.1.800-.1 1.300z"/></svg>
    <span>{{ label || t.waLong }}</span><span class="arrow" aria-hidden="true">→</span>
  </a>
</template>
