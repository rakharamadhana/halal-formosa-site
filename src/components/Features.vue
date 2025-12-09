<template>
  <!-- Features Section -->
  <section id="features" class="bg-slate-900 text-white py-20">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-4xl font-bold mb-4 text-center">Powerful Features</h2>
      <p class="text-slate-300 text-center mb-16 max-w-2xl mx-auto">
        Designed to make every Muslim's experience in Taiwan easier and stress-free
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition">
          <div class="text-4xl mb-4">📱</div>
          <h3 class="text-xl font-bold mb-2">Ingredient Scanner</h3>
          <p class="text-slate-300 text-sm">
            Instantly detect questionable, suspicious or halal-friendly ingredients
          </p>
        </div>

        <div class="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition">
          <div class="text-4xl mb-4">🗺️</div>
          <h3 class="text-xl font-bold mb-2">Halal Map</h3>
          <p class="text-slate-300 text-sm">
            View halal restaurants, shops and mosques across Taiwan
          </p>
        </div>

        <div class="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition">
          <div class="text-4xl mb-4">✈️</div>
          <h3 class="text-xl font-bold mb-2">Travel Guide</h3>
          <p class="text-slate-300 text-sm">
            Prayer times, routes and travel planning specially for Muslims
          </p>
        </div>

        <div class="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition">
          <div class="text-4xl mb-4">👥</div>
          <h3 class="text-xl font-bold mb-2">Community Driven</h3>
          <p class="text-slate-300 text-sm">
            Crowdsourced halal information updated by real users
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Feature from "./parts/FeatureCard.vue"
</script>
