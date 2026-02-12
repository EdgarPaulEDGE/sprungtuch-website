"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulierte Verarbeitung (kein echtes API)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center rounded-2xl border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20 p-12 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <CheckCircle2 size={32} className="text-green-600" aria-hidden="true" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-warm-800 dark:text-warm-200">
          Nachricht gesendet!
        </h3>
        <p className="max-w-md text-warm-600 dark:text-warm-400">
          Vielen Dank für Ihre Nachricht. Wir melden uns so schnell wie möglich
          bei Ihnen.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
          }}
          className="mt-6 text-sm font-medium text-brand-blue hover:underline"
        >
          Weitere Nachricht senden
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-warm-700 dark:text-warm-300"
        >
          Name <span aria-hidden="true" className="text-brand-red">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          aria-required="true"
          autoFocus
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ihr vollständiger Name"
          className="w-full rounded-xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-800 px-4 py-3 text-warm-800 dark:text-warm-100 placeholder:text-warm-400 dark:placeholder:text-warm-500 transition-colors duration-200 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
        />
      </div>

      {/* E-Mail */}
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-warm-700 dark:text-warm-300"
        >
          E-Mail <span aria-hidden="true" className="text-brand-red">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ihre.email@beispiel.de"
          className="w-full rounded-xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-800 px-4 py-3 text-warm-800 dark:text-warm-100 placeholder:text-warm-400 dark:placeholder:text-warm-500 transition-colors duration-200 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
        />
      </div>

      {/* Betreff */}
      <div>
        <label
          htmlFor="subject"
          className="mb-1.5 block text-sm font-medium text-warm-700 dark:text-warm-300"
        >
          Betreff <span aria-hidden="true" className="text-brand-red">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          aria-required="true"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-800 px-4 py-3 text-warm-800 dark:text-warm-100 transition-colors duration-200 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
        >
          <option value="">Bitte wählen...</option>
          <option value="allgemein">Allgemeine Anfrage</option>
          <option value="familienhilfe">Familienhilfe</option>
          <option value="kinder-jugend">Kinder- und Jugendarbeit</option>
          <option value="inklusion">Inklusion</option>
          <option value="bewerbung">Bewerbung / Karriere</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
      </div>

      {/* Nachricht */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-warm-700 dark:text-warm-300"
        >
          Nachricht <span aria-hidden="true" className="text-brand-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Wie können wir Ihnen helfen?"
          className="w-full resize-y rounded-xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-800 px-4 py-3 text-warm-800 dark:text-warm-100 placeholder:text-warm-400 dark:placeholder:text-warm-500 transition-colors duration-200 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
        />
      </div>

      {/* Absenden */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-red-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/20 disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden="true" />
              Wird gesendet...
            </>
          ) : (
            <>
              Nachricht senden
              <Send
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </>
          )}
        </button>
        {/* Screenreader-Ankuendigung fuer Ladezustand */}
        <span className="sr-only" role="status" aria-live="polite">
          {isSubmitting ? "Nachricht wird gesendet, bitte warten." : ""}
        </span>
      </div>
    </form>
  );
}
