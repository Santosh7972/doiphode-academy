<script setup>
import { t } from '../data/translations'
</script>
<template><section class="container nf"><h1>{{ t.nfTitle }}</h1><p>{{ t.nfText }}</p><RouterLink to="/" class="btn btn-gold">{{ t.goHome }}</RouterLink></section></template>
