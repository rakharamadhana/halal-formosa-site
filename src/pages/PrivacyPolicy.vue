<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20">
    <div class="max-w-3xl mx-auto px-6">

      <!-- Title -->
      <h1 class="text-4xl font-bold text-slate-900 mb-6 text-center">
        Privacy Policy
      </h1>

      <p class="text-slate-600 mb-6 leading-relaxed">
        This Privacy Policy ("Policy") explains how <strong>R Creative</strong> ("we", "our", or "us") handles
        personal and non-personal information collected through the <strong>Halal Formosa</strong> mobile application
        ("Service"). By using the Service, you agree to the collection, storage, and use of information in accordance
        with this Policy.
      </p>

      <!-- Section Block -->
      <section v-for="section in sections" :key="section.title" class="mb-10">
        <h2 class="text-2xl font-semibold text-[#d97b1a] mb-3">{{ section.title }}</h2>

        <p v-if="section.text" class="text-slate-600 leading-relaxed mb-4">
          {{ section.text }}
        </p>

        <ul v-if="section.list" class="list-disc ml-6 space-y-2 text-slate-600">
          <li v-for="item in section.list" :key="item" v-html="item"></li>
        </ul>
      </section>

      <p class="text-slate-500 italic mt-12 text-center">
        Effective Date: August 2025
      </p>

    </div>
  </div>
</template>

<script setup>
const sections = [
  {
    title: "Article 1 – Definition of Personal Information",
    text: `“Personal information” refers to identifiable data such as your Google account email address,
           display name, and profile image collected during authentication. Other app usage information is stored in anonymized form.`
  },
  {
    title: "Article 2 – Methods of Collecting Personal Information",
    list: [
      "When you sign in using Google, we collect your email, display name, and profile image.",
      "We collect anonymized logs and interaction data for security, improvement, and research.",
      "Map usage collects approximate device location to show nearby halal facilities.",
      "Donation-related details are stored only as transaction metadata; <strong>no card data</strong> is stored."
    ]
  },
  {
    title: "Article 3 – Purpose of Use",
    list: [
      "To authenticate users and provide app features",
      "To offer location-based Explore / Map services",
      "To improve features using anonymized analytics",
      "To detect abuse or security issues",
      "To maintain donation transparency",
      "To personalize preferences like language settings"
    ]
  },
  {
    title: "Article 4 – Advertising and Ad Tracking",
    list: [
      "The app displays <strong>Google AdMob</strong> banner advertisements.",
      "Ads may be personalized or non-personalized depending on Google account settings.",
      "We do <strong>not</strong> collect extra data for ads.",
      "AdMob may process device info, interaction data, and approximate location.",
      `See <a class='text-[#d97b1a] underline' href='https://policies.google.com/technologies/ads' target='_blank'>Google’s policy</a>.`
    ]
  },
  {
    title: "Article 5 – Changes to Purpose of Use",
    text: "Any changes will be communicated through in-app notices or updates."
  },
  {
    title: "Article 6 – Retention Period",
    list: [
      "Personal data is retained while accounts remain active.",
      "Deletion requests are processed within <strong>30 days</strong>.",
      "Reports are anonymized after 30 days and stored indefinitely.",
      "Donation records may be anonymized for accounting."
    ]
  },
  {
    title: "Article 7 – Third-Party Disclosure",
    list: [
      "We do not sell or share data with third parties for marketing.",
      "Authentication is provided through Google.",
      "Payments are handled via <strong>bobaboba.me (AnyoneLab)</strong>."
    ]
  },
  {
    title: "Article 8 – User Rights: Access, Correction, and Deletion",
    list: [
      "Users may request data access or deletion.",
      "Login information must be updated through Google.",
      "Account deletion takes up to 30 days.",
      "Reports remain stored in anonymized form."
    ]
  },
  {
    title: "Article 9 – Data Suspension and Misuse",
    text: "Users may contact support if they believe their data has been misused."
  },
  {
    title: "Article 10 – Cookie and Local Storage",
    list: [
      "No browser cookies are used.",
      "Local storage is used for language and non-personal preferences."
    ]
  },
  {
    title: "Article 11 – Security Measures",
    text: "We use Supabase authentication and HTTPS encryption with restricted access to personal data."
  },
  {
    title: "Article 12 – International and Religious Considerations",
    text: `Disputes are first approached through Shariah principles of fairness, then governed by Taiwan law under
           Taipei District Court jurisdiction.`
  },
  {
    title: "Article 13 – Changes to this Policy",
    text: "Updates will be published in-app and take effect immediately."
  },
  {
    title: "Article 14 – Contact",
    text: `For privacy inquiries: halalformosa[@]gmail.com`
  }
]
</script>
