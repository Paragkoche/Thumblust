import { CSRcreateClient } from "@/lib/csr.supabase";
import { getData } from "@/utils/data-fetch";

interface PageProps {
  params: Promise<{ id: string }>;
}
export default async function Home(props: PageProps) {
  const { id } = await props.params;

  const { data } = await getData(id);
  if (!data) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        No data
      </div>
    );
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className="relative w-full max-w-4xl aspect-video"
        dangerouslySetInnerHTML={{
          __html: data?.html!,
        }}
      ></div>
    </div>
  );
}
