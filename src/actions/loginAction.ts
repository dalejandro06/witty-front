"use server";

import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import { EXTERNAL_API_BASE } from "@/config/config";

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

export const recoverPasswordAction = async (
  formData: FormData,
  token: string,
) => {
  try {
    await fetch(`${EXTERNAL_API_BASE}/v1/accounts/reset-password/`, {
      method: "PATCH",
      body: JSON.stringify({ password: formData.get("password") }),
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
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
