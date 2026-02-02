<template>
  <section class="py-16 bg-slate-50">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold text-center mb-4">
        What Our Users Say on Google Play
      </h2>

      <p class="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
        Real reviews from Android users who rely on Halal Formosa
        for halal discovery, ingredient checks, and Muslim-friendly travel in Taiwan.
      </p>


      <!-- Jotform widget container -->
      <div id="JFWebsiteWidget-019c1d5029f4711aa6bf99151fbfaea5a7b3"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const scriptSrc =
      'https://www.jotform.com/website-widgets/embed/019c1d5029f4711aa6bf99151fbfaea5a7b3'

  // Clear container in case of SPA re-entry
  const container = document.getElementById(
      'JFWebsiteWidget-019c1d5029f4711aa6bf99151fbfaea5a7b3'
  )
  if (container) container.innerHTML = ''

  // Load script only once
  if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
    const script = document.createElement('script')
    script.src = scriptSrc
    script.async = true
    document.body.appendChild(script)
  }
})
</script>
