import { defineCollection, defineConfig, s } from "velite";

const posts = defineCollection({
  name: "posts",
  pattern: "content/posts/**/*.mdx",
  schema: s.object({
    title: s.string(),
    date: s.string(),
    tags: s.array(s.string()).default([]),
    summary: s.string().optional(),
    cover: s.string().optional(),
    draft: s.boolean().default(false),
  }),
});

export default defineConfig({
  output: {
    data: ".velite",          
    assets: "public/static", 
    base: "/static/",         
  },
  collections: { posts },
});
