import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const getResolvedTheme = (theme: "dark" | "light" | "system") => {
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return theme;
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = getResolvedTheme(theme) === "dark";

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative overflow-hidden group bg-transparent border-2 border-cyan-500/50 hover:border-cyan-500 transition-all duration-300"
        data-cursor="hover"
      >
        <motion.div
          initial={false}
          animate={{
            scale: !isDark ? 1 : 0,
            rotate: !isDark ? 0 : 180,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          ☀️
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : -180,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          🌙
        </motion.div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
