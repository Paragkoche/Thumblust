"use server";
import { CSRcreateClient } from "@/lib/csr.supabase";
import { SSRcreateClient } from "@/lib/db-connection";

import { cookies } from "next/headers";

export const getData = async (name: string) =>
  CSRcreateClient().from("POST").select("*").eq("name", name).single();
export const getAllData = async () =>
  CSRcreateClient().from("POST").select("*");

export const getAllPostsSortedByView = async () => {
  const supabase = CSRcreateClient();

  const { data, error } = await supabase
    .from("POST")
    .select("*")
    .not("view", "is", null) // Optional: exclude posts with no view count
    .order("view", { ascending: false })
    .limit(4);

  return { data, error };
};

// Utility to get today as YYYY-MM-DD
const getToday = () => new Date().toISOString().split("T")[0];

export async function incrementPostView(postId: number) {
  const cookieStore = await cookies();
  const cookieName = "viewed_posts";
  const today = getToday();

  // Read cookie
  const viewed = cookieStore.get(cookieName)?.value;
  let viewedPosts: Record<string, string> = {};

  try {
    viewedPosts = viewed ? JSON.parse(viewed) : {};
  } catch {
    viewedPosts = {};
  }

  // Check if already viewed today
  if (viewedPosts[postId] === today) {
    return { message: "Already viewed today" };
  }

  // Increment view
  const supabase = await SSRcreateClient(); // this must be server-only
  const { error } = await supabase.rpc("increment_view", {
    post_id_input: postId,
  });

  if (error) {
    return { error: error.message };
  }

  // Update cookie
  viewedPosts[postId] = today;
  cookieStore.set(cookieName, JSON.stringify(viewedPosts), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  return { message: "View incremented" };
}
