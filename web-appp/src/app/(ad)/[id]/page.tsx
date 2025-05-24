import { getData } from "@/utils/data-fetch";
import VideoPlayer from "../_components/video";
//ok <>
interface PageProps {
  params: Promise<{ id: string }>;
}
export default async function Home(props: PageProps) {
  const { id } = await props.params;

  const { data } = await getData(id);
  if (!data) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        NO DATa
      </div>
    );
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center p-7">
      <VideoPlayer
        videoSrc={
          "https://sh9f.biggsupndfun.sbs/v4/mf/kdbbed/index-f1-v1-a1.txt"
        }
        poster=""
        vastTagUrl=""
      />
    </div>
  );
}
