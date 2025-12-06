import { ThemeSwitcher, type Theme } from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// Theme assets mapping
const themeAssets = {
  "hello-kitty": {
    bg: "/images/hello-kitty-bg-hd.png",
    card: "/images/hello-kitty-card-hd.jpg",
    title: "Hello Kitty",
    subtitle: "Let's be friends!",
    accentColor: "text-pink-500",
  },
  "kuromi": {
    bg: "/images/kuromi-bg-hd.jpg",
    card: "/images/kuromi-card-hd.jpg",
    title: "Kuromi",
    subtitle: "Cheeky but charming!",
    accentColor: "text-purple-500",
  },
  "cinnamoroll": {
    bg: "/images/cinnamoroll-bg-hd.png",
    card: "/images/cinnamoroll-card-hd.png",
    title: "Cinnamoroll",
    subtitle: "Flying high in the sky!",
    accentColor: "text-blue-400",
  },
};

export default function Home() {
  const [theme, setTheme] = useState<Theme>("hello-kitty");
  const [qq, setQq] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Apply theme to document root
  useEffect(() => {
    const root = document.documentElement;
    // Remove all theme attributes first
    root.removeAttribute("data-theme");
    
    // Apply new theme if not default
    if (theme !== "hello-kitty") {
      root.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const handleGo = () => {
    if (!qq.trim()) {
      toast.error("请输入QQ号哦~", {
        className: "rounded-2xl bg-white/90 backdrop-blur border-none shadow-lg font-medium",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate a small delay for better UX interaction
    setTimeout(() => {
      const url = `mqq://card/show_pslcard?src_type=internal&version=1&uin=${encodeURIComponent(
        qq.trim()
      )}&card_type=person&source=sharecard`;
      
      window.location.href = url;
      setIsLoading(false);
      toast.success("正在跳转到QQ名片...", {
        className: "rounded-2xl bg-white/90 backdrop-blur border-none shadow-lg font-medium",
      });
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleGo();
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans transition-colors duration-500">
      {/* Background Image with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
            style={{ backgroundImage: `url(${themeAssets[theme].bg})` }}
          />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
        
        {/* Theme Switcher */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
          <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <Card className="overflow-hidden border-white/40 bg-white/60 shadow-2xl backdrop-blur-xl rounded-[2rem]">
            <CardContent className="p-0">
              {/* Character Header Image */}
              <div className="relative h-48 w-full overflow-hidden bg-white/50 sm:h-56">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={theme}
                    src={themeAssets[theme].card}
                    alt={themeAssets[theme].title}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.1, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full object-cover object-center"
                  />
                </AnimatePresence>
                
                {/* Decorative Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                
                {/* Title Text */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <motion.h1 
                    key={`${theme}-title`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={`text-3xl font-bold tracking-tight ${themeAssets[theme].accentColor} drop-shadow-sm`}
                    style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
                  >
                    {themeAssets[theme].title}
                  </motion.h1>
                  <motion.p
                    key={`${theme}-subtitle`}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-sm font-medium text-gray-600"
                  >
                    {themeAssets[theme].subtitle}
                  </motion.p>
                </div>
              </div>

              {/* Input Section */}
              <div className="flex flex-col gap-6 p-8 pt-6">
                <div className="space-y-2 text-center">
                  <h2 className="text-2xl font-bold text-gray-700" style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}>
                    输入QQ号查看名片
                  </h2>
                  <p className="text-xs text-gray-500">
                    支持一键跳转到QQ资料卡页面
                  </p>
                </div>

                <div className="relative group">
                  <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/50 to-secondary/50 opacity-50 blur transition duration-500 group-hover:opacity-100`} />
                  <Input
                    type="number"
                    placeholder="在此输入QQ号码..."
                    value={qq}
                    onChange={(e) => setQq(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="relative h-14 rounded-2xl border-2 border-white/50 bg-white/80 px-6 text-center text-lg font-medium text-gray-800 placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary shadow-inner transition-all"
                  />
                </div>

                <Button
                  onClick={handleGo}
                  disabled={isLoading}
                  className="group relative h-14 w-full overflow-hidden rounded-2xl bg-primary text-lg font-bold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      "跳转中..."
                    ) : (
                      <>
                        立即跳转 <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </Button>

                {/* Footer Decoration */}
                <div className="flex justify-center gap-2 text-primary/40">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  <Sparkles className="h-3 w-3 animate-pulse delay-75" />
                  <Sparkles className="h-4 w-4 animate-pulse delay-150" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Footer Copyright */}
        <div className="absolute bottom-4 text-[10px] text-white/60 mix-blend-overlay">
          © 2025 QQ Card Theme. Designed with ❤️
        </div>
      </div>
    </div>
  );
}
