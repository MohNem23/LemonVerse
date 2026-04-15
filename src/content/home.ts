export const homeContent = {
  hero: {
    eyebrow: "Narrative immersion for the whole family",
    title: "Don't drill the language. Live the story.",
    description:
      "Unlock fluency through high-stakes immersion. From solving cinematic mysteries in LemonNoir to leading safari expeditions in LemonGrove, we've replaced repetitive drills with interactive adventures designed for the whole family.",
    summary: [
      "Two flagship worlds built for different ages",
      "600+ battle-tested scenarios at launch",
      "Up to five profiles in one family subscription",
    ],
    primaryAction: { href: "/pricing", label: "Begin your journey." },
    secondaryAction: { href: "/methodology", label: "See how it works." },
    image: {
      src: "/media/home/hero-cinematic.jpg",
      alt: "A cinematic twilight landscape where floating books transform into glowing architecture above a surreal horizon.",
    },
  },
  factStrip: [
    { label: "Scenario Library", value: "600+" },
    { label: "Family Profiles", value: "5" },
    { label: "Flagship Worlds", value: "2" },
    { label: "Bundle Price", value: "$8.99/mo" },
  ],
  familyWorlds: [
    {
      name: "LemonGrove",
      audience: "Children",
      description:
        "We've designed these worlds, from bioluminescent reefs to Mars outposts, to be the ultimate language playground for children.",
    },
    {
      name: "LemonNoir",
      audience: "Teens and adults",
      description:
        "Step into cinematic mysteries where every conversation moves the plot forward and every fluent response unlocks the next clue.",
    },
  ],
  worlds: [
    {
      id: "worlds",
      name: "LemonNoir",
      audience: "Teens and adults",
      title: "Intrigue. Tension. Choice.",
      accent: "noir",
      image: {
        src: "/media/home/noir-scenario.jpg",
        alt: "A noir-style illustration of a suspicious gourmet meal lit dramatically on a dark table.",
      },
      callout: "LemonNoir audience design",
      description:
        "Step into LemonNoir, where every conversation moves the plot forward. Whether you're interrogating a suspect in a French villa, closing a high-stakes deal in Tokyo, or navigating a first date in Madrid, you are living through a masterfully scripted mystery.",
      bullets: [
        "Interrogate suspects and solve case files",
        "Handle negotiation and interview pressure",
        "Use real-world social language under stakes",
      ],
    },
    {
      id: "grove",
      name: "LemonGrove",
      audience: "Children",
      title: "Curiosity without limits.",
      accent: "accent",
      image: {
        src: "/media/home/grove-fishtopus.jpg",
        alt: "A whimsical underwater dressing room where the Fishtopus character experiments with costumes and coral props.",
      },
      callout: "LemonGrove audience design",
      description:
        "In LemonGrove, children don't study; they explore. Their choices unlock new paths and their curiosity builds real-world vocabulary in a living storybook designed for natural absorption through play.",
      bullets: [
        "Narrator-led quests built for ages 3-12",
        "Worlds from reefs to Mars and jungle expeditions",
        "Active, safe screen time with language outcomes",
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
    title: "A single subscription for the entire family.",
    description:
      "Access the full library of LemonNoir mysteries and LemonGrove adventures for up to five profiles. Shared progress, individual journeys.",
    features: [
      "Up to five unique learner profiles",
      "Full access to both flagship worlds",
      "600+ scenarios across child and adult journeys",
    ],
    cta: { href: "/pricing", label: "See the Family Bundle" },
  },
};
