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
      "<strong>Information is for reference only</strong> and may not always be accurate.",
      "Location accuracy depends on Google Maps and device GPS.",
      "Service is provided as a <strong>voluntary community project</strong> without commercial guarantees."
    ]
  },
  {
    title: "Article 3 – Voluntary Donations",
    list: [
      "Optional donation feature is available.",
      "Processed via <strong>bobaboba.me (AnyoneLab)</strong>.",
      "Donations are non-refundable and do not unlock features.",
      "Donation does not grant ownership or rights."
    ]
  },
  {
    title: "Article 4 – User Accounts",
    list: [
      "Some features require login.",
      "Users must protect their credentials.",
      "Unauthorized access may result in suspension.",
      "Account deletion requests must be emailed; processed in 30 days.",
      "Reports remain anonymized after deletion."
    ]
  },
  {
    title: "Article 5 – Data Submission and Reporting",
    list: [
      "Only admins/contributors can add product data.",
      "All users can submit halal reports.",
      "Reports are anonymized within 30 days.",
      "Contributor applications may be accepted or declined."
    ]
  },
  {
    title: "Article 6 – Intellectual Property",
    ordered: [
      {
        title: "Database & Reports",
        list: [
          "Database content belongs to R Creative.",
          "Contributors grant non-exclusive rights to use submissions."
        ]
      },
      {
        title: "Explore / Map Feature",
        list: [
          "Displays data from Google Maps and third parties.",
          "Map content cannot be reused without permission."
        ]
      }
    ]
  },
  {
    title: "Article 7 – Moderation",
    list: [
      "Reports may be reviewed for accuracy.",
      "Inaccurate reports may be removed.",
      "Honest mistakes carry no penalty."
    ]
  },
  {
    title: "Article 8 – Advertising",
    list: [
      "Google AdMob banners are displayed.",
      "We do not store additional data for ads.",
      "We do not control the content of third-party ads."
    ]
  },
  {
    title: "Article 9 – Prohibited Conduct",
    list: [
      "Submitting false data",
      "Unauthorized access attempts",
      "Uploading harmful content",
      "Misusing map reporting",
      "Commercial use without permission",
      "Scraping or automated crawling"
    ]
  },
  {
    title: "Article 10 – Modifications",
    list: [
      "Features may change without notice.",
      "Service availability is not guaranteed.",
      "Updated Terms become effective upon release."
    ]
  },
  {
    title: "Article 11 – Governing Law",
    list: [
      "Disputes first follow Shariah principles of fairness.",
      "If unresolved, disputes fall under Taiwan law (Taipei District Court)."
    ]
  },
  {
    title: "Article 12 – Contact",
    text: "Email: halalformosa[@]gmail.com"
  }
]
</script>
