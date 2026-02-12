"use client";

import { useContext } from "react";
import { ThemeContext } from "@/components/providers/ThemeProvider";

/**
 * Hook zum Zugriff auf den aktuellen Theme-Zustand und die Toggle-Funktion.
 * Muss innerhalb eines ThemeProvider verwendet werden.
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme muss innerhalb eines <ThemeProvider> verwendet werden."
    );
  }

  return context;
}
