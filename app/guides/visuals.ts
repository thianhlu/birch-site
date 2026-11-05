/* Per-guide art direction: hero photo, a solid pastel tone, device screens, and a pull quote
   drawn from the guide's own copy. Solid colors only, no gradients. */

export type GuideVisual = {
  photo: string;
  alt: string;
  tone: string; // solid pastel background
  ink: string; // accent text on the tone
  phone: "breathe" | "habits" | "newhabit" | "reminders" | "techniques" | "week";
  watch: "breathing" | "patterns" | "start";
  quote: string;
  chips: [string, string];
  dock?: "start"; // pacer card sits left on wide screens to keep the subject's face clear
};

const V: Record<string, GuideVisual> = {
  "4-7-8-breathing": {
    photo: "/photos/guides/4-7-8-breathing.webp",
    alt: "A woman sitting on her bed in warm lamplight, eyes closed, one hand on her chest",
    tone: "#f4e6dc",
    ink: "#8a4b2a",
    phone: "breathe",
    watch: "breathing",
    quote: "The hold should feel like a pause, not a contest.",
    chips: ["Inhale 4 · Hold 7 · Exhale 8", "4 breaths, twice a day"],
  },
  "box-breathing": {
    photo: "/photos/guides/box-breathing.webp",
    alt: "A man sitting upright at a sunlit desk with his eyes closed, taking a breathing break",
    tone: "#e3e6f7",
    ink: "#3a43b8",
    phone: "techniques",
    watch: "patterns",
    quote: "Four equal sides. A pacer keeps them even.",
    chips: ["In 4 · Hold 4 · Out 4 · Hold 4", "A steady daytime reset"],
  },
  "7-11-breathing": {
    photo: "/photos/guides/7-11-breathing.webp",
    alt: "A woman lying on a woven rug in afternoon light, hands resting on her belly",
    tone: "#efe7d6",
    ink: "#7a5a1e",
    phone: "breathe",
    watch: "breathing",
    quote: "The long, unhurried out-breath is the core of it.",
    chips: ["In 7 · Out 11", "No holds"],
    dock: "start",
  },
  "coherent-breathing": {
    photo: "/photos/guides/coherent-breathing.webp",
    alt: "A woman sitting cross-legged on a lakeside dock at dawn, birch trees across the water",
    tone: "#dceee3",
    ink: "#1f6b3a",
    phone: "breathe",
    watch: "patterns",
    quote: "You don't need a heart rate monitor to practice. A steady pacer is enough.",
    chips: ["In 6 · Out 6", "5 breaths a minute"],
  },
  "4-6-breathing": {
    photo: "/photos/guides/4-6-breathing.webp",
    alt: "A man resting on a wooden bench in a birch grove, eyes closed",
    tone: "#e4ecd8",
    ink: "#47612a",
    phone: "techniques",
    watch: "breathing",
    quote: "Subtle enough that nobody will notice.",
    chips: ["In 4 · Out 6", "6 breaths a minute"],
  },
  "breathing-exercises-for-sleep": {
    photo: "/photos/guides/breathing-exercises-for-sleep.webp",
    alt: "A woman lying in bed at night under a linen duvet, a warm lamp beside her",
    tone: "#e6e3f3",
    ink: "#4b3f8f",
    phone: "breathe",
    watch: "start",
    quote: "The routine itself becomes a signal that it's time to sleep.",
    chips: ["4-7-8 · 7-11 · 4-6 · 6-6", "Haptics, eyes closed"],
  },
  "apple-watch-breathing": {
    photo: "/photos/guides/apple-watch-breathing.webp",
    alt: "A wrist wearing a smartwatch with a sage band, resting on a knee outdoors",
    tone: "#dfeee4",
    ink: "#1f6b3a",
    phone: "week",
    watch: "patterns",
    quote: "A pattern app that cues each phase on your wrist is easier than counting in your head.",
    chips: ["Six patterns on your wrist", "Requires watchOS 11 or later"],
  },
  "daily-breathing-habit": {
    photo: "/photos/guides/daily-breathing-habit.webp",
    alt: "A woman at a sunny kitchen counter with a glass of water and an open notebook, eyes closed",
    tone: "#f3ecd4",
    ink: "#7a5a1e",
    phone: "habits",
    watch: "start",
    quote: "The habit matters more than the length of any one session.",
    chips: ["1 to 5 minutes a day", "Breathing + habits"],
  },
  "how-to-build-a-habit": {
    photo: "/photos/journal.webp",
    alt: "Hands checking off habits in a paper journal beside water and vitamins",
    tone: "#e8dfe3",
    ink: "#6b4a5a",
    phone: "newhabit",
    watch: "start",
    quote: "Small beats ambitious. Start tiny.",
    chips: ["Tiny habits", "Stack, track, repeat"],
  },
};

export const visualFor = (slug: string): GuideVisual => V[slug];
