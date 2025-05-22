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
        <VideoPlayer
          videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          poster="/poster.jpg"
          vastTagUrl="https://snarling-awareness.com/d/msFWzxd.GVNsvgZkGtUZ/beymh9/uOZ/ULlRkyPLTpY_z/N/zIQU0UN/DNU/tANyjYM/3kNaDiQB0/NJga" // Replace with your VAST URL
        />
      </div>
    );
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center p-7">
      <div
        className="relative w-full max-w-4xl aspect-video"
        dangerouslySetInnerHTML={{
          __html: data?.html ?? "",
        }}
      ></div>
    </div>
  );
}
