"use client"

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const {theme, setTheme} = useTheme()

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log("theme>>", theme)
  return (
    <button onClick={handleToggleTheme}>
      <Sun className="hidden dark:block" />
      <Moon className="block dark:hidden" />
    </button>
  );
}

export default ThemeToggle