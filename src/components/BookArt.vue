<script setup>
defineProps({ label: String })
</script>
<template>
  <svg viewBox="0 0 400 300" role="img" :aria-label="label" class="art">
    <ellipse cx="200" cy="268" rx="150" ry="14" fill="#000" opacity=".25" />
    <rect x="70" y="220" width="260" height="38" rx="5" fill="#D4AF5A" />
    <rect x="90" y="182" width="230" height="38" rx="5" fill="#2F5DA8" />
    <rect x="62" y="144" width="236" height="38" rx="5" fill="#F4F6FA" />
    <polygon points="200,52 320,96 200,140 80,96" fill="#0B1730" stroke="#D4AF5A" stroke-width="3" />
    <path d="M130 118v26c20 14 80 14 100 0v-26l-50 18z" fill="#102447" stroke="#D4AF5A" stroke-width="2" />
    <path d="M300 102v42" stroke="#D4AF5A" stroke-width="3" /><circle cx="300" cy="148" r="6" fill="#D4AF5A" />
  </svg>
</template>
