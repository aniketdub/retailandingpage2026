import rawBlogs from "../blogsData.json";
import { BlogPost } from "./types";

export * from "./types";

export const BLOG_POSTS: BlogPost[] = rawBlogs as BlogPost[];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getBlogCategories(): string[] {
  const categories = new Set(BLOG_POSTS.map((p) => p.category));
  return Array.from(categories);
}

export function getRelatedPosts(currentSlug: string, count: number = 3): BlogPost[] {
  const currentPost = getBlogPost(currentSlug);
  if (!currentPost) return BLOG_POSTS.slice(0, count);

  const sameCategory = BLOG_POSTS.filter(
    (p) => p.slug !== currentSlug && p.category === currentPost.category
  );
  const otherCategory = BLOG_POSTS.filter(
    (p) => p.slug !== currentSlug && p.category !== currentPost.category
  );

  return [...sameCategory, ...otherCategory].slice(0, count);
}
