"use server";
import { signOut } from "@/auth.config";

export const Logout = async () => {
  await signOut();
};
