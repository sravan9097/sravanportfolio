import { useTheme } from "@/hooks/useTheme";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <input 
      type="checkbox" 
      className="theme-checkbox"
      checked={theme === 'light'}
      onChange={toggleTheme}
      aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
    />
  );
};

export default ThemeToggle;
