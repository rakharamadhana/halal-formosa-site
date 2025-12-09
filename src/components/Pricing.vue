<script setup lang="ts">

</script>

<template>
  <!-- Pricing Section -->
  <section id="pricing" class="bg-slate-50 py-20">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-4">Pricing</h2>
      <p class="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
        Choose the perfect plan for your needs
      </p>

      <div class="grid md:grid-cols-2 gap-8">

        <!-- FREE PLAN -->
        <div class="bg-white rounded-xl p-8 border border-slate-200">
          <h3 class="text-2xl font-bold mb-2">Free</h3>
          <p class="text-slate-600 mb-6">Start exploring Taiwan with essential tools</p>
          <p class="text-4xl font-bold mb-6">NT$0</p>

          <button class="w-full px-6 py-2 border-2 border-[#d97b1a] text-[#d97b1a] rounded-lg font-semibold hover:bg-orange-50 transition mb-8">
            Get Started
          </button>

          <ul class="space-y-4 text-slate-600">

            <li class="flex items-center gap-2">
              <span class="text-[#d97b1a] font-bold">✓</span>
              Halal Map Access
            </li>

            <li class="flex items-center gap-2">
              <span class="text-[#d97b1a] font-bold">✓</span>
              Basic Ingredient Scanning
            </li>

            <li class="flex items-center gap-2">
              <span class="text-[#d97b1a] font-bold">✓</span>
              10 Scans Daily
            </li>

            <li class="flex items-center gap-2">
              <span class="text-[#d97b1a] font-bold">✕</span>
              Unlimited Scans
            </li>

            <li class="flex items-center gap-2">
              <span class="text-[#d97b1a] font-bold">✕</span>
              No Ads
            </li>

          </ul>
        </div>

        <!-- PRO PLAN -->
        <div class="bg-[#d97b1a] rounded-xl p-8 text-white relative border-2 border-[#d97b1a]">
          <div class="absolute top-4 right-4 bg-white text-[#d97b1a] px-3 py-1 rounded-full text-sm font-semibold">
            Best Value
          </div>

          <h3 class="text-2xl font-bold mb-2">Pro</h3>
          <p class="text-orange-50 mb-6">For users who want a complete halal experience</p>

          <p class="text-4xl font-bold mb-6">
            NT$49<span class="text-lg">/month</span>
          </p>

          <button class="w-full px-6 py-2 bg-white text-[#d97b1a] rounded-lg font-semibold hover:bg-orange-50 transition mb-8">
            Upgrade to Pro
          </button>

          <ul class="space-y-4">
            <li class="flex items-center gap-2">
              <span class="font-bold">✓</span>
              Everything in Free
            </li>

            <li class="flex items-center gap-2">
              <span class="font-bold">✓</span>
              No Ads
            </li>

            <li class="flex items-center gap-2">
              <span class="font-bold">✓</span>
              Unlimited Scans
            </li>

            <li class="flex items-center gap-2">
              <span class="font-bold">✓</span>
              Other Pro Features (coming soon)
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
