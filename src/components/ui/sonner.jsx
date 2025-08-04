"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={{
        "--normal-bg": "#2563eb",       // Tailwind blue-600 hex
        "--normal-text": "#000000",     // black text
        "--normal-border": "#2563eb",   // blue-600 border
      }}
      {...props}
    />
  );
};

export { Toaster };
