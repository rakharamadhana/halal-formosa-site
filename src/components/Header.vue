<script setup>
import { useRouter } from "vue-router"
import logo from '@/assets/logo.png?w=80&format=webp';

const router = useRouter()

const goToHomeSection = async (sectionId) => {
  if (router.currentRoute.value.path !== "/") {
    await router.push("/")
  }

  requestAnimationFrame(() => {
    const el = document.getElementById(sectionId)
    el?.scrollIntoView({ behavior: "smooth" })
  })
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- Logo -->
      <div class="flex items-center gap-2 cursor-pointer" @click="router.push('/')">
        <img
            :src="logo"
            width="80"
            height="80"
            alt="Halal Formosa Logo"
            class="w-10 h-10 rounded-lg object-contain"
        />
        <span class="text-xl font-bold text-slate-900">Halal Formosa</span>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex items-center gap-8">

        <button @click="goToHomeSection('features')" class="text-slate-600 hover:text-[#d97b1a] transition">
          Features
        </button>

        <button @click="goToHomeSection('pricing')" class="text-slate-600 hover:text-[#d97b1a] transition">
          Pricing
        </button>

        <button @click="goToHomeSection('testimonials')" class="text-slate-600 hover:text-[#d97b1a] transition">
          Testimonials
        </button>

        <router-link to="/about" class="text-slate-600 hover:text-[#d97b1a] transition">
          About
        </router-link>

        <router-link to="/contact" class="text-slate-600 hover:text-[#d97b1a] transition">
          Contact
        </router-link>
      </div>


      <!-- CTA Button -->
      <button
          @click="goToHomeSection('download')"
          class="px-6 py-2 bg-[#d97b1a] text-white rounded-lg font-medium hover:bg-[#bf6c16] transition"
      >
        Get Started
      </button>


    </nav>
  </header>
</template>
