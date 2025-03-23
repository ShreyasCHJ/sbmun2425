import type { Metadata } from "next"

const baseMetadata: Metadata = {
  title: "South Bay Model United Nations (SBMUN IX)",
  description:
    "Change the World, One Resolution at a Time. Join us on April 5, 2025 at Monta Vista High School for SBMUN IX.",
  keywords: ["Model UN", "SBMUN", "South Bay", "MUN", "Conference", "High School", "Debate", "Diplomacy"],
  authors: [{ name: "SBMUN Organizing Committee" }],
  creator: "SBMUN",
  publisher: "SBMUN",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sbmun.org",
    title: "South Bay Model United Nations (SBMUN IX)",
    description:
      "Change the World, One Resolution at a Time. Join us on April 5, 2025 at Monta Vista High School for SBMUN IX.",
    siteName: "SBMUN IX",
    images: [
      {
        url: "/images/monta-vista-aerial.jpeg",
        width: 1200,
        height: 630,
        alt: "SBMUN IX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "South Bay Model United Nations (SBMUN IX)",
    description:
      "Change the World, One Resolution at a Time. Join us on April 5, 2025 at Monta Vista High School for SBMUN IX.",
    images: ["/images/monta-vista-aerial.jpeg"],
  },
}

export default baseMetadata

