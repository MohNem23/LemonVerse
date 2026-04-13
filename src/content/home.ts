export const homeContent = {
  hero: {
    eyebrow: "Narrative AI language immersion",
    title: "Where words become worlds.",
    description:
      "LemonVerse turns language learning into story-led immersion for children, teens, adults, and families. The flagship worlds are LemonGrove for children and LemonNoir for teens and adults, with individual games and scenarios living inside each library.",
    summary: [
      "AI-guided dialogue and scenario practice",
      "Two flagship worlds with library titles inside each one",
      "Five learner profiles in the unified family plan",
    ],
    primaryAction: { href: "/pricing", label: "See Pricing" },
    secondaryAction: { href: "/methodology", label: "Read the Methodology" },
    image: {
      src: "/media/home/hero-cinematic.jpg",
      alt: "A cinematic twilight landscape where floating books transform into glowing architecture above a surreal horizon.",
    },
  },
  factStrip: [
    { label: "Library Titles", value: "24+" },
    { label: "Family Profiles", value: "5" },
    { label: "Flagship Worlds", value: "2" },
    { label: "Bundle Price", value: "$8.99/mo" },
  ],
  familyWorlds: [
    {
      name: "LemonGrove",
      audience: "Children",
      description:
        "Bright underwater adventures for children, with standalone games and scenarios inside the LemonGrove library rather than separate worlds.",
    },
    {
      name: "LemonNoir",
      audience: "Teens and adults",
      description:
        "High-stakes dialogue, mystery, and roleplay for older learners, with each named game or scenario treated as a title inside the LemonNoir library.",
    },
  ],
  worlds: [
    {
      id: "worlds",
      name: "LemonNoir",
      audience: "Teens and adults",
      title: "Master the language of intrigue.",
      accent: "noir",
      image: {
        src: "/media/home/noir-scenario.jpg",
        alt: "A noir-style illustration of a suspicious gourmet meal lit dramatically on a dark table.",
      },
      callout: "Library title: Scenario 042",
      description:
        "Step into detective scenes, interviews, negotiations, and social roleplay where each named scenario is one title inside the LemonNoir library, not the whole world.",
      bullets: [
        "Job interview and professional dialogue simulations",
        "Mystery-led story arcs with branching choices",
        "Real-world language for persuasion, tension, and nuance",
      ],
    },
    {
      id: "grove",
      name: "LemonGrove",
      audience: "Children",
      title: "Deep sea discoveries.",
      accent: "accent",
      image: {
        src: "/media/home/grove-fishtopus.jpg",
        alt: "A whimsical underwater dressing room where the Fishtopus character experiments with costumes and coral props.",
      },
      callout: "Library title: Build a buddy",
      description:
        "Join Fishtopus in an underwater world where each cave, creature, and collectible belongs to a larger LemonGrove library of titles, games, and scenarios for children.",
      bullets: [
        "Custom avatars and buddy building",
        "Interactive stories with child-friendly pacing",
        "Playful repetition anchored to characters and places",
      ],
    },
  ],
  socialProof: {
    title: "Community Buzz",
    description:
      "Learners and parents keep momentum through shared circles, discussion prompts, and family progress snapshots.",
    image: {
      src: "/media/home/community-buzz.jpg",
      alt: "A smartphone chat interface showing a lively family learning group discussing LemonVerse progress.",
    },
    caption:
      "Generative-engine friendly summary: LemonVerse combines AI tutoring, group accountability, and story-based practice inside one language-learning ecosystem.",
  },
  bundle: {
    title: "Unified Family Bundle",
    description:
      "One subscription connects child-first play in LemonGrove, teen and adult immersion in LemonNoir, and the broader title library for the whole household.",
    features: [
      "Up to five unique learner profiles",
      "Access to all 24+ library titles",
      "AI performance tracking and progress snapshots",
    ],
    cta: { href: "/pricing", label: "Claim the Bundle" },
  },
};
