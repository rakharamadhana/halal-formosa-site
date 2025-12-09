import { createRouter, createWebHistory } from "vue-router"

import Layout from "@/layouts/Layout.vue"
import Home from "@/pages/Home.vue"
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue"
import TermsOfService from "@/pages/TermsOfService.vue"
import About from "@/pages/About.vue"
import Contact from "@/pages/Contact.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Layout,
            children: [
                { path: "", name: "Home", component: Home },
                { path: "privacy", name: "Privacy", component: PrivacyPolicy },
                { path: "terms", name: "Terms", component: TermsOfService },
                { path: "about", name: "About", component: About },
                { path: "contact", name: "Contact", component: Contact },
            ],
        },
    ],

    // 👇 THIS PART FIXES THE SCROLL ISSUE
    scrollBehavior(to, from, savedPosition) {
        // 1️⃣ If coming from browser back/forward → restore old position
        if (savedPosition) {
            return savedPosition
        }

        // 2️⃣ If the URL has a hash (#) → scroll to that section smoothly
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            }
        }

        // 3️⃣ Default: ALWAYS scroll to top when navigating pages
        return { top: 0, behavior: "smooth" }
    },
})

export default router
