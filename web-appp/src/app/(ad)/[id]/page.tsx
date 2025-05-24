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
    <div className="w-screen h-fit flex justify-center items-center p-0 sm:p-7 flex-col">
      <div
        className="hidden sm:block"
        id="container-925ad1a9a8835a3ec790b1e830984d7a"
      ></div>
      <VideoPlayer url={data.url || ""} poster={data.poster || ""} />
      <div
        className="hidden sm:block"
        id="container-e475dbcc4cd3ffa8564ed226b71c8947"
      ></div>
    </div>
  );
}
