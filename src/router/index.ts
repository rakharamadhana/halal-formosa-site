import { createRouter, createWebHistory } from "vue-router"

import Layout from "@/layouts/Layout.vue"
import Home from "@/pages/Home.vue"
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue"
import TermsOfService from "@/pages/TermsOfService.vue"
import About from "@/pages/About.vue"
import Contact from "@/pages/Contact.vue"
import FAQ from "@/pages/FAQ.vue";

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
                        description:
                            "Halal Formosa helps Muslims in Taiwan find halal food, scan ingredients, explore halal maps, and travel with confidence."
                    },
                },
                {
                    path: "about",
                    name: "About",
                    component: About,
                    meta: {
                        title: "About Halal Formosa - Muslim-Friendly Ecosystem in Taiwan",
                        description:
                            "Learn about Halal Formosa’s mission, vision, and team building a trusted halal information ecosystem for Muslims in Taiwan."
                    },
                },
                {
                    path: "contact",
                    name: "Contact",
                    component: Contact,
                    meta: {
                        title: "Contact Halal Formosa - Get in Touch",
                        description:
                            "Contact Halal Formosa for inquiries, collaborations, partnerships, or community support related to halal living in Taiwan."
                    },
                },
                {
                    path: "faq",
                    name: "FAQ",
                    component: FAQ,
                    meta: {
                        title: "FAQ - Halal Formosa",
                        description:
                            "Frequently asked questions about Halal Formosa, including halal products, halal restaurants, prayer places, and community contributions in Taiwan."
                    },
                },

                {
                    path: "privacy",
                    name: "Privacy",
                    component: PrivacyPolicy,
                    meta: {
                        title: "Privacy Policy - Halal Formosa",
                        description:
                            "Read Halal Formosa’s Privacy Policy explaining how user data is collected, used, protected, and managed."
                    },
                },
                {
                    path: "terms",
                    name: "Terms",
                    component: TermsOfService,
                    meta: {
                        title: "Terms of Service - Halal Formosa",
                        description:
                            "Review Halal Formosa’s Terms of Service governing the use of the halal map, ingredient scanner, and related services."
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

    const defaultDescription =
        "Halal Formosa is a Muslim-friendly platform in Taiwan for halal food discovery, ingredient scanning, and halal travel support."

    // Title
    document.title =
        typeof to.meta?.title === "string"
            ? to.meta.title
            : defaultTitle

    // Meta description
    const desc = document.querySelector('meta[name="description"]')
    if (desc) {
        desc.setAttribute(
            "content",
            typeof to.meta?.description === "string"
                ? to.meta.description
                : defaultDescription
        )
    }
})



export default router
