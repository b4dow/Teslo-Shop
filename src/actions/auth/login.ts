"use server";

import { signIn } from "@/auth.config";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirect: false,
    });

    return "Success";
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "CredentialsSignin") {
        return "Credenciales invalidas";
      }
      return "unknowError";
    }
  }
}

export async function login(email: string, password: string) {
  try {
    await signIn("credentials", { email, password });
    return {
      ok: true,
      message: "Usuario logueado",
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No se pudo iniciar sesión",
    };
  }
}
