"use server";
import { getAllPostsSortedByView, getData } from "@/utils/data-fetch";
import VideoPlayer from "../_components/video";
import VideoPost from "./_components/video-post";
import Billboard from "@/components/ads/juicy_ads/banner/billboard";
import VideoAd from "@/components/ads/juicy_ads/specialFormats/video";

//ok <>
interface PageProps {
  params: Promise<{ id: string }>;
}
export default async function Home(props: PageProps) {
  const { id } = await props.params;

  const { data } = await getData(id);

  if (!data) {
    return (
      <div className="w-screen h-[calc(100vh-12rem)] flex justify-center items-center">
        NO DATa
      </div>
    );
  }

  const { data: db } = await getAllPostsSortedByView();
  const modifiedDb: any[] = [...(db || [])];
  const randomIndex = Math.floor(Math.random() * (modifiedDb.length + 1));
  modifiedDb.splice(randomIndex, 0, {
    type: "ad",
  });
  return (
    <main className="w-full h-auto px-5 lg:px-[150px] py-2.5">
      <div className="py-2.5">
        <Billboard />
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-3">
        <div className="w-full lg:w-8/12  flex gap-1.5 flex-col">
          <VideoPlayer
            poster={data.poster || undefined}
            url={data.url || undefined}
          />
          <div className="border-b border-b-black py-2.5 px-2">{data.name}</div>
          <div className="my-2.5">
            <Billboard />
          </div>
        </div>

        <div className="mt-2.5 lg:w-4/12">
          <h1>More videos</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {modifiedDb.map((v, i) =>
              v.type === "ad" ? (
                <VideoAd key={`ad-${i}`} />
              ) : (
                <VideoPost data={v} notShow={data.id} key={v.id || i} />
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
