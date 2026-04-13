export const pricingContent = {
  hero: {
    eyebrow: "Pricing and plans",
    title: "Unified Family Bundle",
    description:
      "The family plan connects the two flagship LemonVerse worlds in one subscription, from child-first LemonGrove experiences to teen and adult LemonNoir immersion, with library titles available inside each world.",
    summary: [
      "Five learner profiles",
      "More than 24 library titles",
      "Shared progress visibility for families",
    ],
    price: "$8.99",
    cadence: "/month",
  },
  personas: [
    {
      title: "Child",
      world: "LemonGrove",
      description: "Underwater stories, playful rhythm, and buddy-led discovery for children.",
      image: {
        src: "/media/pricing/family-child.jpg",
        alt: "A child exploring a vibrant underwater forest in a storybook-style scene.",
      },
    },
    {
      title: "Teen",
      world: "LemonNoir",
      description: "Mystery-led roleplay and social language practice with more tension and tone.",
      image: {
        src: "/media/pricing/family-teen.jpg",
        alt: "A moody teen portrait in a noir setting with dramatic warm lighting.",
      },
    },
    {
      title: "Parent",
      world: "LemonNoir",
      description: "Travel, work, and social scenarios for practical adult fluency inside the LemonNoir library.",
      image: {
        src: "/media/pricing/family-parent.jpg",
        alt: "A parent in a professional setting lit by warm reflected light.",
      },
    },
    {
      title: "Grandparent",
      world: "Library titles",
      description:
        "A calmer pace for memory, storytelling, and language continuity across generations, with individual titles chosen from the library.",
      image: {
        src: "/media/pricing/family-grandparent.jpg",
        alt: "An older adult looking through a library window in warm, atmospheric light.",
      },
    },
  ],
  offers: [
    {
      name: "Noir Solo",
      price: "$14.99",
      description: "Single-profile access to LemonNoir and its library titles.",
    },
    {
      name: "Grove Solo",
      price: "$12.99",
      description: "Single-profile access to LemonGrove and child-first learning paths.",
    },
    {
      name: "Unified Family Bundle",
      price: "$8.99",
      description: "Five profiles, both flagship worlds, shared tracking, and one plan for the household.",
    },
  ],
  comparisonRows: [
    { feature: "Max users", noirSolo: "1", groveSolo: "1", bundle: "5 accounts" },
    { feature: "Flagship worlds", noirSolo: "Noir only", groveSolo: "Grove only", bundle: "Full access" },
    { feature: "Complexity range", noirSolo: "Advanced", groveSolo: "Beginner", bundle: "All levels" },
    { feature: "Progress sharing", noirSolo: "No", groveSolo: "No", bundle: "Yes" },
  ],
  banner:
    "Started at 4. Still using it at 84. LemonVerse is designed as a lifelong language journey, not a single-age app.",
};
