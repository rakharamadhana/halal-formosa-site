<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">

    <!-- HERO -->
    <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
    >
      <HeroSection />
    </div>

    <!-- FEATURES -->
    <div
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-anchor-placement="top-bottom"
    >
      <FeaturesSection />
    </div>

    <!-- PRICING -->
    <div
        data-aos="fade-right"
        data-aos-delay="250"
        data-aos-anchor-placement="top-bottom"
    >
      <PricingSection />
    </div>

    <!-- TESTIMONIALS -->
    <div
        data-aos="fade-left"
        data-aos-delay="350"
        data-aos-anchor-placement="top-bottom"
    >
      <TestimonialsSection />
    </div>

    <!-- FINAL CTA -->
    <div
        data-aos="zoom-in"
        data-aos-delay="450"
        data-aos-anchor-placement="top-bottom"
    >
      <FinalCTASection />
    </div>

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
