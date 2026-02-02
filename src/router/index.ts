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
                {
                    path: "",
                    name: "Home",
                    component: Home,
                    meta: {
                        title: "Halal Formosa - Halal Map & Ingredient Scanner in Taiwan",
                    },
                },
                {
                    path: "about",
                    name: "About",
                    component: About,
                    meta: {
                        title: "About Halal Formosa - Muslim-Friendly Ecosystem in Taiwan",
                    },
                },
                {
                    path: "contact",
                    name: "Contact",
                    component: Contact,
                    meta: {
                        title: "Contact Halal Formosa - Get in Touch",
                    },
                },
                {
                    path: "privacy",
                    name: "Privacy",
                    component: PrivacyPolicy,
                    meta: {
                        title: "Privacy Policy - Halal Formosa",
                    },
                },
                {
                    path: "terms",
                    name: "Terms",
                    component: TermsOfService,
                    meta: {
                        title: "Terms of Service - Halal Formosa",
                    },
                },
            ],
        },
    ],

    scrollBehavior(to, _from, savedPosition) {
        if (savedPosition) return savedPosition
        if (to.hash) {
            return { el: to.hash, behavior: "smooth" }
        }
        return { top: 0 }
    },
})

router.afterEach((to) => {
    const defaultTitle =
        "Halal Formosa - Halal Map & Ingredient Scanner in Taiwan"

    document.title = (to.meta?.title as string) || defaultTitle
})


export default router
