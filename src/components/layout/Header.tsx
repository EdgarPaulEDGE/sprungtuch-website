"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { mainNavigation } from "@/data/navigation";
import { useTheme } from "@/hooks/useTheme";

// Seiten mit dunklem Hero-Hintergrund (professional = blau, energetic = rot)
// Auf diesen Seiten muss die Header-Schrift weiss sein solange nicht gescrollt
const darkHeroRoutes = [
  "/fuer-schulen",
  "/kontakt",
  "/impressum",
  "/datenschutz",
  "/engagement",
  "/karriere",
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  // Ist die aktuelle Seite eine mit dunklem Hero?
  const hasDarkHero = darkHeroRoutes.includes(pathname);
  // Weisse Schrift nur wenn dunkler Hero UND noch nicht gescrollt
  const useWhiteText = hasDarkHero && !isScrolled;

  // Scroll-Erkennung fuer Header-Styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile Menu schliessen bei Seitenwechsel
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Body-Scroll sperren wenn Mobile Menu offen
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Focus Trap: Fokus im Mobile Menu halten wenn offen
  useEffect(() => {
    if (!isMobileMenuOpen || !mobileMenuRef.current) return;

    const menuEl = mobileMenuRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableElements = menuEl.querySelectorAll<HTMLElement>(focusableSelector);
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    // Fokus auf das erste Element im Menu setzen
    firstFocusable?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
        return;
      }

      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/80 dark:bg-warm-900/80 backdrop-blur-xl shadow-sm border-b border-warm-200/50 dark:border-warm-700/50"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo und Vereinsname */}
            <Link
              href="/"
              className="group flex items-center gap-3 transition-opacity hover:opacity-80"
              aria-label="Sprungtuch e.V. — Zur Startseite"
            >
              <Image
                src="/images/sprungtuch-logo.png"
                alt="Sprungtuch e.V. Logo"
                width={40}
                height={40}
                className="h-9 w-auto md:h-10"
                priority
              />
              <span
                className={cn(
                  "text-lg font-bold tracking-tight md:text-xl transition-colors",
                  useWhiteText
                    ? "text-white"
                    : "text-warm-800 dark:text-warm-100"
                )}
              >
                Sprungtuch
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? useWhiteText
                        ? "text-white"
                        : "text-brand-red dark:text-red-400"
                      : useWhiteText
                        ? "text-white/80 hover:text-white"
                        : "text-warm-600 hover:text-warm-800 dark:text-warm-400 dark:hover:text-warm-200"
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="activeNav"
                      className={cn(
                        "absolute bottom-0 left-3 right-3 h-0.5 rounded-full",
                        useWhiteText
                          ? "bg-white"
                          : "bg-brand-red dark:bg-red-400"
                      )}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Rechte Seite: Dark Mode Toggle + Mobile Menu Button */}
            <div className="flex items-center gap-2">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                  useWhiteText
                    ? "text-white/80 hover:bg-white/10 hover:text-white"
                    : "text-warm-500 hover:bg-warm-100 hover:text-warm-700 dark:text-warm-400 dark:hover:bg-warm-800 dark:hover:text-warm-200"
                )}
                aria-label={isDark ? "Helles Design aktivieren" : "Dunkles Design aktivieren"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="h-5 w-5" aria-hidden="true" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="h-5 w-5" aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* Mobile Menu Button */}
              <button
                ref={mobileMenuButtonRef}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden",
                  useWhiteText
                    ? "text-white/80 hover:bg-white/10 hover:text-white"
                    : "text-warm-500 hover:bg-warm-100 hover:text-warm-700 dark:text-warm-400 dark:hover:bg-warm-800 dark:hover:text-warm-200"
                )}
                aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu-panel"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="h-5 w-5" aria-hidden="true" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="h-5 w-5" aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Sheet-style Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Panel von rechts */}
            <motion.div
              ref={mobileMenuRef}
              id="mobile-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white dark:bg-warm-900 shadow-2xl lg:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Panel Header */}
                <div className="flex items-center justify-between border-b border-warm-200 dark:border-warm-700 px-6 py-4">
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Image
                      src="/images/sprungtuch-logo.png"
                      alt="Sprungtuch e.V. Logo"
                      width={32}
                      height={32}
                      className="h-8 w-auto"
                    />
                    <span className="text-lg font-bold text-warm-800 dark:text-warm-100">
                      Sprungtuch
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-warm-500 hover:bg-warm-100 dark:hover:bg-warm-800"
                    aria-label="Menü schließen"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile Navigation">
                  <ul className="space-y-1">
                    {mainNavigation.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.2 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center rounded-lg px-4 py-3 text-base font-medium transition-colors",
                            isActive(item.href)
                              ? "bg-red-50 text-brand-red dark:bg-red-900/20 dark:text-red-400"
                              : "text-warm-700 hover:bg-warm-100 dark:text-warm-300 dark:hover:bg-warm-800"
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Panel Footer */}
                <div className="border-t border-warm-200 dark:border-warm-700 px-6 py-4">
                  <p className="text-xs text-warm-500 dark:text-warm-400">
                    &copy; {new Date().getFullYear()} Sprungtuch e.V. Lübeck
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
