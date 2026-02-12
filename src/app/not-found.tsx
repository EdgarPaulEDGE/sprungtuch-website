"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-160px)] flex-col items-center justify-center px-4 py-20">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Image
          src="/images/sprungtuch-logo.png"
          alt="Sprungtuch e.V. Logo"
          width={80}
          height={80}
          className="h-20 w-auto"
        />
      </motion.div>

      {/* 404 Zahl */}
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-8xl font-extrabold text-brand-red sm:text-9xl"
      >
        404
      </motion.p>

      {/* Überschrift */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-4 text-2xl font-bold text-warm-800 sm:text-3xl"
      >
        Seite nicht gefunden
      </motion.h1>

      {/* Freundliche Nachricht */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-3 max-w-md text-center text-warm-600"
      >
        Die Seite, die Sie suchen, existiert leider nicht oder wurde verschoben.
        Kein Problem, wir bringen Sie zurück auf die richtige Spur!
      </motion.p>

      {/* Zurück-Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-red-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/20"
        >
          <ArrowLeft
            size={18}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Zur Startseite
        </Link>
      </motion.div>
    </div>
  );
}
