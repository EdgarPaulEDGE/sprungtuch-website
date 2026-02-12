"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
  size?: number;
  animate?: boolean;
  className?: string;
}

export function AnimatedLogo({
  size = 48,
  animate = true,
  className,
}: AnimatedLogoProps) {
  // Proportionen basierend auf der Gesamtgroesse
  const padding = size * 0.08;
  const rectSize = size - padding * 2;
  const centerX = size / 2;
  const centerY = size / 2;
  const ringRadius = size * 0.28;
  const ringStroke = size * 0.04;
  const circleRadius = size * 0.18;

  if (!animate) {
    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        className={cn("shrink-0", className)}
        role="img"
        aria-label="Sprungtuch e.V. Logo"
      >
        <title>Sprungtuch e.V. Logo</title>
        <rect
          x={padding}
          y={padding}
          width={rectSize}
          height={rectSize}
          rx={size * 0.1}
          fill="#0273B5"
        />
        <circle
          cx={centerX}
          cy={centerY}
          r={ringRadius}
          stroke="white"
          strokeWidth={ringStroke}
          fill="none"
        />
        <circle cx={centerX} cy={centerY} r={circleRadius} fill="#E21E48" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      className={cn("shrink-0", className)}
      role="img"
      aria-label="Sprungtuch e.V. Logo"
    >
      <title>Sprungtuch e.V. Logo</title>
      {/* Blaues Rechteck — fadet leicht vor dem Kreis ein */}
      <motion.rect
        x={padding}
        y={padding}
        width={rectSize}
        height={rectSize}
        rx={size * 0.1}
        fill="#0273B5"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={{ transformOrigin: "center center" }}
      />

      {/* Weisser Ring — fadet zusammen mit dem Rechteck ein */}
      <motion.circle
        cx={centerX}
        cy={centerY}
        r={ringRadius}
        stroke="white"
        strokeWidth={ringStroke}
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.15,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />

      {/* Roter Kreis — springt mit Bounce-Effekt wie ein Trampolin */}
      <motion.circle
        cx={centerX}
        cy={centerY}
        r={circleRadius}
        fill="#E21E48"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 12,
          mass: 0.8,
          delay: 0.25,
        }}
        style={{ transformOrigin: `${centerX}px ${centerY}px` }}
      />
    </svg>
  );
}
