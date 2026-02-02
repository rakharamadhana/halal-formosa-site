<template>
  <section class="py-16 bg-slate-50">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-6">
        Google Play Reviews
      </h2>

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
