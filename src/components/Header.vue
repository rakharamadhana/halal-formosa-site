<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import logo from '@/assets/logo.png?w=80&format=webp';

const router = useRouter()
const mobileOpen = ref(false)

const goToHomeSection = async (sectionId) => {
  if (router.currentRoute.value.path !== "/") {
    await router.push("/")
  }

  requestAnimationFrame(() => {
    const el = document.getElementById(sectionId)
    el?.scrollIntoView({ behavior: "smooth" })
  })
}

const goHome = () => router.push("/")
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <nav class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

      <!-- LOGO -->
      <div class="flex items-center gap-2 cursor-pointer" @click="goHome">
        <img :src="logo" class="w-10 h-10 rounded-lg object-contain" />
        <span class="text-xl font-bold text-slate-900">Halal Formosa</span>
      </div>

      <!-- DESKTOP NAV -->
      <div class="hidden md:flex items-center gap-8">
        <button @click="goToHomeSection('features')" class="text-slate-600 hover:text-[#d97b1a] transition">Features</button>
        <button @click="goToHomeSection('pricing')" class="text-slate-600 hover:text-[#d97b1a] transition">Pricing</button>
        <button @click="goToHomeSection('testimonials')" class="text-slate-600 hover:text-[#d97b1a] transition">Testimonials</button>


        <router-link to="/about" class="text-slate-600 hover:text-[#d97b1a] transition">About</router-link>
        <router-link
            to="/faq"
            class="text-slate-600 hover:text-[#d97b1a] transition"
        >
          FAQ
        </router-link>
        <router-link to="/contact" class="text-slate-600 hover:text-[#d97b1a] transition">Contact</router-link>
      </div>

      <!-- DESKTOP CTA -->
      <button
          @click="goToHomeSection('download')"
          class="hidden md:block px-6 py-2 bg-[#d97b1a] text-white rounded-lg font-medium hover:bg-[#bf6c16] transition"
      >
        Download
      </button>

      <!-- MOBILE BURGER -->
      <button
          class="md:hidden p-2 text-slate-700"
          @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

    </nav>

    <!-- MOBILE MENU -->
    <transition name="slide">
      <div
          v-if="mobileOpen"
          class="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-4"
      >
        <button @click="goToHomeSection('features'); mobileOpen=false" class="block w-full text-left text-slate-700 font-medium py-2 hover:text-[#d97b1a] transition">
          Features
        </button>

        <button @click="goToHomeSection('pricing'); mobileOpen=false" class="block w-full text-left text-slate-700 font-medium py-2 hover:text-[#d97b1a] transition">
          Pricing
        </button>

        <button @click="goToHomeSection('testimonials'); mobileOpen=false" class="block w-full text-left text-slate-700 font-medium py-2 hover:text-[#d97b1a] transition">
          Testimonials
        </button>

        <router-link to="/about" @click="mobileOpen=false" class="block w-full text-left text-slate-700 font-medium py-2 hover:text-[#d97b1a] transition">
          About
        </router-link>

        <router-link
            to="/faq"
            @click="mobileOpen=false"
            class="block w-full text-left text-slate-700 font-medium py-2 hover:text-[#d97b1a] transition"
        >
          FAQ
        </router-link>

        <router-link to="/contact" @click="mobileOpen=false" class="block w-full text-left text-slate-700 font-medium py-2 hover:text-[#d97b1a] transition">
          Contact
        </router-link>


        <button
            @click="goToHomeSection('download'); mobileOpen=false"
            class="w-full bg-[#d97b1a] text-white py-2 rounded-lg font-semibold"
        >
          Download
        </button>
      </div>
    </transition>

  </header>
</template>

<style scoped>
.slide-enter-from { opacity: 0; transform: translateY(-6px); }
.slide-enter-to { opacity: 1; transform: translateY(0); }
.slide-enter-active { transition: all 0.2s ease-out; }
.slide-leave-active { transition: all 0.15s ease-in; opacity: 0; transform: translateY(-6px); }
</style>
