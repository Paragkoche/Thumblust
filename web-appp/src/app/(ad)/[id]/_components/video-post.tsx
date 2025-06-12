"use client";
import { Tables } from "@/types/database.types";
import { incrementPostView } from "@/utils/data-fetch";
import Link from "next/link";
import { useEffect } from "react";

const VideoPost = ({
  data,
  notShow,
}: {
  data: Tables<"POST">;
  notShow: number;
}) => {
  useEffect(() => {
    (async () => {
      await incrementPostView(notShow);
    })();
  }, []);

  if (data.id == notShow) return null;
  return (
    <div key={data.id} className="w-full  border border-black p-3.5">
      <Link href={`/${data.name}`} className="overflow-hidden">
        <img
          alt={data.name}
          src={data.poster!}
          className="w-full rounded-2xl select-none"
        />
      </Link>
      <p className="py-2.5">{data.name}</p>
    </div>
  );
};

export default VideoPost;
