"use client";

import Image from "next/image";
import { useState } from "react";

type Item = { title: string; body: string; screen: string; alt: string };

const items: Item[] = [
  {
    title: "Mindful Minutes",
    body: "Completed sessions can save Mindful Minutes to Apple Health, from your iPhone or your watch.",
    screen: "/images/screen-breathe.webp",
    alt: "A Birch breathing session in progress",
  },
  {
    title: "Gentle reminders",
    body: "Set gentle reminders for your habits at the times you choose. Missed a day? Log today or a recent day.",
    screen: "/images/screen-habits.webp",
    alt: "Habits for today in Birch",
  },
  {
    title: "Your week at a glance",
    body: "See breathing and habits together across your week and month, with streaks and monthly summaries.",
    screen: "/images/screen-habits.webp",
    alt: "Week rings above today's habits in Birch",
  },
  {
    title: "Your own habits",
    body: "Make any habit with your own emoji and color. Yes/no or a count, whatever fits.",
    screen: "/images/screen-habits.webp",
    alt: "Custom habit tiles in Birch",
  },
  {
    title: "Pick a pattern, any time",
    body: "Switch between 4-7-8, box breathing, and four more patterns whenever you like.",
    screen: "/images/screen-techniques.webp",
    alt: "The six breathing techniques in Birch",
  },
  {
    title: "No account",
    body: "Nothing to sign up for. Open Birch, start a session, or log a habit.",
    screen: "/images/screen-breathe.webp",
    alt: "Birch opens straight to breathing",
  },
];

export default function MoreFeatures() {
  const [active, setActive] = useState(0);
  const current = items[active];
  return (
    <div className="more">
      <ul className="more-list">
        {items.map((item, i) => (
          <li key={item.title}>
            <button
              type="button"
              className={i === active ? "more-item active" : "more-item"}
              aria-expanded={i === active}
              onClick={() => setActive(i)}
            >
              <span className="more-text">
                <strong>{item.title}</strong>
                <span>{item.body}</span>
              </span>
              <span className="more-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20" width="14" height="14">
                  <path d="M5 10h10M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="more-device">
        <div className="phone phone-lg">
          <span className="island" aria-hidden="true" />
          <Image key={current.screen + active} className="fade-swap" src={current.screen} alt={current.alt} width={800} height={1272} sizes="(max-width: 880px) 70vw, 320px" />
        </div>
      </div>
    </div>
  );
}
