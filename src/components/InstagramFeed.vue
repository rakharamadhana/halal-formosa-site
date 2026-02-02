<template>
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-6">
        Follow Us on Instagram
      </h2>

      <!-- Elfsight container -->
      <div
          class="elfsight-app-49335e18-9eae-405e-8f71-ef1012eee417"
          data-elfsight-app-lazy
      ></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Prevent loading script multiple times (important in SPA)
  if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
    const script = document.createElement('script')
    script.src = 'https://elfsightcdn.com/platform.js'
    script.async = true
    document.body.appendChild(script)
  }
})
</script>
