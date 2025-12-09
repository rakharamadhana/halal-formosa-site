<script setup lang="ts"></script>

<template>
  <!-- Final CTA Section -->
  <section id="download" class="bg-gradient-to-r from-[#d97b1a] to-[#bf6c16] text-white py-20">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">Start Your Halal Journey Today</h2>
      <p class="text-xl mb-8 text-orange-50">
        Join thousands of Muslim travelers discovering Taiwan with confidence
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">

        <!-- iOS BUTTON (Disabled / Coming Soon) -->
        <button
            disabled
            class="px-8 py-3 bg-white/40 text-white/80 rounded-full font-semibold cursor-not-allowed border border-white/30"
        >
          iOS App — Coming Soon
        </button>

        <!-- ANDROID BUTTON -->
        <a
            href="https://play.google.com/store/apps/details?id=com.rcreative.halalformosa"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-[#bf6c16] transition inline-flex items-center justify-center"
        >
          Download Android App
        </a>

        <!-- WEB VERSION BUTTON -->
        <a
            href="https://halalformosa.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-3 bg-white text-[#d97b1a] rounded-full font-semibold hover:bg-orange-50 transition inline-flex items-center justify-center"
        >
          Open Web App
        </a>

      </div>
    </div>
  </section>
</template>

<style scoped></style>
