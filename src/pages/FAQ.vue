<template>
  <section class="max-w-5xl mx-auto px-6 py-24">

    <!-- Header (same style as About) -->
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold text-slate-900 mb-4">
        Frequently Asked Questions
      </h1>
      <p class="text-slate-600 text-lg max-w-3xl mx-auto">
        Common questions about using Halal Formosa
      </p>
    </div>

    <!-- FAQ Card -->
    <div class="bg-white shadow-sm rounded-xl border border-slate-200">

      <div
          v-for="(item, index) in faqs"
          :key="index"
          class="border-b last:border-b-0 border-slate-200"
      >
        <!-- Question -->
        <button
            class="w-full flex items-center justify-between px-8 py-6 text-left"
            @click="toggle(index)"
        >
          <h3 class="text-lg font-semibold text-slate-900">
            {{ item.q }}
          </h3>

          <span
              class="ml-6 text-[#d97b1a] text-2xl font-light"
          >
            {{ openIndex === index ? "−" : "+" }}
          </span>
        </button>

        <!-- Answer -->
        <transition name="accordion">
          <div
              v-if="openIndex === index"
              class="px-8 pb-6 text-slate-700 leading-relaxed"
          >
            {{ item.a }}
          </div>
        </transition>
      </div>

    </div>

  </section>
</template>


<script setup lang="ts">
import { ref } from "vue"

const openIndex = ref<number | null>(null)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    q: "Are all products listed in Halal Formosa halal?",
    a: "No. Halal Formosa includes products categorized as halal, Muslim-friendly, syubhah (doubtful), and haram. Product status is determined based on available halal certifications, official statements, and ingredient analysis to help users make informed decisions."
  },
  {
    q: "Can I add halal product information?",
    a: "Yes. Anyone can contribute product information for items that are sold or available in Taiwan through the Halal Formosa application. This helps keep the database relevant and useful for the local Muslim community."
  },
  {
    q: "What are the requirements to add product information?",
    a: "Products can be submitted through the Halal Formosa platform using the plus (+) button in the Product tab. Submissions must include at least one of the following: a halal label or certification, ingredient analysis via the Halal Formosa system, or clear product photos. All submissions are reviewed and validated before publication."
  },
  {
    q: "What if someone adds unclear or even haram products?",
    a: "During product submission through the Halal Formosa platform, syubhah (doubtful) and haram ingredients can be identified through ingredient analysis and supporting information. Our team reviews and validates the analysis results before publishing the product information, ensuring transparency and accuracy for users."
  },
  {
    q: "How can I trust the information provided by Halal Formosa?",
    a: "Halal Formosa collaborates with various Muslim communities and organizations in Taiwan. Our supporters and partners are transparently listed in the Supporters or Partners section, and all submitted information is reviewed and validated before being published."
  },
  {
    q: "How can I find halal restaurants or prayer places near me?",
    a: "Halal Formosa provides a location-based map feature that displays nearby halal restaurants and prayer places based on your current location."
  },
  {
    q: "Can I add halal places or locations?",
    a: "Place submissions on Halal Formosa are currently limited to approved contributors. This helps ensure location information remains accurate, reliable, and up to date."
  },
  {
    q: "How can I become a contributor in Halal Formosa?",
    a: "If you are interested in becoming a contributor, please contact us at support[@]halalformosa.com with the email subject 'Becoming Halal Formosa Contributor'. Our team will review your request and follow up with the next steps."
  },
  {
    q: "What should I do if I find outdated or incorrect product or place information?",
    a: "If you find outdated or incorrect information about a product or place, you can use the report feature available within the Halal Formosa app to submit a report or send a ticket. Our team will review and validate the information and update it accordingly."
  },
  {
    q: "Does Halal Formosa make money from users who install the app?",
    a: "Yes. Halal Formosa operates using a mixed B2C and B2B business model. For users (B2C), we offer a subscription-based program called Halal Formosa Pro that provides access to advanced features. We also display in-app advertisements to help sustain platform development and ongoing services. In addition, we collaborate with business partners through B2B partnerships to support the ecosystem."
  },
  {
    q: "Where can I send feedback or complaints about Halal Formosa?",
    a: "You can reach our contact person through the Contact page or email us at support[@]halalformosa.com for further inquiries or feedback."
  }
]
</script>

<style scoped>
.accordion-enter-from {
  opacity: 0;
  max-height: 0;
}
.accordion-enter-to {
  opacity: 1;
  max-height: 500px;
}
.accordion-enter-active {
  transition: all 0.25s ease;
}
.accordion-leave-from {
  opacity: 1;
  max-height: 500px;
}
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}
.accordion-leave-active {
  transition: all 0.2s ease;
}
</style>
