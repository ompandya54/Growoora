import PrintigoPrivacyPolicy from "@/components/legal/PrintigoPrivacyPolicy";

export const metadata = {
  title: "Privacy Policy for Printigo — Growoora",
  description:
    "Official Privacy Policy for Printigo mobile point-of-sale (POS) application by Growoora. Learn how we collect, use, and protect your data.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/printigo/privacy-policy",
  },
};

export default function Page() {
  return <PrintigoPrivacyPolicy />;
}

