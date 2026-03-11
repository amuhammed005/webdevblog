import { cn } from "@/lib/utils";
import React from "react";
import { FieldErrors, Path, UseFormRegister, FieldValues } from "react-hook-form";


interface FormFieldProps<T extends FieldValues> {
  id: string;
  label?: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  inputClassNames?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

const FormField = <T extends FieldValues>({
  id,
  label,
  type,
  placeholder,
  disabled,
  inputClassNames,
  register,
  errors,
}: FormFieldProps<T>) => {
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
        {...register(id as Path<T>)}
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
