<template>
  <div class="flex flex-col min-h-screen">

    <!-- Header (stays at top) -->
    <HeaderSection />

    <!-- Main content (expands to fill available space) -->
    <main class="flex-1">
      <router-view />
    </main>

    <!-- Footer (sticks to bottom when content is short) -->
    <FooterSection />
  </div>
</template>

<script setup>
import HeaderSection from "@/components/Header.vue"
import FooterSection from "@/components/Footer.vue"
</script>
