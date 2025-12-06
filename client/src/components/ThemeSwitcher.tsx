import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import { useEffect, useState } from "react";

export type Theme = "hello-kitty" | "kuromi" | "cinnamoroll";

interface ThemeSwitcherProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const themes: { id: Theme; name: string; color: string }[] = [
    { id: "hello-kitty", name: "Hello Kitty", color: "#FFB7C5" },
    { id: "kuromi", name: "Kuromi", color: "#A020F0" },
    { id: "cinnamoroll", name: "Cinnamoroll", color: "#B0E0E6" },
  ];

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-12 h-12 bg-white/50 backdrop-blur-md border-2 border-white/50 shadow-lg hover:bg-white/80 transition-all duration-300"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Palette className="w-6 h-6 text-foreground" />
          </motion.div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-white/80 backdrop-blur-xl border-white/50 rounded-2xl p-2">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            className="cursor-pointer rounded-xl focus:bg-primary/10 focus:text-primary transition-colors p-2 flex items-center gap-3"
          >
            <div
              className="w-4 h-4 rounded-full border border-black/10"
              style={{ backgroundColor: theme.color }}
            />
            <span className={`font-medium ${currentTheme === theme.id ? "text-primary" : "text-foreground/80"}`}>
              {theme.name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
