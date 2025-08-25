/**
 * Theme toggle component for switching between light and dark modes
 * Simplified version without system preference option
 */

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from './button';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="w-9 h-9 p-0 border-pink-300 dark:border-purple-600 hover:bg-pink-50 dark:hover:bg-purple-900/20 bg-transparent"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4 text-pink-600 dark:text-purple-400" />
      ) : (
        <Sun className="h-4 w-4 text-pink-600 dark:text-purple-400" />
      )}
    </Button>
  );
}
