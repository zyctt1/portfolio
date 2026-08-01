export const portfolio = {
  person: {
    name: "Artur Stryzhak",
    firstName: "Artur",
    lastName: "Stryzhak",
    role: "Creative developer and digital designer",
    statement: "I turn ambitious ideas into digital experiences people remember.",
    location: "Perth, Australia",
    availability: "Available for select projects",
    aboutHeadline: "Curious about the idea. Exacting about the details.",
    about: [
      "I work where design, technology and commercial purpose meet—shaping identities and digital experiences from the first useful question to the final line of code.",
      "My approach is direct: find what makes the project matter, build a clear creative system around it, and refine until nothing feels accidental.",
    ],
  },
  contact: {
    // Replace these placeholders before deployment.
    email: "hello@example.com",
    socials: [
      { label: "LinkedIn — placeholder", href: "https://www.linkedin.com" },
      { label: "Instagram — placeholder", href: "https://www.instagram.com" },
      { label: "Behance — placeholder", href: "https://www.behance.net" },
    ],
  },
  projects: [
    {
      index: "01",
      title: "ATARprepAI",
      industry: "Education technology",
      role: "Product design & full-stack development",
      year: "2026",
      challenge: "Turn dense ATAR study material into fast, repeatable active recall without hours of manual setup.",
      outcome: "A Duolingo × Quizlet-style exam-prep app that generates flashcards and quizzes, tracks progress, and keeps students moving with Avi, its robot mascot.",
      disclaimer: "Independent product",
      visual: "atarprepai",
      href: "https://atarprepai.vercel.app/app",
      linkLabel: "Open ATARprepAI",
    },
    {
      index: "02",
      title: "Forge",
      industry: "Personal development & fitness",
      role: "Product strategy, UX & frontend development",
      year: "2026",
      challenge: "Make habit and gym tracking feel motivating, human, and fast instead of like maintaining a spreadsheet.",
      outcome: "A mobile-first, offline-capable platform combining habits, dopamine tracking, gym progress, journaling, analytics, and a private on-device AI coach.",
      disclaimer: "Independent product",
      visual: "forge",
      href: null,
      linkLabel: null,
    },
  ] as const,
  capabilities: [
    ["Creative direction", "Finding the idea that makes everything else feel inevitable."],
    ["Brand systems", "Building identities that stay coherent while they move and grow."],
    ["Web design", "Turning information into pace, hierarchy and memorable moments."],
    ["Frontend development", "Bringing the design to life with precise, resilient code."],
    ["Motion & interaction", "Using movement to explain, reward and create rhythm."],
    ["Digital strategy", "Connecting creative decisions to a clear commercial purpose."],
  ],
  process: [
    ["Discover", "Understand the people, tension and opportunity behind the brief."],
    ["Define", "Turn research into a sharp creative position and a clear system."],
    ["Design", "Prototype the defining moments, then refine every supporting detail."],
    ["Deliver", "Build, test and tune until the experience feels effortless."],
  ],
  testimonial: {
    quote: "Artur found the sharpest version of the idea—and made every detail serve it.",
    attribution: "Placeholder testimonial — replace with a verified client quote",
  },
} as const;

export type Project = (typeof portfolio.projects)[number];
