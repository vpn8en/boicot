// 1. Import utilities from `astro:content`
import { ImageResult, MoneyV2Result, VariantResult } from '@utils/schemas';
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const productCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    category: z.string(),
    title: z.string(),
    name: z.string(),
    link: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    variants: z.array(VariantResult),
    tags: z.array(z.string()),
    publishDate: z.string().transform(str => new Date(str)),
    colors: z.array(z.string()),
    images: z.array(ImageResult),
    full_description: z.string(),
    price: MoneyV2Result,
    details: z.string(),
    rating: z.number(),
    reviews: z.number(),
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
  'products': productCollection
};