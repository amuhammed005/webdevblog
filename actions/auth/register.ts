"use server";

import { RegisterSchema, RegisterSchemaType } from "@/schemas/RegisterSchema";
import bcrypt from "bcryptjs";

export const SignUp = async (values: RegisterSchemaType) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  const {name, email, password} = validateFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  
  // Here you can add your logic to create a new user in the database
  // For example, you can use an ORM like Prisma or Mongoose to interact with your database

  // Example using Prisma:
  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword, // Store the hashed password in the database
    }
  })

  return { success: true };
};
