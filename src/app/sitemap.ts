import type { MetadataRoute } from "next";
import { pages } from "@/lib/catalog";
import { posts } from "@/lib/stories";
import { site } from "@/lib/site";
import { treatments } from "@/lib/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/tratamentos", "/unidades", "/quem-somos", "/depoimentos", "/blog", "/contato", "/privacidade"];

  return [
    ...paths.map((path) => ({
      url: `${site.url}${path || "/"}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...treatments.map((item) => ({
      url: `${site.url}/tratamentos/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...pages.map((page) => ({
      url: `${site.url}${page.path}`,
      changeFrequency: "monthly" as const,
      priority: page.path.includes("antes-e-depois") ? 0.8 : 0.6,
    })),
  ];
}
