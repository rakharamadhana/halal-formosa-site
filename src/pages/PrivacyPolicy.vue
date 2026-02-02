<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20">
    <div class="max-w-3xl mx-auto px-6">

      <!-- Title -->
      <h1 class="text-4xl font-bold text-slate-900 mb-6 text-center">
        Privacy Policy
      </h1>

      <p class="text-slate-600 mb-6 leading-relaxed">
        This Privacy Policy ("Policy") explains how <strong>YiQi Global Consulting (藝啟文創行銷有限公司)</strong>
        ("we", "our", or "us") handles personal and non-personal information collected through the
        <strong>Halal Formosa</strong> mobile application ("Service"), which it publishes and operates in Taiwan.
        By using the Service, you agree to the collection, storage, and use of information in accordance
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
        Effective Date: August 2025<br />
        Last Updated: February 2026
      </p>


    </div>
  </div>
</template>

<script setup>
const sections = [
  {
    title: "Article 1 – Definition of Personal Information",
    text: "“Personal information” refers to identifiable data such as your Google account email address, display name, and profile image collected during authentication. Other application usage information may be stored in anonymized or aggregated form."
  },
  {
    title: "Article 2 – Methods of Collecting Personal Information",
    list: [
      "When you sign in using Google, we collect your email address, display name, and profile image.",
      "We collect identifiable and anonymized activity and interaction logs associated with user accounts for monitoring, maintenance, security, analysis, and service improvement purposes.",
      "Map usage collects approximate device location to display nearby halal-friendly locations.",
      "Donation-related information is stored only as transaction metadata; no payment card data is stored by Halal Formosa."
    ]
  },
  {
    title: "Article 3 – Purpose of Use",
    list: [
      "To authenticate users and enable access to Service features",
      "To provide location-based Explore and Map functionality",
      "To monitor system performance and improve the Service",
      "To detect, prevent, and address abuse, misuse, or security issues",
      "To maintain transparency and records related to voluntary support contributions",
      "To store user preferences such as language and basic application settings"
    ]
  },
  {
    title: "Article 4 – Advertising and Ad Tracking",
    list: [
      "The Service displays Google AdMob banner advertisements in the free version only.",
      "Advertisements are used to support server maintenance and ongoing development of Halal Formosa.",
      "Users subscribed to Halal Formosa Pro will not see advertisements.",
      "Ads may be personalized or non-personalized depending on settings managed by Google.",
      "Halal Formosa does not collect additional personal data specifically for advertising purposes.",
      "Google AdMob may process device information, interaction data, and approximate location in accordance with its own policies.",
      "<a class='text-[#d97b1a] underline' href='https://policies.google.com/technologies/ads' target='_blank'>Google’s Advertising Policy</a>"
    ]
  },
  {
    title: "Article 5 – Changes to Purpose of Use",
    text: "Any changes to the purpose of data use will be communicated through in-app notices, updates to this Privacy Policy, or publication on the official Halal Formosa website. Continued use of the Service after such updates constitutes acceptance of the revised purposes."
  },
  {
    title: "Article 6 – Retention Period",
    list: [
      "Personal data is retained while user accounts remain active.",
      "Account deletion requests are processed within 30 days.",
      "User-submitted reports are anonymized after 30 days and may be retained indefinitely.",
      "Donation records may be anonymized and retained for accounting and transparency purposes."
    ]
  },
  {
    title: "Article 7 – Third-Party Disclosure",
    list: [
      "Halal Formosa does not sell or share personal data with third parties for marketing purposes.",
      "User authentication is provided through Google services.",
      "Voluntary support contributions are processed via bobaboba.me (AnyoneLab).",
      "Payments for Halal Formosa Pro subscriptions are processed by the respective app store platform, and Halal Formosa does not store or process payment card information."
    ]
  },
  {
    title: "Article 8 – User Rights: Access, Correction, and Deletion",
    list: [
      "Users may request access to, correction of, or deletion of their personal data by contacting support[@]halalformosa.com.",
      "Login information associated with Google accounts must be managed directly through Google account settings.",
      "Account deletion requests are processed within 30 days.",
      "User-submitted reports remain stored in anonymized form after account deletion."
    ]
  },
  {
    title: "Article 9 – Data Suspension and Misuse",
    text: "Users who believe their personal data has been misused or improperly handled may contact the Halal Formosa team, operated by YiQi Global Consulting, at support[@]halalformosa.com for review and assistance."
  },
  {
    title: "Article 10 – Cookie and Local Storage",
    list: [
      "The Service does not use browser cookies.",
      "Local storage may be used to store non-personal preferences and technical data (such as language settings or cached configurations) to load services faster and improve performance."
    ]
  },
  {
    title: "Article 11 – Security Measures",
    text: "Halal Formosa uses Supabase authentication, HTTPS encryption, and restricted access controls to protect personal data."
  },
  {
    title: "Article 12 – International and Religious Considerations",
    text: "Disputes are first approached through Shariah principles of fairness. If unresolved, matters are governed by Taiwan law under the jurisdiction of the Taipei District Court."
  },
  {
    title: "Article 13 – Changes to this Policy",
    text: "Updates to this Privacy Policy will be published within the application and reflected by the 'Last Updated' date shown above. Changes take effect immediately."
  },
  {
    title: "Article 14 – Contact",
    text: "For privacy-related inquiries or requests, please contact: support[@]halalformosa.com"
  }
]
</script>
