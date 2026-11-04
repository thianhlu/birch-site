export const TOPICS = [
  { value: "bug", label: "Bug" },
  { value: "feature", label: "Feature idea" },
  { value: "question", label: "Question" },
  { value: "other", label: "Other" },
] as const;

export type Topic = (typeof TOPICS)[number]["value"];

export const LIMITS = {
  name: 100,
  email: 254,
  device: 120,
  appVersion: 40,
  message: 5000,
  messageMin: 10,
} as const;
