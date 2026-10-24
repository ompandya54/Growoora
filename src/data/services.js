export const servicesData = [
  {
    id: "01",
    title: "Web Development",
    subtitle: "High-performance web applications, interactive 3D platforms, and scalable frontends built with Next.js, React, and modern web tech.",
    badge: "CORE ENGINE",
    type: "web",
    tech: ["Next.js", "React", "Three.js", "WebGL", "TypeScript", "Tailwind CSS"],
    metrics: "Sub-100ms LCP • 99.9% Uptime",
    color: "#8FE63B",
    tagline: "Ultra-fast Next.js & 3D Interactive Platforms",
    liveStats: [
      { label: "Core Web Vitals", value: "100/100", sub: "Lighthouse Score" },
      { label: "TTFB Latency", value: "<65ms", sub: "Edge Distributed" },
      { label: "WebGL Engine", value: "60 FPS", sub: "GPU Accelerated" },
    ],
    codeSnippet: `// Growoora Next.js 3D Web Engine
const engine = await createWebPlatform({
  renderer: "WebGL",
  ssr: "EdgeDistributed",
  perfBudget: { LCP: "<100ms", FID: "0ms" }
});`,
    features: ["Custom 3D Shaders", "Zero Layout Shift", "Instant SSR Navigation"],
  },
  {
    id: "02",
    title: "App Development",
    subtitle: "Native and cross-platform iOS & Android apps designed for fluidity, speed, and real-time user engagement.",
    badge: "MOBILE STUDIO",
    type: "app",
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Node.js", "GraphQL"],
    metrics: "4.9★ Store Ratings • 60fps UX",
    color: "#20A85A",
    tagline: "Fluid iOS & Android Native Mobile Experiences",
    liveStats: [
      { label: "Frame Rate", value: "60 FPS", sub: "Smooth Gestures" },
      { label: "App Store Avg", value: "4.9 ★", sub: "Top Reviews" },
      { label: "Offline Sync", value: "100%", sub: "Instant DB Cache" },
    ],
    codeSnippet: `// Native Mobile Core Architecture
const app = new MobileAppPipeline({
  platforms: ["iOS", "Android"],
  haptics: "PhysicsResponsive",
  realtimeSync: true
});`,
    features: ["Native Swift/Kotlin Bridges", "Offline-first Cache", "Fluid Micro-gestures"],
  },
  {
    id: "03",
    title: "SEO & Growth",
    subtitle: "Technical SEO audits, semantic search optimization, and authority-building strategies that drive compounding organic traffic.",
    badge: "ORGANIC ENGINE",
    type: "seo",
    tech: ["Search Console", "Semrush", "Schema.org", "Core Web Vitals", "Ahrefs"],
    metrics: "+340% Organic Traffic • Rank #1",
    color: "#8FE63B",
    tagline: "Compounding Search Domination & Technical Audits",
    liveStats: [
      { label: "Organic Growth", value: "+340%", sub: "6-Month Compound" },
      { label: "Top 3 Rankings", value: "85%", sub: "Target Keywords" },
      { label: "Schema Coverage", value: "100%", sub: "Rich Entities" },
    ],
    codeSnippet: `// Programmatic Semantic SEO Pipeline
SEOEngine.auditSite({
  semanticClustering: true,
  entityGraph: "SchemaOrgV2",
  targetQueryRank: 1
});`,
    features: ["Semantic Entity Graphs", "Programmatic Landing Pages", "Sub-second CWV Fixes"],
  },
  {
    id: "04",
    title: "Digital Marketing",
    subtitle: "Data-driven performance campaigns, viral content pipelines, and conversion rate optimization tailored for ROI.",
    badge: "PERFORMANCE",
    type: "marketing",
    tech: ["Meta Ads", "Google Ads", "Analytics 4", "Conversion API", "Klaviyo"],
    metrics: "4.8x Average ROAS • Data-First",
    color: "#20A85A",
    tagline: "High-ROAS Paid Acquisition & Conversion Funnels",
    liveStats: [
      { label: "Average ROAS", value: "4.8x", sub: "Ad Spend Return" },
      { label: "Cost Per Acq", value: "-42%", sub: "Optimized CPA" },
      { label: "Tracking Level", value: "CAPI", sub: "Server-side Events" },
    ],
    codeSnippet: `// Algorithmic Growth Campaign Dispatch
AdEngine.launchFunnel({
  channels: ["Meta", "GoogleSearch", "TikTok"],
  creativeTesting: "MultiVariantAI",
  targetROAS: 4.8
});`,
    features: ["Server-Side CAPI Tracking", "Predictive Audience Bidding", "High-Converting Landers"],
  },
  {
    id: "05",
    title: "Branding & Identity",
    subtitle: "Distinct visual identity systems, motion graphics, and editorial brand design that elevate emerging market leaders.",
    badge: "CREATIVE DIRECTION",
    type: "branding",
    tech: ["Brand Systems", "Typography", "Motion Design", "3D Modeling", "Guidelines"],
    metrics: "Award-Winning • Iconic Assets",
    color: "#8FE63B",
    tagline: "Iconic Visual Systems & Motion Identity",
    liveStats: [
      { label: "Design System", value: "Full Spec", sub: "Tokens & Assets" },
      { label: "3D Motion Kit", value: "Included", sub: "Lottie & WebGL" },
      { label: "Typography Kit", value: "Custom", sub: "Editorial Hierarchy" },
    ],
    codeSnippet: `// Design Token & Brand Matrix Generator
const brand = generateBrandSystem({
  style: "NeoMinimalist-HighTech",
  palette: ["#111817", "#8FE63B", "#20A85A"],
  motionSpecs: "PhysicsSpring"
});`,
    features: ["Vector Logo Monograms", "Full Design Token System", "3D Interactive Brand Kit"],
  },
  {
    id: "06",
    title: "UI/UX Design",
    subtitle: "User-centric interface architecture, micro-interactions, and design systems crafted for effortless product exploration.",
    badge: "PRODUCT DESIGN",
    type: "uiux",
    tech: ["Figma", "Design Systems", "Prototyping", "User Research", "Usability"],
    metrics: "+45% Conversion • Zero Friction",
    color: "#20A85A",
    tagline: "Frictionless UI Architecture & Micro-Interactions",
    liveStats: [
      { label: "Conversion Lift", value: "+45%", sub: "A/B Validated" },
      { label: "Usability Score", value: "98/100", sub: "User Tested" },
      { label: "Prototype Stage", value: "Figma Pro", sub: "High Fidelity" },
    ],
    codeSnippet: `// User Interface Component Spec
DesignSystem.renderComponent({
  component: "HolographicModal",
  microInteractions: "FluidSpring",
  accessibility: "WCAG-AAA"
});`,
    features: ["Clickable Figma Prototypes", "Micro-Interaction Specs", "WCAG AAA Accessibility"],
  },
];
