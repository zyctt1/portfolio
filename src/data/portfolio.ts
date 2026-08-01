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
  websiteDemos: [
    {
      title: "Apex Ridge Roofing",
      category: "Commercial website concept",
      description: "A multi-page concept for a fictional Perth roofing company, designed to turn a complex service offering into a clear path from concern to inspection.",
      disclosure: "Portfolio concept — not an operating business",
      role: "Strategy, UX, visual design & frontend",
      format: "Responsive multi-page website",
      year: "2026",
      image: "/apex-ridge-roofing.webp",
      capabilities: [
        "Service architecture",
        "Conversion-focused UX",
        "Responsive frontend",
        "Motion system",
        "SEO foundations",
      ],
    },
  ],
  capabilities: [
    ["Creative direction", "Finding the idea that makes everything else feel inevitable."],
    ["Brand systems", "Building identities that stay coherent while they move and grow."],
    ["Web design", "Turning information into pace, hierarchy and memorable moments."],
    ["Frontend development", "Bringing the design to life with precise, resilient code."],
    ["Motion & interaction", "Using movement to explain, reward and create rhythm."],
    ["Digital strategy", "Connecting creative decisions to a clear commercial purpose."],
  ],
  story: {
    headline: "Starting over taught me how to build forward.",
    paragraphs: [
      "My name is Artur. I moved from Ukraine to Australia when I was 13. Familiar routines gave way to a new language, a new education system and a place I had to learn from the ground up.",
      "Starting again was difficult, but it made curiosity practical. I became less interested in waiting to feel ready and more willing to learn by making things.",
      "At 16, I began teaching myself programming, entrepreneurship, AI, marketing and product design. Not because I had a perfect plan, but because I wanted to understand how an idea becomes something useful.",
      "Forge and ATARprepAI are part of that process. Both have changed through failed assumptions, rough iterations and lessons I could only learn by shipping. Each project is helping me become a more thoughtful founder, developer and person.",
    ],
    quote: "Technology matters when it solves a real problem for a real person.",
    milestones: [
      {
        label: "Age 13",
        title: "A new country",
        description: "Moved from Ukraine to Australia and learned to navigate a new language, school system and environment.",
      },
      {
        label: "Age 16",
        title: "Learning by choice",
        description: "Started teaching myself how technology, product, design, marketing and business fit together.",
      },
      {
        label: "Now",
        title: "Building to learn",
        description: "Created Forge and ATARprepAI, improving both through real use, failed assumptions and steady iteration.",
      },
      {
        label: "Long term",
        title: "Useful, lasting work",
        description: "Build products that improve lives, create freedom for my family and leave something meaningful behind.",
      },
    ],
    outro: {
      title: "This is only the beginning.",
      body: "Every project teaches me something new, and every challenge shows me where I still need to grow. There is a lot left to learn—and that is the point.",
    },
  },
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
