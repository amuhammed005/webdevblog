"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../common/FormField";
import { LoginSchema } from "@/schemas/LoginSchema";
import type { LoginSchemaType } from "@/schemas/LoginSchema";
import Button from "../common/Button";
import Heading from "../common/Heading";
import SocialAuth from "./SocialAuth";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log("Login Data>>", data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full max-w-[500px] mx-auto mt-8 gap-2"
    >
      <Heading
        title="Login to WEBDEV.blog"
        subtitle="Please login to your account."
        center
        lg
      />
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
      <Button type="submit" label="Login" hoover />
      <div className="flex flex-col items-center justify-center my-2">Or</div>
      <SocialAuth />
    </form>
  );
};

export default LoginForm;
