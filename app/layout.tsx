import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://bs-diag.fr"),

  title: {
    default: "BS Diag | Diagnostic immobilier à Rouen",
    template: "%s | BS Diag",
  },

  description:
    "BS Diag vous accompagne dans vos diagnostics immobiliers à Rouen, en Seine-Maritime et dans l'Eure.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "BS Diag",
    title: "BS Diag | Diagnostic immobilier à Rouen",
    description:
      "Diagnostics immobiliers pour la vente, la location et les travaux.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
  );
}