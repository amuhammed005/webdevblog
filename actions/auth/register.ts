"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/user";
import { RegisterSchema, RegisterSchemaType } from "@/schemas/RegisterSchema";
import bcrypt from "bcryptjs";

export const SignUp = async (values: RegisterSchemaType) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  const {name, email, password} = validateFields.data;

  const hashedPassword = await bcryptjs.hash(password, 10);


  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword, // Store the hashed password in the database
    }
  })

  return { success: true };
};
