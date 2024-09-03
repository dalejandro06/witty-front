"use server";

import { AuthError } from "next-auth";

import { signIn } from "@/auth";

export const loginAction = async (formData: FormData) => {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    return { success: true };
  } catch (error) {
    // El mensaje de error viene desde authOptions
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message };
    }

    return { error: "Error 500" };
  }
};
