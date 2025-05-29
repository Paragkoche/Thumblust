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
    <Link href={"/" + data.name}>
      <div className="flex flex-col">
        <img className="aspect-square w-full" src={data.poster ?? ""} />
        <p>{data.name}</p>
      </div>
    </Link>
  );
};

export default VideoPost;
