<template>
  <!-- Testimonials Section -->
  <section id="testimonials" class="max-w-7xl mx-auto px-6 py-20">
    <h2 class="text-4xl font-bold text-center mb-4">Loved by Our Users</h2>
    <p class="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
      Real experiences from Muslims in Taiwan who rely on Halal Formosa every day.
    </p>

    <div class="grid md:grid-cols-1 gap-8 justify-center">

      <!-- Fitricia Testimonial (Real User) -->
      <div class="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition max-w-2xl mx-auto">
        <div class="flex gap-1 mb-4">
          <span v-for="i in 5" :key="i" class="text-[#d97b1a]">★</span>
        </div>

        <p class="text-slate-600 mb-6 leading-relaxed">
          "Alhamdulillah, it's now so much easier to find halal products in Taiwan —
          just scan and check! Sometimes we think a product is safe, but after scanning,
          it turns out to contain doubtful (syubhat) ingredients 😭. Thank you,
          Halal Formosa!"
        </p>

        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-orange-100 rounded-full"></div>
          <div>
            <p class="font-semibold text-slate-900">Fitricia</p>
            <p class="text-sm text-slate-500">Indonesian Resident in Taiwan</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts"></script>
