<template>
  <section class="max-w-4xl mx-auto px-6 py-24">
    <h1 class="text-4xl font-bold text-slate-900 text-center mb-6">
      Contact Us
    </h1>

    <p class="text-slate-600 text-lg leading-relaxed text-center max-w-2xl mx-auto mb-12">
      Have questions, feedback, or collaboration ideas?
      We’d love to hear from you.
    </p>

    <!-- SUCCESS MESSAGE -->
    <div
        v-if="route.query.success"
        class="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg text-center"
    >
      Thank you! Your message has been sent successfully.
    </div>

    <!-- Contact Card -->
    <div class="bg-white shadow-sm rounded-xl p-8 border border-slate-200">
      <h2 class="text-2xl font-bold text-[#d97b1a] mb-6">
        Reach Us
      </h2>

      <!-- FOLLOW BUTTONS -->
      <div class="flex justify-start gap-4 mb-10 flex-wrap">
        <!-- Instagram -->
        <a
            href="https://www.instagram.com/halalformosa"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 px-6 py-3
           rounded-full bg-gradient-to-r from-pink-500 to-orange-400
           text-white font-semibold hover:opacity-90 transition"
        >
          <ion-icon name="logo-instagram" class="text-xl"></ion-icon>
          Instagram
        </a>

        <!-- TikTok -->
        <a
            href="https://www.tiktok.com/@halal_formosa"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 px-6 py-3
           rounded-full bg-black
           text-white font-semibold hover:opacity-90 transition"
        >
          <ion-icon name="logo-tiktok" class="text-xl"></ion-icon>
          TikTok
        </a>
      </div>

      <div class="mb-10">
        <h3 class="text-xl font-bold text-slate-900 mb-3">
          Office Information
        </h3>

        <p class="text-slate-700 leading-relaxed">
          Halal Formosa operates in collaboration with its publishing and operational partner,
          YiQi Global Consulting (藝啟文創行銷有限公司).
        </p>

        <p class="text-slate-700 leading-relaxed mt-2">
          <strong>Office Address:</strong><br />

          YiQi Global Consulting Office<br />

          <a
              href="https://maps.app.goo.gl/Nh7HTgh2soifnXtv7"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-[#d97b1a] transition underline-offset-2 hover:underline"
          >
            114064 臺北市內湖區洲子街12號2樓 (R.O.C.)<br />
            2F, No. 12, Zhouzi St., Neihu District, Taipei City 114, Taiwan
          </a>
        </p>



        <p class="text-slate-700 leading-relaxed mt-2">
          <strong>Office Phone:</strong><br />
          <a
              href="tel:+886287515503"
              class="hover:text-[#d97b1a] transition"
          >
            +886 2 8751 5503
          </a>
        </p>

        <p class="text-slate-500 text-sm mt-2">
          Visits by appointment only.
        </p>
      </div>




      <!-- Contact Form -->
      <div>
        <h3 class="text-xl font-bold text-slate-900 mb-4">
          Send a Message
        </h3>

        <form
            class="space-y-4"
            action="https://formsubmit.co/6356a8a605f3c7bf8fcf5cd007f06cd7"
            method="POST"
        >
          <!-- Disable CAPTCHA -->
          <input type="hidden" name="_captcha" value="false" />

          <!-- Redirect URL -->
          <input
              type="hidden"
              name="_next"
              :value="`${origin}/contact?success=true`"
          />

          <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              class="w-full p-3 rounded-lg border border-slate-300"
          />

          <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              class="w-full p-3 rounded-lg border border-slate-300"
          />

          <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              required
              class="w-full p-3 rounded-lg border border-slate-300"
          ></textarea>

          <button
              type="submit"
              class="w-full px-6 py-3 bg-[#d97b1a] text-white rounded-lg hover:bg-[#bf6c16] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const origin = window.location.origin
</script>
