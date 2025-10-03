
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    
    if (savedTheme) {
      return savedTheme;
    }
    
    // Default to dark theme
    return 'dark';
  });

  useEffect(() => {
    // Update class on document element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save theme preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
};
