import { sanityClient, isSanityConfigured } from "./client";
import type { Service, ServiceDetail } from "@/data/services";
import type { TeamMember } from "@/data/team";
import type { Job } from "@/data/jobs";
import type { Partner } from "@/data/partners";
import type { Testimonial } from "@/data/testimonials";
import type { Stat } from "@/data/stats";
import type { TimelineEvent } from "@/data/timeline";
import type { ContactInfo } from "@/data/contact";

// Lokale Daten als Fallback (wenn Sanity noch nicht konfiguriert ist)
import {
  serviceAreas as localServiceAreas,
  familyServices as localFamilyServices,
  childrenServices as localChildrenServices,
  schoolServices as localSchoolServices,
  inclusionServices as localInclusionServices,
  engagementServices as localEngagementServices,
} from "@/data/services";
import {
  leadership as localLeadership,
  departments as localDepartments,
} from "@/data/team";
import {
  currentJobs as localJobs,
  benefits as localBenefits,
} from "@/data/jobs";
import {
  partners as localPartners,
  networks as localNetworks,
} from "@/data/partners";
import { testimonials as localTestimonials } from "@/data/testimonials";
import { impactStats as localStats } from "@/data/stats";
import { timelineEvents as localTimelineEvents } from "@/data/timeline";
import { contactInfo as localContactInfo } from "@/data/contact";

// Hilfsfunktion: Sanity abfragen oder lokale Daten verwenden
async function fetchOrFallback<T>(query: string, fallback: T, params?: Record<string, unknown>): Promise<T> {
  if (!isSanityConfigured || !sanityClient) {
    return fallback;
  }
  try {
    return await sanityClient.fetch(query, params);
  } catch {
    console.warn("[Sanity] Fetch fehlgeschlagen, verwende lokale Daten");
    return fallback;
  }
}

// ============================================================
// Angebotsbereiche (Homepage)
// ============================================================

export async function getServiceAreas(): Promise<Service[]> {
  return fetchOrFallback(
    `*[_type == "serviceArea"] | order(sortOrder asc) {
      "id": id.current, title, shortDescription, description, icon, href
    }`,
    localServiceAreas
  );
}

// ============================================================
// Detaillierte Angebote (nach Kategorie)
// ============================================================

const localServiceMap: Record<string, ServiceDetail[]> = {
  familien: localFamilyServices,
  kinder: localChildrenServices,
  schulen: localSchoolServices,
  inklusion: localInclusionServices,
  engagement: localEngagementServices,
};

async function getServiceDetailsByCategory(
  category: string
): Promise<ServiceDetail[]> {
  return fetchOrFallback(
    `*[_type == "serviceDetail" && category == $category] | order(sortOrder asc) {
      "id": id.current, title, description, details, icon, contactPerson, contactPhone, contactEmail
    }`,
    localServiceMap[category] || [],
    { category }
  );
}

export const getFamilyServices = () => getServiceDetailsByCategory("familien");
export const getChildrenServices = () => getServiceDetailsByCategory("kinder");
export const getSchoolServices = () => getServiceDetailsByCategory("schulen");
export const getInclusionServices = () => getServiceDetailsByCategory("inklusion");
export const getEngagementServices = () => getServiceDetailsByCategory("engagement");

// ============================================================
// Team
// ============================================================

export async function getTeamLeadership(): Promise<TeamMember[]> {
  return fetchOrFallback(
    `*[_type == "teamMember" && memberType == "leadership"] | order(sortOrder asc) {
      name, role, department, phone, email
    }`,
    localLeadership
  );
}

export async function getTeamDepartments(): Promise<TeamMember[]> {
  return fetchOrFallback(
    `*[_type == "teamMember" && memberType == "department"] | order(sortOrder asc) {
      name, role, department, phone, email
    }`,
    localDepartments
  );
}

// ============================================================
// Stellenangebote & Benefits
// ============================================================

export async function getCurrentJobs(): Promise<Job[]> {
  return fetchOrFallback(
    `*[_type == "job" && isActive == true] {
      "id": id.current, title, department, type, description, requirements
    }`,
    localJobs
  );
}

export async function getBenefits(): Promise<
  { title: string; description: string; icon: string }[]
> {
  return fetchOrFallback(
    `*[_type == "benefit"] | order(sortOrder asc) {
      title, description, icon
    }`,
    localBenefits
  );
}

// ============================================================
// Partner & Netzwerke
// ============================================================

export async function getPartners(): Promise<Partner[]> {
  return fetchOrFallback(
    `*[_type == "partner" && partnerType == "partner"] | order(sortOrder asc) {
      name, url
    }`,
    localPartners
  );
}

export async function getNetworks(): Promise<Partner[]> {
  return fetchOrFallback(
    `*[_type == "partner" && partnerType == "network"] | order(sortOrder asc) {
      name, url
    }`,
    localNetworks
  );
}

// ============================================================
// Testimonials
// ============================================================

export async function getTestimonials(): Promise<Testimonial[]> {
  return fetchOrFallback(
    `*[_type == "testimonial"] | order(sortOrder asc) {
      quote, author, context
    }`,
    localTestimonials
  );
}

// ============================================================
// Statistiken
// ============================================================

export async function getImpactStats(): Promise<Stat[]> {
  return fetchOrFallback(
    `*[_type == "stat"] | order(sortOrder asc) {
      value, suffix, prefix, label
    }`,
    localStats
  );
}

// ============================================================
// Timeline
// ============================================================

export async function getTimelineEvents(): Promise<TimelineEvent[]> {
  return fetchOrFallback(
    `*[_type == "timelineEvent"] | order(year asc) {
      year, title, description
    }`,
    localTimelineEvents
  );
}

// ============================================================
// Kontaktdaten (Singleton)
// ============================================================

export async function getContactInfo(): Promise<ContactInfo> {
  if (!isSanityConfigured || !sanityClient) {
    return localContactInfo;
  }
  try {
    const raw = await sanityClient.fetch(
      `*[_type == "contactInfo"][0] {
        street, zip, city, phone, fax, email, hours
      }`
    );
    if (!raw) return localContactInfo;
    return {
      address: { street: raw.street, zip: raw.zip, city: raw.city },
      phone: raw.phone,
      fax: raw.fax,
      email: raw.email,
      hours: raw.hours,
    };
  } catch {
    console.warn("[Sanity] ContactInfo fetch fehlgeschlagen, verwende lokale Daten");
    return localContactInfo;
  }
}
