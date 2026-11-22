import { CONTACT } from "./site";

export type EnquiryField = { label: string; value: string };

/** Formats enquiry fields as plain lines, skipping empty values. */
export function formatEnquiry(title: string, fields: EnquiryField[]): string {
  const lines = fields
    .filter((f) => f.value.trim().length > 0)
    .map((f) => `${f.label}: ${f.value.trim()}`);
  return [title, "", ...lines].join("\n");
}

export function buildMailto(subject: string, body: string, to: string = CONTACT.email): string {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildWhatsApp(text: string, number: string = CONTACT.whatsapp): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
