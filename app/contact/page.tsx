// app/contact/page.tsx

import { ContactHero } from "@/components/contact/ContactHero";
import { BookingCalendar } from "@/components/contact/BookingCalendar";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <BookingCalendar />
      <ContactForm />
    </main>
  );
}