<script setup>
import { useReveal } from '../composables/useReveal'
const props = defineProps({ tag: { type: String, default: 'div' }, delay: { type: Number, default: 0 } })
const { el, armed, shown, style } = useReveal(props.delay)
</script>
<template>
  <component :is="tag" ref="el" :class="{ 'reveal-armed': armed && !shown, 'reveal-shown': shown }" :style="style"><slot /></component>
</template>
