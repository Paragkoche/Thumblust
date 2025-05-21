"use server";
import { CSRcreateClient } from "@/lib/csr.supabase";

export const getData = async (name: string) =>
  CSRcreateClient().from("POST").select("*").eq("name", name).single();
