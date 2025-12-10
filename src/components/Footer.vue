<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()

// Go to home and scroll
const goToHomeSection = async (sectionId: string) => {
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
  <!-- Footer -->
  <footer class="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-8 mb-8">

        <!-- Logo + Description -->
        <div>
          <div class="flex items-center gap-2 mb-4 cursor-pointer" @click="router.push('/')">
            <img src="/logo.png" width="500" height="500" alt="Halal Formosa Logo" class="w-10 h-10 rounded-lg shadow-sm object-contain" />
            <span class="text-xl font-bold text-white">Halal Formosa</span>
          </div>
          <p class="text-sm">Taiwan's first Muslim-friendly ecosystem</p>
        </div>

        <!-- Product Links -->
        <div>
          <h4 class="font-semibold text-white mb-4">Product</h4>
          <ul class="space-y-2 text-sm">

            <!-- Features -->
            <li>
              <button
                  @click="goToHomeSection('features')"
                  class="hover:text-orange-400 transition text-left">
                Features
              </button>
            </li>

            <!-- Pricing (scroll to pricing in Home) -->
            <li>
              <button
                  @click="goToHomeSection('pricing')"
                  class="hover:text-orange-400 transition text-left">
                Pricing
              </button>
            </li>

            <!-- Download (scroll to CTA) -->
            <li>
              <button
                  @click="goToHomeSection('download')"
                  class="hover:text-orange-400 transition text-left">
                Download
              </button>
            </li>

          </ul>
        </div>

        <!-- Company links -->
        <div>
          <h4 class="font-semibold text-white mb-4">Company</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link to="/about" class="hover:text-orange-400 transition">About</router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:text-orange-400 transition">Contact</router-link>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4 class="font-semibold text-white mb-4">Connect</h4>
          <div class="flex gap-4">
            <a
                href="https://www.instagram.com/halalformosa/"
                target="_blank"
                class="hover:text-orange-400 transition"
            >
              📷 Instagram
            </a>
          </div>
        </div>

      </div>

      <!-- Bottom Footer -->
      <div class="border-t border-slate-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm">© 2025 Halal Formosa. All rights reserved.</p>

          <div class="flex gap-6 text-sm">
            <router-link to="/privacy" class="hover:text-orange-400 transition">Privacy Policy</router-link>
            <router-link to="/terms" class="hover:text-orange-400 transition">Terms of Service</router-link>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>
