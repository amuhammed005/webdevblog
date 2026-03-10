import { cn } from "@/lib/utils";
import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  label: string;
  disabled?: boolean;
  outlined?: boolean;
  small?: boolean;
  hoover?: boolean;
  icon?: IconType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button = ({
  type,
  label,
  disabled,
  outlined,
  small,
  hoover,
  icon: Icon,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-2 px-5 py-3 my-2 w-auto bg-slate-700 border-2 border-slate-300 text-white font-semibold dark:border-slate-700 rounded-sm transition-colors disabled:opacity-70 disabled:cursor-not-allowed",
        outlined && "bg-transparent text-slate-700 dark:text-slate-300 dark:bg-transparent",
        small && "text-sm px-2 py-1 border-[1px]",
        hoover && "hover:bg-slate-600 hover:text-white dark:",
        className && className,
      )}
    >
      {Icon && <Icon size={20} />}
      {label}
    </button>
  );
};

export default Button;
