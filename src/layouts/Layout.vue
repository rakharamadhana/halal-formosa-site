<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Always visible -->
    <HeaderSection />

    <!-- Page-specific content -->
    <main>
      <router-view />
    </main>

    <!-- Always visible -->
    <FooterSection />
  </div>
</template>

<script setup>
import HeaderSection from "@/components/Header.vue"
import FooterSection from "@/components/Footer.vue"
</script>

<style scoped>
* {
  scroll-behavior: smooth;
}
</style>
