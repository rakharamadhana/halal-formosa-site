<template>
  <section id="testimonials" class="max-w-7xl mx-auto px-6 py-20">
    <h2 class="text-4xl font-bold text-center mb-4">Loved by Our Users</h2>
    <p class="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
      Real experiences from Muslims in Taiwan who rely on Halal Formosa every day.
    </p>

    <!-- Horizontal Scroll Carousel -->
    <div
        ref="carousel"
        class="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar scroll-smooth cursor-ew-resize"
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
    <!-- Pagination Dots -->
    <div class="flex justify-center gap-2 mt-6">
      <button
          v-for="page in totalPages"
          :key="page"
          @click="scrollToPage(page - 1)"
          class="w-2.5 h-2.5 rounded-full transition"
          :class="activePage === page - 1
      ? 'bg-[#d97b1a]'
      : 'bg-slate-300 hover:bg-slate-400'"
          aria-label="Go to testimonial page"
      />
    </div>

  </section>
</template>

<script setup lang="ts">

import { ref, onMounted, onUnmounted, nextTick } from "vue"

import { computed } from "vue"

const cardsPerPage = ref(1)

const updateCardsPerPage = () => {
  const width = window.innerWidth
  if (width >= 1024) cardsPerPage.value = 3
  else if (width >= 768) cardsPerPage.value = 2
  else cardsPerPage.value = 1
}

const showLeftArrow = computed(() => totalPages.value > 1)
const showRightArrow = computed(() => totalPages.value > 1)

const carousel = ref<HTMLElement | null>(null)
const activePage = ref(0)


let autoplayInterval: number | null = null
let hoverInterval: number | null = null

const totalPages = computed(() =>
    Math.ceil(testimonials.length / cardsPerPage.value)
)

const goNext = () => {
  const next =
      activePage.value >= totalPages.value - 1
          ? 0
          : activePage.value + 1
  scrollToPage(next)
}

const goPrev = () => {
  const prev =
      activePage.value <= 0
          ? totalPages.value - 1
          : activePage.value - 1
  scrollToPage(prev)
}


const updateActivePage = () => {
  if (!carousel.value) return

  const pageWidth = carousel.value.clientWidth
  activePage.value = Math.round(carousel.value.scrollLeft / pageWidth)
}

const scrollToPage = (page: number) => {
  if (!carousel.value) return

  carousel.value.scrollTo({
    left: page * carousel.value.clientWidth,
    behavior: "smooth",
  })
}

const startAutoplay = () => {
  stopAutoplay()
  autoplayInterval = window.setInterval(goNext, 4000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

const startHoverSlide = () => {
  stopAutoplay()
  stopHoverSlide()

  hoverInterval = window.setInterval(goNext, 1200)
}

const stopHoverSlide = () => {
  if (hoverInterval) {
    clearInterval(hoverInterval)
    hoverInterval = null
  }
}

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
  {
    name: "Ogi Dani Sakarov",
    role: "PhD Student in Taiwan and Director of IMA Taiwan",
    message:
        "Halal Formosa is an excellent tool for Muslims in Taiwan. Its halal scan function is reliable, the halal restaurant listings are comprehensive, and prayer locations are clearly mapped. I highly recommend this app to anyone seeking trustworthy halal guidance in Taiwan."
  },
  {
    name: "dr. Herlin Ajeng Nurrahma, M.Biomed",
    role: "PhD Candidate in Taipei",
    message:
        "I really love this app. Halal Formosa is a very helpful application, especially for Muslims living in a minority setting like here, in Taiwan. It makes choosing halal food much easier and more reassuring, particularly when shopping or eating out. The information provided is clear and practical, which truly supports daily decision-making. I am also very proud that this application is developed by an Indonesian creator. It reflects both cultural awareness and genuine care for the Muslim community. Highly recommended.❤️"
  },
];

onMounted(() => {
  nextTick(() => {
    if (!carousel.value) return

    carousel.value.addEventListener("scroll", updateActivePage())

    // Hover interactions
    carousel.value.addEventListener("mouseenter", startHoverSlide)
    carousel.value.addEventListener("mouseleave", () => {
      stopHoverSlide()
      startAutoplay()
    })
  })

  updateCardsPerPage()
  window.addEventListener("resize", updateCardsPerPage)

  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
  stopHoverSlide()
  window.removeEventListener("resize", updateCardsPerPage)
  carousel.value?.removeEventListener("scroll", updateActivePage)
})
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
