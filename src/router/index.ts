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

    // Smooth + reliable scroll behavior
    scrollBehavior(to, _from, savedPosition) {
        // Restore scroll when using browser forward/back
        if (savedPosition) {
            return savedPosition
        }

        // If navigating to a hash (#features), scroll smoothly
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            }
        }

        // Default: scroll to top on every page navigation
        return { top: 0 }
    },
})

export default router
