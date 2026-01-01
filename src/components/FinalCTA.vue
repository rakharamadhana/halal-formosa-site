<script setup lang="ts"></script>

<template>
  <!-- Final CTA Section -->
  <section id="download" class="bg-gradient-to-r from-[#d97b1a] to-[#bf6c16] text-white py-20">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">Start Your Halal Journey Today</h2>
      <p class="text-xl mb-8 text-orange-50">
        Join thousands of Muslim travelers discovering Taiwan with confidence
      </p>

      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">

        <!-- APP STORE (COMING SOON) -->
        <div class="relative w-40">
          <img
              src="/app-store.png"
              alt="App Store"
              class="w-full opacity-40"
          />
          <div class="absolute inset-0 bg-white/50 backdrop-blur-xs flex items-center justify-center rounded-lg">
            <span class="text-[#843f00] font-semibold text-sm">iOS Coming Soon</span>
          </div>
        </div>

        <!-- GOOGLE PLAY (LIVE DOWNLOAD) -->
        <a
            href="https://play.google.com/store/apps/details?id=com.rcreative.halalformosa"
            target="_blank"
            rel="noopener noreferrer"
            class="w-40 block"
        >
          <img
              src="/google-play.png"
              alt="Download on Google Play"
              class="w-full cursor-pointer hover:opacity-80 transition"
          />
        </a>

        <!-- WEB VERSION BADGE -->
        <a
            href="https://app.halalformosa.com"
            target="_blank"
            rel="noopener noreferrer"
            class="w-40 block"
        >
          <img
              src="/web-badge.png"
              alt="Open Web App"
              class="w-full cursor-pointer hover:opacity-80 transition"
          />
        </a>

      </div>

    </div>
  </section>
</template>

<style scoped></style>
