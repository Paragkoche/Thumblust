import type { MetadataRoute } from "next";
import { getAllData } from "@/utils/data-fetch";
const URL = "https://thumblust.com";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: URL + "/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...((await getAllData()).data ?? []).map(
      (item) =>
        ({
          url: URL + "/" + item.name,
          lastModified: new Date(item.created_at),
          changeFrequency: "daily",
          priority: 0.3,
        } as MetadataRoute.Sitemap[0])
    ),
  ];
}
