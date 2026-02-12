import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconCircleProps {
  icon: LucideIcon;
  color?: "red" | "blue";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const colorStyles = {
  red: "bg-red-100 text-red-500",
  blue: "bg-blue-100 text-blue-500",
} as const;

const sizeStyles = {
  sm: { container: "h-10 w-10", icon: 18 },
  md: { container: "h-14 w-14", icon: 24 },
  lg: { container: "h-[72px] w-[72px]", icon: 32 },
} as const;

/**
 * Ein farbiger Kreis-Container fuer Lucide Icons,
 * angelehnt an den Kreis im Sprungtuch-Logo.
 */
export function IconCircle({
  icon: Icon,
  color = "red",
  size = "md",
  className,
}: IconCircleProps) {
  const { container, icon: iconSize } = sizeStyles[size];

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full shrink-0",
        colorStyles[color],
        container,
        className,
      )}
      aria-hidden="true"
    >
      <Icon size={iconSize} strokeWidth={1.8} />
    </div>
  );
}
