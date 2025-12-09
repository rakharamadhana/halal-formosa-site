<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <HeroSection />
    <FeaturesSection />
    <PricingSection />
    <TestimonialsSection />
    <FinalCTASection />

    <!-- This is the missing part -->
    <router-view />
  </div>
</template>

<script setup>
import HeroSection from "@/components/Hero.vue"
import FeaturesSection from "@/components/Features.vue"
import TestimonialsSection from "@/components/Testimonials.vue"
import PricingSection from "@/components/Pricing.vue"
import FinalCTASection from "@/components/FinalCTA.vue"
</script>

<style scoped>
* {
  scroll-behavior: smooth;
}
</style>
