import { cn } from "@/lib/utils";
import React from "react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

interface LoginValues {
  email: string;
  password: string;
  // confirmPassword: string;
}

interface FormFieldProps {
  id: string;
  label?: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  inputClassNames?: string;
  register: UseFormRegister<LoginValues>;
  errors: FieldErrors;
  //   name: string;
  //   value: string;
  //   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField = ({
  id,
  label,
  type,
  placeholder,
  disabled,
  inputClassNames,
  register,
  errors,
}: FormFieldProps) => {
  const message = errors[id] ? (errors[id]?.message as string) : null;

  return (
    <div>
      {label && (
        <span className="block text-lg font-bold">
          {label}
        </span>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(id as Path<LoginValues>)}
        className={cn(
          "w-full p-3 my-2 outline-none disabled:opacity-70 disabled:cursor-not-allowed border border-slate-300 rounded-sm dark:border-slate-700",
          errors[id] && "border-rose-400",
          inputClassNames,
        )}
      />
      {message && <span className="text-sm text-rose-400">{message}</span>}
    </div>
  );
};

export default FormField;
