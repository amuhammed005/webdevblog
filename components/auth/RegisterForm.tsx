"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormField from "../common/FormField";
import { RegisterSchema } from "@/schemas/RegisterSchema";
import type { RegisterSchemaType } from "@/schemas/RegisterSchema";
import Button from "../common/Button";
import Heading from "../common/Heading";
import SocialAuth from "./SocialAuth";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: RegisterSchemaType) => {
    console.log("Register Data>>", data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-[500px] w-full mx-auto mt-8 gap-2"
    >
      <Heading
        title="Create a WEBDEV.blog account"
        subtitle="Please fill in the form to create an account."
        center
        lg
      />
      <FormField
        id="name"
        register={register}
        errors={errors}
        label="Name"
        type="text"
        placeholder="Name"
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
      <FormField
        id="confirmPassword"
        register={register}
        errors={errors}
        label="Confirm Password"
        type="password"
        placeholder="Confirm Password"
      />
      <Button type="submit" label="Register" hoover />
      <div className="flex flex-col items-center justify-center my-2">Or</div>
      <SocialAuth />
    </form>
  );
};

export default RegisterForm;
