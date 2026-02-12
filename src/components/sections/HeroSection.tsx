"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";

const words = ["Vielfalt", "in", "Bewegung"];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-warm-50 to-warm-100 dark:from-warm-900 dark:via-warm-900 dark:to-warm-800 px-6 py-20">
      {/* Dekorative Elemente mit Parallax */}
      <ParallaxLayer speed={0.2} className="pointer-events-none absolute inset-0">
        {/* Kreis oben links */}
        <div className="absolute left-[10%] top-[15%] h-32 w-32 rounded-full bg-brand-red/5 dark:bg-brand-red/10" />
        {/* Quadrat oben rechts */}
        <div className="absolute right-[12%] top-[20%] h-20 w-20 rotate-12 rounded-lg bg-brand-blue/5 dark:bg-brand-blue/10" />
        {/* Kreis unten rechts */}
        <div className="absolute bottom-[25%] right-[8%] h-48 w-48 rounded-full bg-brand-blue/5 dark:bg-brand-blue/10" />
      </ParallaxLayer>

      <ParallaxLayer speed={-0.15} className="pointer-events-none absolute inset-0">
        {/* Quadrat links mitte */}
        <div className="absolute bottom-[35%] left-[5%] h-16 w-16 -rotate-6 rounded-md bg-brand-red/5 dark:bg-brand-red/10" />
        {/* Kleiner Kreis mitte rechts */}
        <div className="absolute right-[20%] top-[40%] h-12 w-12 rounded-full bg-brand-red/8 dark:bg-brand-red/15" />
        {/* Grosser Kreis unten links */}
        <div className="absolute bottom-[15%] left-[15%] h-40 w-40 rounded-full bg-brand-blue/5 dark:bg-brand-blue/10" />
      </ParallaxLayer>

      {/* Inhalt */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Animiertes Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <Image
            src="/images/sprungtuch-logo.png"
            alt="Sprungtuch e.V. Logo"
            width={120}
            height={120}
            className="h-[120px] w-auto drop-shadow-lg"
            priority
          />
        </motion.div>

        {/* Headline mit Wort-fuer-Wort Stagger */}
        <h1 className="mb-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-5xl font-extrabold tracking-tight text-warm-800 dark:text-warm-200 sm:text-6xl lg:text-7xl">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={
                word === "Vielfalt"
                  ? "text-brand-red"
                  : word === "Bewegung"
                    ? "text-brand-blue"
                    : ""
              }
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Untertitel */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10 max-w-2xl text-lg leading-relaxed text-warm-600 dark:text-warm-400 sm:text-xl"
        >
          Seit 1989 begleiten wir Familien, Kinder und Menschen in Lübeck
          — mit Herz, Kompetenz und Respekt.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/fuer-familien"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:bg-red-600 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-0.5 dark:shadow-red-500/30 dark:hover:shadow-red-500/40"
          >
            Unsere Angebote
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-blue px-8 py-3.5 text-base font-semibold text-brand-blue transition-all duration-300 hover:bg-brand-blue hover:text-white hover:-translate-y-0.5 dark:border-brand-blue dark:text-brand-blue dark:hover:bg-brand-blue dark:hover:text-white"
          >
            Kontakt
          </Link>
        </motion.div>
      </div>

      {/* Scroll-Down Indikator — rein dekorativ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs font-medium text-warm-400 dark:text-warm-500">Scroll</span>
          <ChevronDown size={20} className="text-warm-400 dark:text-warm-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
