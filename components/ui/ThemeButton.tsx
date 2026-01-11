"use client";

import { useTheme } from "next-themes";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  if (theme === "dark") {
    return <MdOutlineDarkMode onClick={() => setTheme("light")} />;
  }
  return <MdOutlineLightMode onClick={() => setTheme("dark")} />;
}
