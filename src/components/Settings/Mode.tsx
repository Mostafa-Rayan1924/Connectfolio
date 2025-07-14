"use client";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const Mode = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <Button
        onClick={() => setTheme("light")}
        variant={"outline"}
        className={`flex ${
          theme === "light" && "border-primary"
        }    items-center gap-2`}>
        <span className="text-sm">Light</span>
        <Sun size={20} />
      </Button>
      <Button
        className={` ${theme == "system" && "border-primary"}    `}
        onClick={() => setTheme("system")}
        variant={"outline"}>
        System
      </Button>
      <Button
        onClick={() => setTheme("dark")}
        variant={"outline"}
        className={`flex ${
          theme == "dark" && "border-primary"
        }    items-center gap-2`}>
        <span className="text-sm">Dark</span>
        <Moon size={20} />
      </Button>
    </div>
  );
};

export default Mode;
