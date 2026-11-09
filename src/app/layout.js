import "./globals.css";
import CustomCursor from "@/components/common/CustomCursor";

export const metadata = {
  title: "Growoora — Creative Technology & Digital Growth Studio",
  description: "We build digital products, high-performance web applications, powerful brand identities, and measurable growth engines.",
  keywords: ["Digital Growth Agency", "Web Development", "App Development", "SEO", "Digital Marketing", "Branding", "UI UX Design", "Three.js Agency"],
  authors: [{ name: "Growoora Team" }],
  openGraph: {
    title: "Growoora — Digital Growth Studio",
    description: "We build. We market. We grow.",
    url: "https://growoora.com",
    siteName: "Growoora",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body 
        className="min-h-full flex flex-col font-sans bg-[#F8FAF7] text-[#111817] selection:bg-[#8FE63B] selection:text-[#111817]"
        suppressHydrationWarning
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
