import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const menu = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/menu" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            price: z.number(),
            category: reference("menuCategories"),
            img: image(),
        }),
});

const menuCategories = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/categories" }),
    schema: z.object({
        title: z.string(),
        order: z.number(),
    }),
});

// Pages
// Homepage (index)
const indexMeta = defineCollection({
    loader: glob({ pattern: "title_description.md", base: "./src/content/pages/index" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
    }),
});

const indexHero = defineCollection({
    loader: glob({ pattern: "hero.md", base: "./src/content/pages/index" }),
    schema: ({ image }) =>
        z.object({
            img: image(),
            title: z.string(),
        }),
});

const indexAbout = defineCollection({
    loader: glob({ pattern: "about.md", base: "./src/content/pages/index" }),
    schema: z.object({
        title: z.string(),
        secondary_title: z.string(),
    }),
});

const indexRecommendations = defineCollection({
    loader: glob({ pattern: "recommendations.md", base: "./src/content/pages/index" }),
    schema: z.object({
        title: z.string(),
        secondary_title: z.string(),
        selected_dishes: z.array(reference("menu")),
    }),
});

const indexReviews = defineCollection({
    loader: glob({ pattern: "reviews.md", base: "./src/content/pages/index" }),
    schema: z.object({
        title: z.string(),
        secondary_title: z.string(),
    }),
});

// Other pages
const privacyPolicyPage = defineCollection({
    loader: glob({ pattern: "privacy_policy.md", base: "./src/content/pages" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        last_updated: z.date(),
    }),
});

const reviewsPage = defineCollection({
    loader: glob({ pattern: "reviews.md", base: "./src/content/pages" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        secondary_heading: z.string(),
        heading: z.string(),
    }),
});

const menuPage = defineCollection({
    loader: glob({ pattern: "menu.md", base: "./src/content/pages" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        secondary_heading: z.string(),
        heading: z.string(),
    }),
});

// Footer
const footerData = defineCollection({
    loader: glob({ pattern: "footer.md", base: "./src/content" }),
    schema: ({ image }) =>
        z.object({
            img: image(),
            title: z.string(),
            contact: z.object({
                title: z.string(),
                phone: z.string(),
                email: z.string(),
                socials: z.array(z.object({ icon: image(), url: z.string(), title: z.string() })),
            }),
            opening_hours: z.object({
                title: z.string(),
                opening_hours: z.object({
                    monday: z.string(),
                    tuesday: z.string(),
                    wednesday: z.string(),
                    thursday: z.string(),
                    friday: z.string(),
                    saturday: z.string(),
                    sunday: z.string(),
                }),
            }),
        }),
});

export const collections = {
    menu,
    menuCategories,
    footerData,
    indexMeta,
    indexHero,
    indexAbout,
    indexRecommendations,
    indexReviews,
    privacyPolicyPage,
    reviewsPage,
    menuPage,
};
