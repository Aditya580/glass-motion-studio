import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/site";
import { buildWhatsApp } from "@/lib/enquiry";

export function WhatsAppFab() {
  return (
    <a
      href={buildWhatsApp("Hello RK Associate, I'd like to know more.", CONTACT.whatsapp)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with RK Associate on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 animate-pulse-ring items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
