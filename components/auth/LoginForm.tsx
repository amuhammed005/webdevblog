"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../common/FormField";
import { LoginSchema } from "@/schemas/LoginSchema";
import type { LoginSchemaType } from "@/schemas/LoginSchema";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm <LoginSchemaType>(
  {
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log("Login Data>>", data);
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-w-[500px] mx-auto mt-8 gap-2">
      <FormField
        id="email"
        register={register}
        errors={errors}
        label="Email"
        type="email"
        placeholder="Email"
      />
      <FormField
        id="password"
        register={register}
        errors={errors}
        label="Password"
        type="password"
        placeholder="Password"
      />
      <button type="submit" className="bg-blue-500 text-white p-3 rounded-sm hover:bg-blue-600 mt-2">Submit</button>
    </form>
  );
};

export default LoginForm;
