<template>
  <section id="testimonials" class="max-w-7xl mx-auto px-6 py-20">
    <h2 class="text-4xl font-bold text-center mb-4">Loved by Our Users</h2>
    <p class="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
      Real experiences from Muslims in Taiwan who rely on Halal Formosa every day.
    </p>

    <!-- Horizontal Scroll Carousel -->
    <div
        class="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar"
    >
      <!-- Testimonial Card -->
      <div
          v-for="item in testimonials"
          :key="item.name"
          class="min-w-[90%] md:min-w-[45%] lg:min-w-[32%] bg-white border border-slate-200 rounded-xl p-8 snap-center shadow-sm hover:shadow-lg transition"
      >
        <!-- Stars -->
        <div class="flex gap-1 mb-4">
          <span v-for="i in 5" :key="i" class="text-[#d97b1a]">★</span>
        </div>

        <!-- Message -->
        <p class="text-slate-600 mb-6 leading-relaxed">
          "{{ item.message }}"
        </p>

        <!-- User Info -->
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-orange-100 rounded-full"></div>
          <div>
            <p class="font-semibold text-slate-900">{{ item.name }}</p>
            <p class="text-sm text-slate-500">{{ item.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: "Fitricia",
    role: "Indonesian Resident in Taiwan",
    message:
        "Alhamdulillah, it's now so much easier to find halal products in Taiwan, just scan and check! Sometimes we think a product is safe, but after scanning, it turns out to contain doubtful (syubhat) ingredients 😭. Thank you, Halal Formosa!"
  },
  {
    name: "Rarasanti Rania",
    role: "PhD Student in Taiwan",
    message:
        "Alhamdulillah, thank you Halal Formosa for bringing a refreshing and much-needed solution for Muslims in Taiwan. The halal ingredient checker makes everything so convenient, and I really love the user interface, especially the product search. Finding halal products or halal-friendly places is now so much more efficient."
  },
];
</script>

<style>
/* Hide scrollbar for a clean carousel */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
