<template>
  <!-- Testimonials Section -->
  <section id="testimonials" class="max-w-7xl mx-auto px-6 py-20">
    <h2 class="text-4xl font-bold text-center mb-4">Loved by Users</h2>
    <p class="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
      Hear from Muslim travelers and residents who rely on Halal Formosa
    </p>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition">
        <div class="flex gap-1 mb-4">
          <span v-for="i in 5" :key="i" class="text-[#d97b1a]">★</span>
        </div>
        <p class="text-slate-600 mb-6 leading-relaxed">
          "Finally, I can travel to Taiwan without worrying about halal food. The map feature is a game-changer!"
        </p>
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-orange-100 rounded-full"></div>
          <div>
            <p class="font-semibold text-slate-900">Fatima Ali</p>
            <p class="text-sm text-slate-500">Singapore</p>
          </div>
        </div>
      </div>

      <div class="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition">
        <div class="flex gap-1 mb-4">
          <span v-for="i in 5" :key="i" class="text-[#d97b1a]">★</span>
        </div>
        <p class="text-slate-600 mb-6 leading-relaxed">
          "The ingredient scanner gives me complete peace of mind. I recommend it to all my Muslim friends."
        </p>
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-orange-100 rounded-full"></div>
          <div>
            <p class="font-semibold text-slate-900">Hassan Rahman</p>
            <p class="text-sm text-slate-500">Malaysia</p>
          </div>
        </div>
      </div>

      <div class="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition">
        <div class="flex gap-1 mb-4">
          <span v-for="i in 5" :key="i" class="text-[#d97b1a]">★</span>
        </div>
        <p class="text-slate-600 mb-6 leading-relaxed">
          "As a Muslim resident in Taiwan, this app has made my life so much easier. Highly recommended!"
        </p>
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-orange-100 rounded-full"></div>
          <div>
            <p class="font-semibold text-slate-900">Aisha Khan</p>
            <p class="text-sm text-slate-500">Taiwan</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>