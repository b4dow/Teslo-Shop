"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoInformationOutline } from "react-icons/io5";
import { z } from "zod";
import Link from "next/link";
import { clsx } from "clsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { login, RegisterUser } from "@/actions";
import { useState } from "react";

export const FormInputsSchema = z
  .object({
    name: z.string().min(1, { message: "Campo requerido" }),
    email: z.string().email({ message: "Correo inválido" }),
    password: z
      .string()
      .min(6, { message: "la password debe tener minimo 6 caracteres" }),
    confirmPassword: z
      .string()
      .min(6, { message: "la password debe tener minimo 6 caracteres" }),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type FormInputs = z.infer<typeof FormInputsSchema>;

export const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(FormInputsSchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = async (values) => {
    const { name, email, password } = values;

    // Server Action
    const resp = await RegisterUser(name, email, password);
    if (!resp.ok) {
      setErrorMessage(resp.message);
      reset();
      return;
    }
    console.log(resp);
    reset();

    await login(email.toLowerCase(), password);
    window.location.replace("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label htmlFor="email">Nombre Completo</label>
      <input
        className={clsx("px-5 py-2 border  bg-gray-200 rounded mb-5", {
          " border-red-500": errors.name,
        })}
        type="text"
        {...register("name")}
      />
      {errors.name && (
        <p className=" flex items-center justify-center gap-2 text-red-500 mb-3">
          <IoInformationOutline />
          {errors.name.message}
        </p>
      )}

      <label htmlFor="email">Correo electrónico</label>
      <input
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.email,
        })}
        type="email"
        {...register("email")}
      />
      {errors.email && (
        <p className="flex items-center justify-center gap-2 text-red-500 mb-3">
          <IoInformationOutline />
          {errors.email.message}
        </p>
      )}

      <label htmlFor="email">Contraseña</label>
      <input
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.password,
        })}
        type="password"
        {...register("password")}
      />
      {errors.password && (
        <p className="flex items-center justify-center gap-2 text-red-500 mb-3">
          <IoInformationOutline />
          {errors.password.message}
        </p>
      )}
      <label htmlFor="confirmPassword">Confirmar Contraseña</label>
      <input
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.confirmPassword,
        })}
        type="password"
        {...register("confirmPassword")}
      />
      {errors.confirmPassword && (
        <p className="flex items-center justify-center gap-2 text-red-500 mb-3">
          <IoInformationOutline />
          {errors.confirmPassword.message}
        </p>
      )}

      {errorMessage && (
        <p className="flex items-center justify-center gap-2 text-red-500 mb-3">
          <IoInformationOutline />
          {errorMessage}
        </p>
      )}

      <button type="submit" className="btn-primary">
        Registrarse
      </button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Ingresar
      </Link>
    </form>
  );
};
