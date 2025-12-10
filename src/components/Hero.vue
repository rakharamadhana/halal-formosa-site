<script setup>
import { useRouter } from "vue-router"
import logo from '@/assets/logo.png?w=80&format=webp';
const router = useRouter()

// Reuse the same smooth scroll method used in Header.vue
const goToSection = async (sectionId) => {
  if (router.currentRoute.value.path !== "/") {
    await router.push("/")
  }

  requestAnimationFrame(() => {
    const el = document.getElementById(sectionId)
    el?.scrollIntoView({ behavior: "smooth" })
  })
}

const goToContact = () => {
  router.push("/contact")
}
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 py-20 md:py-32">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
          <span class="text-[#d97b1a]">Halal is Easy</span> in Taiwan
        </h1>

        <p class="text-xl text-slate-600 mb-8 leading-relaxed">
          Discover halal-friendly food, scan ingredients, explore halal maps, and travel with confidence in Taiwan.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">

          <!-- DOWNLOAD BUTTON (SCROLL TO #download) -->
          <button
              @click="goToSection('download')"
              class="px-8 py-3 bg-[#d97b1a] text-white rounded-full font-semibold hover:bg-[#bf6c16] transition"
          >
            Download App
          </button>

          <!-- LEARN MORE -> Contact Page -->
          <button
              @click="goToContact"
              class="px-8 py-3 border-2 border-slate-300 text-slate-900 rounded-full font-semibold hover:border-[#d97b1a] hover:text-[#d97b1a] transition"
          >
            Contact Us
          </button>

        </div>
      </div>

      <div class="flex flex-col items-center justify-center">
        <img :src="logo" width="300" height="300" alt="Halal Formosa Logo" class="w-40 h-40 object-contain drop-shadow-lg mb-4" />
        <p class="text-slate-600 font-medium">Halal Ecosystem for Muslim Travelers</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
