<template>
  <div class="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition">
    <div class="text-4xl mb-4">{{ icon }}</div>
    <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
    <p class="text-slate-300 text-sm leading-relaxed"><slot /></p>
  </div>
</template>

<script setup>
defineProps(["icon", "title"])
</script>
