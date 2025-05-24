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
    <>
      <div id="container-925ad1a9a8835a3ec790b1e830984d7a"></div>
      <div className="w-screen h-fit flex justify-center items-center p-0 sm:p-7 flex-col border-2 my-10">
        <h1>
          Video here: <span className="font-semibold">{data.name}</span> 👇👇
        </h1>
        {/* <div
          className="hidden sm:block"
          id="container-925ad1a9a8835a3ec790b1e830984d7a"
        ></div> */}
        <VideoPlayer url={undefined} poster={data.poster || ""} />
        {/* <div
          className="hidden sm:block"
          id="container-e475dbcc4cd3ffa8564ed226b71c8947"
        ></div> */}
      </div>

      <div id="container-e475dbcc4cd3ffa8564ed226b71c8947"></div>
    </>
  );
}
