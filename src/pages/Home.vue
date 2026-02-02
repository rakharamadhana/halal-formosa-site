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

    <!-- SUPPORTED BY -->
    <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-anchor-placement="top-bottom"
    >
      <SupportedBySection />
    </div>


    <!-- PRICING -->
    <div
        data-aos="fade-up"
        data-aos-delay="250"
        data-aos-anchor-placement="top-bottom"
    >
      <PricingSection />
    </div>

    <!-- TESTIMONIALS -->
    <div
        data-aos="fade-up"
        data-aos-delay="350"
        data-aos-anchor-placement="top-bottom"
    >
      <TestimonialsSection />
    </div>

    <!-- INSTAGRAM FEED -->
    <div data-aos="fade-up" data-aos-delay="400">
      <InstagramFeed />
    </div>

    <!-- FINAL CTA -->
    <div
        data-aos="fade-up"
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
import SupportedBySection from "@/components/SupportedBySection.vue"
import TestimonialsSection from "@/components/Testimonials.vue"
import PricingSection from "@/components/Pricing.vue"
import FinalCTASection from "@/components/FinalCTA.vue"
import InstagramFeed from "@/components/InstagramFeed.vue";
</script>

<style scoped>
* {
  scroll-behavior: smooth;
}
</style>
