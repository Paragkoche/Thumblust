import type { MetadataRoute } from "next";
import { getAllData } from "@/utils/data-fetch";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...((await getAllData()).data ?? []).map(
      (item) =>
        ({
          url: "/" + item.name,
          lastModified: new Date(item.created_at),
          changeFrequency: "daily",
          priority: 0.3,
        } as MetadataRoute.Sitemap[0])
    ),
  ];
}
