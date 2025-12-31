<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20">
    <div class="max-w-3xl mx-auto px-6">

      <h1 class="text-4xl font-bold text-slate-900 mb-6 text-center">
        Terms of Service
      </h1>

      <p class="text-slate-600 mb-6 leading-relaxed">
        These Terms of Service (“Terms”) apply to the <strong>Halal Formosa</strong> mobile application.
        By using the Service, Users agree to be bound by these Terms.
      </p>

      <section v-for="section in sections" :key="section.title" class="mb-10">
        <h2 class="text-2xl font-semibold text-[#d97b1a] mb-3">{{ section.title }}</h2>

        <p v-if="section.text" class="text-slate-600 leading-relaxed mb-4">
          {{ section.text }}
        </p>

        <ul v-if="section.list" class="list-disc ml-6 space-y-2 text-slate-600">
          <li v-for="item in section.list" :key="item" v-html="item"></li>
        </ul>

        <ol v-if="section.ordered" class="list-decimal ml-6 space-y-4 text-slate-600">
          <li v-for="item in section.ordered" :key="item.title">
            <strong>{{ item.title }}</strong>
            <ul class="list-disc ml-6 mt-2 space-y-1" v-if="item.list">
              <li v-for="i in item.list" :key="i" v-html="i"></li>
            </ul>
          </li>
        </ol>
      </section>

      <p class="text-slate-500 italic mt-12 text-center">
        Effective Date: August 2025
      </p>
      <p class="text-slate-600 text-center mt-4">
        Service Name: <strong>Halal Formosa</strong><br/>
        Provider: <strong>R Creative</strong>
      </p>

    </div>
  </div>
</template>

<script setup>
const sections = [
  {
    title: "Article 1 – Acceptance of Terms",
    text: "Using the Service constitutes acceptance of these Terms."
  },

  {
    title: "Article 2 – Service Description and Disclaimer",
    list: [
      "Barcode scanning for halal status",
      "Ingredient analysis",
      "Halal status labeling",
      "User authentication",
      "Map exploration for halal-friendly locations",
      "Advertisements to support operations",
      "<strong>Halal Formosa is not an official halal certification authority</strong> and does not issue halal certificates.",
      "All halal-related information is provided <strong>for reference purposes only</strong> and must be independently verified by users with manufacturers, halal certification bodies, or qualified Islamic authorities.",
      "Ingredient analysis may use <strong>OCR-based text recognition</strong>. Detection accuracy depends on camera quality, image clarity, lighting, and packaging design.",
      "The Halal Formosa team will make reasonable and best-effort attempts to keep information up to date; however, users are advised to confirm information independently.",
      "Location accuracy depends on Google Maps and device GPS.",
      "Service is provided as a <strong>voluntary community project</strong> without commercial guarantees."
    ]
  },

  {
    title: "Article 3 – Voluntary Support",
    list: [
      "The Service provides an optional voluntary support feature.",
      "Support contributions are processed via <strong>bobaboba.me (AnyoneLab)</strong>.",
      "Support is used to maintain server infrastructure, operational costs, and ongoing development.",
      "Support contributions are non-refundable.",
      "Providing support does not unlock features or grant ownership, rights, or privileges."
    ]
  },

  {
    title: "Article 4 – Halal Formosa Pro Membership",
    list: [
      "Halal Formosa offers an optional paid monthly subscription known as <strong>Halal Formosa Pro</strong>.",
      "Halal Formosa Pro provides access to additional features not available in the free version.",
      "Payment for Halal Formosa Pro is currently available only through the Halal Formosa application and processed via authorized in-app payment platforms.",
      "Pricing details and descriptions of unlocked features are available on <strong>halalformosa.com</strong> and may be updated from time to time.",
      "Subscriptions are billed monthly and automatically renew unless canceled through the applicable platform.",
      "Users may cancel at any time; Pro access remains until the end of the billing period.",
      "Subscription fees are non-refundable except where required by applicable law or platform policy."
    ]
  },

  {
    title: "Article 5 – User Accounts",
    list: [
      "All users may create an account to access certain features.",
      "Users are responsible for maintaining the confidentiality of their account credentials.",
      "Halal Formosa Pro access is linked to the user account used to subscribe.",
      "Deleting an account does not pause, cancel, or refund any active subscription.",
      "Subscription cancellation must be handled through the applicable app store platform.",
      "Account deletion is not currently available through the application and must be requested via email.",
      "Deletion requests are processed within 30 days.",
      "Submitted reports remain anonymized after account deletion.",
      "Unauthorized access or misuse may result in suspension or termination."
    ]
  },

  {
    title: "Article 6 – Data Submission, Verification, and Reporting",
    list: [
      "All users may submit product or location data through the Service.",
      "Submitted data is subject to verification by administrators or approved contributors.",
      "Administrators and contributors may add, edit, and manage product and map-related data.",
      "All users may report inaccurate, outdated, or misleading product or map information.",
      "Reports are reviewed within <strong>2 × 24 hours</strong> on a best-effort basis.",
      "Contributor applications must be submitted via email to <strong>support[@]halalformosa.com</strong>.",
      "Contributor applications are reviewed within <strong>2 × 24 hours</strong>, and applicants are notified by email.",
      "Contributor status becomes effective only after official confirmation."
    ]
  },

  {
    title: "Article 7 – Intellectual Property",
    ordered: [
      {
        title: "Database and User Submissions",
        list: [
          "The Halal Formosa database and compiled content are the property of <strong>Halal Formosa</strong>.",
          "All submitted data becomes part of the Halal Formosa database.",
          "Database content may be shared by users and contributors for non-commercial, educational, or community purposes.",
          "By submitting data, users grant Halal Formosa a non-exclusive, royalty-free right to use and distribute the content.",
          "Commercial reuse, resale, or exploitation without written permission is strictly prohibited."
        ]
      },
      {
        title: "Explore and Map Features",
        list: [
          "Map data may include information from Google Maps and other third-party services.",
          "Screenshots and sharing are permitted for personal, educational, or community-sharing purposes only.",
          "Third-party content remains subject to the respective providers’ terms."
        ]
      }
    ]
  },

  {
    title: "Article 8 – Moderation",
    list: [
      "Submitted reports and data may be reviewed to ensure accuracy.",
      "Moderation is conducted by Halal Formosa administrators.",
      "Inaccurate or inappropriate content may be corrected or removed.",
      "Moderation reviews are handled within <strong>2 × 24 hours</strong> on a best-effort basis.",
      "Honest mistakes made in good faith will not result in penalties."
    ]
  },

  {
    title: "Article 9 – Advertising",
    list: [
      "Advertisements may be displayed in the free version to support server maintenance and development.",
      "Users subscribed to Halal Formosa Pro will not see advertisements.",
      "Advertising content is provided by third-party ad networks such as Google AdMob.",
      "Halal Formosa does not control third-party ad content and does not store additional personal data specifically for advertising."
    ]
  },

  {
    title: "Article 10 – Prohibited Conduct",
    list: [
      "Submitting false or misleading data",
      "Abusing the reporting system or submitting reports in bad faith",
      "Attempting unauthorized access to systems",
      "Uploading harmful or malicious content",
      "Misusing map or product reporting features",
      "Impersonating Halal Formosa administrators, contributors, or team members",
      "Circumventing or exploiting Halal Formosa Pro features",
      "Exploiting bugs or system errors",
      "Commercial use without permission",
      "Scraping or automated data extraction"
    ]
  },

  {
    title: "Article 11 – Modifications",
    list: [
      "Features and services may be modified or discontinued without notice.",
      "Service availability is not guaranteed.",
      "Updated Terms become effective upon release."
    ]
  },

  {
    title: "Article 12 – Governing Law",
    list: [
      "Disputes shall first follow Shariah principles of fairness.",
      "If unresolved, disputes fall under Taiwan law and the Taipei District Court."
    ]
  },

  {
    title: "Article 13 – Contact",
    text: "For questions, account-related requests, contributor applications, or other inquiries, please contact: support[@]halalformosa.com"
  }
]
</script>
