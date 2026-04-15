export const pricingContent = {
  hero: {
    eyebrow: "Pricing and plans",
    title: "One Household. Unlimited Stories.",
    description:
      "The $60B language industry wants you to pay per person. We want you to grow as a family. Whether you're a solo explorer or a household of five, our pricing is designed to keep you inside the story, not stuck in a subscription loop.",
    summary: [
      "Three plans: LemonGrove Solo, LemonNoir Solo, and Bundle",
      "Up to five learner profiles on one subscription",
      "600+ total scenarios across both worlds",
    ],
    price: "$8.99",
    cadence: "/month",
  },
  personas: [
    {
      title: "Early explorer",
      world: "LemonGrove",
      description: "Narrative-led discovery for children with playful quests and confidence-building loops.",
      image: {
        src: "/media/pricing/family-child.jpg",
        alt: "A child exploring a vibrant underwater forest in a storybook-style scene.",
      },
    },
    {
      title: "Mystery seeker",
      world: "LemonNoir",
      description: "High-stakes cinematic immersion for teens and adults who need practical spoken fluency.",
      image: {
        src: "/media/pricing/family-teen.jpg",
        alt: "A moody teen portrait in a noir setting with dramatic warm lighting.",
      },
    },
    {
      title: "Family path",
      world: "Both worlds",
      description: "Shared progress with individual journeys across LemonGrove and LemonNoir.",
      image: {
        src: "/media/pricing/family-parent.jpg",
        alt: "A parent in a professional setting lit by warm reflected light.",
      },
    },
    {
      title: "Lifelong learning",
      world: "Household access",
      description: "One plan supports mixed-age learners with role-specific pacing and profile-level continuity.",
      image: {
        src: "/media/pricing/family-grandparent.jpg",
        alt: "An older adult looking through a library window in warm, atmospheric light.",
      },
    },
  ],
  offers: [
    {
      name: "LemonGrove Solo",
      price: "$4.99",
      description:
        "For the early explorers. One learner profile with full access to LemonGrove and 400+ discovery quests.",
    },
    {
      name: "LemonNoir Solo",
      price: "$5.99",
      description:
        "For the mystery seekers. One learner profile with full access to LemonNoir and 200+ cinematic mysteries.",
    },
    {
      name: "Unified Family Bundle",
      price: "$8.99",
      description:
        "The household standard. Up to five profiles with full access to both worlds and 600+ total scenarios.",
    },
  ],
  comparisonRows: [
    { feature: "Max users", noirSolo: "1", groveSolo: "1", bundle: "5 Profiles" },
    {
      feature: "Flagship worlds",
      noirSolo: "Noir Only",
      groveSolo: "Grove Only",
      bundle: "Full Access",
    },
    { feature: "Narrative library", noirSolo: "300+ Cases", groveSolo: "300+ Quests", bundle: "600+ Scenarios" },
    { feature: "Audience", noirSolo: "Teens & Adults", groveSolo: "Ages 3-12", bundle: "The Whole Family" },
    {
      feature: "Progress sharing",
      noirSolo: "No",
      groveSolo: "No",
      bundle: "Yes (Parental Snapshots)",
    },
  ],
  banner:
    "The math is simple. For less than the price of two solo coffees, your entire household gets a private language ecosystem. That's $1.80 per person per month for unlimited immersion. No more fighting over screen time. Now, everyone has their own world.",
};
