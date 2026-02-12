export interface ContactInfo {
  address: {
    street: string;
    zip: string;
    city: string;
  };
  phone: string;
  fax: string;
  email: string;
  hours: string;
}

export const contactInfo: ContactInfo = {
  address: {
    street: "Wahmstraße 43-45",
    zip: "23552",
    city: "Lübeck",
  },
  phone: "0451 7060434",
  fax: "0451 7020417",
  email: "info@sprungtuchev.de",
  hours: "Montag – Freitag, 9:00 – 16:00 Uhr",
};
