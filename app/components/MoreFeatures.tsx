"use client";

import Image from "next/image";
import { useState } from "react";

type Item = { title: string; body: string; screen: string; alt: string };

const items: Item[] = [
  {
    title: "Mindful Minutes",
    body: "Completed sessions can save Mindful Minutes to Apple Health, from your iPhone or your watch.",
    screen: "/devices/phone-breathe.webp",
    alt: "A Birch breathing session in progress",
  },
  {
    title: "Gentle reminders",
    body: "Set reminders for your habits at the times you choose. Missed a day? Log today or a recent day.",
    screen: "/devices/phone-reminders.webp",
    alt: "Weekly and monthly recap reminders switched on in Birch",
  },
  {
    title: "Your week at a glance",
    body: "See breathing and habits together across your week and month, with streaks and monthly summaries.",
    screen: "/devices/phone-week.webp",
    alt: "A month calendar with one day's breathing and habits in Birch",
  },
  {
    title: "Your own habits",
    body: "Make any habit with your own emoji and color. Yes/no or a count, whatever fits.",
    screen: "/devices/phone-newhabit.webp",
    alt: "Creating a Drink Water habit with a count and a color in Birch",
  },
  {
    title: "Pick a pattern, any time",
    body: "Switch between 4-7-8, box breathing, and four more patterns whenever you like.",
    screen: "/devices/phone-techniques.webp",
    alt: "The breathing techniques list in Birch",
  },
  {
    title: "No account",
    body: "Nothing to sign up for. Open Birch, start a session, or log a habit.",
    screen: "/devices/phone-habits.webp",
    alt: "Birch opens straight to today's breathing and habits",
  },
];

function ArrowIcon() {
  // Lucide-style arrow-up-right, 24px grid, rounded caps and joins.
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </svg>
  );
}

export default function MoreFeatures() {
  // Keep the previous screen fully opaque underneath while the new one fades in on top,
  // so the phone never shows a blank or see-through frame, even on fast repeated taps.
  const [{ active, prev }, setState] = useState({ active: 0, prev: -1 });
  const select = (i: number) =>
    setState((s) => (s.active === i ? s : { active: i, prev: s.active }));

  return (
    <div className="more">
      <ul className="more-list">
        {items.map((item, i) => (
          <li key={item.title}>
            <button
              type="button"
              className={i === active ? "more-item active" : "more-item"}
              aria-expanded={i === active}
              aria-controls="more-screens"
              onClick={() => select(i)}
            >
              <span className="more-text">
                <strong>{item.title}</strong>
                <span className="more-body">
                  <span>
                    <span className="more-copy">{item.body}</span>
                  </span>
                </span>
              </span>
              <span className="more-icon">
                <ArrowIcon />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="more-device">
        <div className="device-phone more-phone" id="more-screens">
          {items.map((item, i) => (
            <Image
              key={item.screen}
              className={"more-shot" + (i === active ? " is-active" : i === prev ? " is-prev" : "")}
              src={item.screen}
              alt={i === active ? item.alt : ""}
              aria-hidden={i === active ? undefined : true}
              width={675}
              height={1380}
              loading="eager"
              decoding="async"
              sizes="(max-width: 880px) 280px, 340px"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
