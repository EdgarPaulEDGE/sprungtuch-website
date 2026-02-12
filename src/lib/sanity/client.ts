import { createClient, type SanityClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

// Prüfe ob eine gültige Sanity Project ID konfiguriert ist
export const isSanityConfigured =
  !!projectId && /^[a-z0-9-]+$/.test(projectId);

// Client nur erstellen wenn konfiguriert, sonst null
export const sanityClient: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;
