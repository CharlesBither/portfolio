"use client";

import { useTheme } from "next-themes";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { Button } from "./button";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  if (theme === "dark") {
    return (
      <Button variant="ghost" size="icon-lg" onClick={() => setTheme("light")}>
        <MdOutlineDarkMode className="size-6" />
      </Button>
    );
  }
  return (
    <Button variant="ghost" size="icon-lg" onClick={() => setTheme("dark")}>
      <MdOutlineLightMode className="size-6" />
    </Button>
  );
}
