/*
 * Breathing guides. Plain data so the HTML pages, the .md mirrors, llms.txt,
 * the sitemap, and JSON-LD all come from one source.
 * Inline text supports [link](/path) and **bold**.
 * Every source below was opened and checked on Nov 3, 2026.
 */

export type Source = { label: string; url: string };
export type Step = { name: string; time: string; text: string };
export type Section = { id: string; heading: string; body?: string[]; bullets?: string[] };
export type Guide = {
  slug: string;
  title: string; // <title>, under 60 chars
  description: string; // meta description
  h1: string;
  kicker: string;
  query: string; // primary target query
  answer: string; // 40-60 word direct answer
  patterns: string[]; // ids in PATTERNS for the pacer
  totalTime: string; // ISO 8601 duration for HowTo
  stepsHeading: string;
  steps: Step[];
  sections: Section[];
  faqs: [string, string][];
  sources: Source[];
  related: string[];
  published: string;
  updated: string;
};

export const S = {
  weil: { label: "Andrew Weil Center for Integrative Medicine — 4-7-8 Breath (patient handout)", url: "https://www.weilcenter.arizona.edu/content/CLH00048.html" },
  cc478: { label: "Cleveland Clinic — 4-7-8 Breathing Method for Sleep and Relaxation", url: "https://health.clevelandclinic.org/4-7-8-breathing" },
  ccBox: { label: "Cleveland Clinic — Box Breathing Benefits and Techniques", url: "https://health.clevelandclinic.org/box-breathing-benefits" },
  ccDia: { label: "Cleveland Clinic — Diaphragmatic Breathing", url: "https://my.clevelandclinic.org/health/articles/9445-diaphragmatic-breathing" },
  nhs: { label: "NHS — Breathing exercises for stress", url: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/" },
  sm711: { label: "Student Minds — 7-11 breathing exercise", url: "https://www.studentminds.org.uk/advice-and-info/7-11-breathing-exercise/" },
  nccih: { label: "NCCIH (NIH) — Relaxation Techniques: What You Need To Know", url: "https://www.nccih.nih.gov/health/relaxation-techniques-what-you-need-to-know" },
  apple: { label: "Apple Support — Start a Reflect or Breathe session on Apple Watch", url: "https://support.apple.com/guide/watch/start-a-reflect-or-breathe-session-apd371dfe3d7/watchos" },
  zaccaro: { label: "Zaccaro et al., 2018. How Breath-Control Can Change Your Life: A Systematic Review on Psycho-Physiological Correlates of Slow Breathing. Frontiers in Human Neuroscience", url: "https://pubmed.ncbi.nlm.nih.gov/30245619/" },
  lehrer: { label: "Lehrer & Gevirtz, 2014. Heart rate variability biofeedback: how and why does it work? Frontiers in Psychology", url: "https://pubmed.ncbi.nlm.nih.gov/25101026/" },
  balban: { label: "Balban et al., 2023. Brief structured respiration practices enhance mood and reduce physiological arousal. Cell Reports Medicine", url: "https://pubmed.ncbi.nlm.nih.gov/36630953/" },
  fincham: { label: "Fincham et al., 2023. Effect of breathwork on stress and mental health: A meta-analysis of randomised-controlled trials. Scientific Reports", url: "https://pubmed.ncbi.nlm.nih.gov/36624160/" },
  sleepfdn: { label: "Sleep Foundation — Breathing Exercises for Sleep", url: "https://www.sleepfoundation.org/sleep-hygiene/best-breathing-exercises-for-sleep" },
  clear: { label: "James Clear — Habit Stacking", url: "https://jamesclear.com/habit-stacking" },
} satisfies Record<string, Source>;

const PUB = "2026-11-03";

export const GUIDES: Guide[] = [
  /* ---------------------------------------------------------------- 4-7-8 */
  {
    slug: "4-7-8-breathing",
    title: "How to Do 4-7-8 Breathing (Steps + Free Timer)",
    description:
      "Inhale 4, hold 7, exhale 8. Step-by-step 4-7-8 breathing with a free live pacer, how many cycles to do, common mistakes, and how to do it on Apple Watch.",
    h1: "How to do 4-7-8 breathing",
    kicker: "Breathing guide · Weil Method",
    query: "how to do 4-7-8 breathing",
    answer:
      "To do 4-7-8 breathing, empty your lungs, inhale quietly through your nose for 4 counts, hold for 7, then exhale through your mouth with a soft whoosh for 8. That is one breath. Start with four breaths, twice a day. In Birch, one count is one second, so each breath takes 19 seconds.",
    patterns: ["weil"],
    totalTime: "PT2M",
    stepsHeading: "4-7-8 breathing, step by step",
    steps: [
      { name: "Get comfortable", time: "10 sec", text: "Sit with your back straight, or lie down if you are winding down for bed. Rest the tip of your tongue on the ridge just behind your upper front teeth and keep it there for the whole exercise." },
      { name: "Empty your lungs", time: "3 sec", text: "Breathe out completely through your mouth, around your tongue, with a gentle whoosh." },
      { name: "Inhale for 4", time: "4 sec", text: "Close your mouth and breathe in quietly through your nose while you count to four." },
      { name: "Hold for 7", time: "7 sec", text: "Hold the breath softly for a count of seven. No straining, no clenching. Let your shoulders stay loose." },
      { name: "Exhale for 8", time: "8 sec", text: "Breathe out through your mouth for a count of eight, lips slightly pursed, with the same whoosh. That is one full breath." },
      { name: "Repeat three more times", time: "about 1 min", text: "Do four breaths in total. At one count per second, four breaths take a little over a minute. Then return to normal breathing and notice how you feel." },
    ],
    sections: [
      {
        id: "what-it-is",
        heading: "What 4-7-8 breathing is",
        body: [
          "4-7-8 breathing is a counted breathing exercise popularized by Dr. Andrew Weil, who describes it in a patient handout as a simple tool for general relaxation and for managing stress. In Birch it is called the **Weil Method**.",
          "The pattern has three parts: a short inhale, a longer hold, and the longest exhale. In Birch's pacer, one count is one second, so one breath takes 19 seconds. Weil's handout notes that the 4:7:8 ratio matters most, so when you count on your own and the seven-count hold feels like too much at first, a slightly quicker count that keeps the ratio is fine. Work up to full seconds as it gets easier.",
        ],
      },
      {
        id: "who-its-for",
        heading: "Who it's for",
        body: [
          "4-7-8 suits people who like a short, structured routine with a clear end point. Four breaths is a small enough ask that you can do it at a desk, in the car before you walk inside, or in bed with the lights off. Weil suggests using it whenever something upsetting happens, before you react, and to help you fall asleep.",
          "If breath holds feel uncomfortable, start with a no-hold pattern such as [7-11 breathing](/guides/7-11-breathing) or [4-6 breathing](/guides/4-6-breathing). If you are pregnant, have a heart or lung condition, or simply feel unwell when you hold your breath, check with a clinician before practicing breath holds.",
        ],
      },
      {
        id: "mistakes",
        heading: "Common mistakes",
        bullets: [
          "**Doing too many breaths too soon.** Weil's handout says not to do more than four breaths at one time for the first month. Later you can go up to eight.",
          "**Forcing the hold.** The hold should feel like a pause, not a contest. If it feels like a strain, stop and breathe normally, then try again later.",
          "**Gulping the inhale.** Breathe in quietly through your nose. A loud, fast inhale defeats the purpose.",
          "**Rushing the exhale.** The eight-count out-breath is the longest part. Let it be slow and complete.",
          "**Only using it in a crisis.** It is easier to use in a hard moment if you have already practiced it on calm days.",
        ],
      },
      {
        id: "how-long",
        heading: "How long to practice",
        body: [
          "Weil recommends doing it at least twice a day. Cleveland Clinic suggests three cycles twice a day while you learn. Either way, the sessions are short: one to two minutes.",
          "Feeling a little light-headed the first few times is common, and both sources say it passes with practice. If it happens, stop, breathe normally, and try again later. To make it a daily thing, pair it with something you already do, like getting into bed. Our guide to [building a daily breathing habit](/guides/daily-breathing-habit) covers this.",
        ],
      },
      {
        id: "with-birch",
        heading: "Doing 4-7-8 with Birch",
        body: [
          "Birch's Weil Method preset guides each phase on screen, so you don't have to count. Set a number of cycles (four is a good start) or a time. On Apple Watch, gentle haptic cues mark each phase, so you can do it in bed with your eyes closed and the phone out of reach. Sessions can count toward Mindful Minutes in Apple Health.",
        ],
      },
    ],
    faqs: [
      ["How many times should you do 4-7-8 breathing?", "Four breaths at a time, at least twice a day, is the routine in Dr. Weil's handout. He suggests staying at four breaths for the first month, then going up to eight if you want. Cleveland Clinic suggests three cycles twice a day while you learn."],
      ["Does 4-7-8 breathing help you fall asleep?", "Many people use it as part of a bedtime wind-down, and Weil suggests it for falling asleep. It is a relaxation routine, not a sleep treatment, and results vary from person to person. If trouble sleeping keeps going, talk to a doctor. See our guide to [breathing exercises for sleep](/guides/breathing-exercises-for-sleep)."],
      ["Why do I feel light-headed during 4-7-8 breathing?", "It is common at first while your body gets used to slower breathing, and Weil and Cleveland Clinic both say it passes. Stop and breathe normally if it happens, then try again later. Stop altogether if you feel unwell."],
      ["Is one count one second?", "In Birch, yes: one count is one second, so a full 4-7-8 breath takes 19 seconds. Weil's handout says the 4:7:8 ratio matters most, so if you count on your own and the hold is hard at first, a slightly quicker count that keeps the ratio is fine while you build up."],
      ["Can I do 4-7-8 breathing on Apple Watch?", "Yes. Birch's Apple Watch app includes the Weil Method with haptic cues for each phase and sessions from 1 to 5 minutes (watchOS 11 or later). Apple's built-in Breathe session uses a simple in-and-out animation rather than set holds. See [breathing on Apple Watch](/guides/apple-watch-breathing)."],
      ["Is 4-7-8 better than box breathing?", "Neither is better. 4-7-8 has a long exhale and a short routine, so many people keep it for winding down. [Box breathing](/guides/box-breathing) has four equal sides and feels steady, so it is often used to reset during the day. Try both and keep the one you'll actually do."],
    ],
    sources: [S.weil, S.cc478, S.zaccaro],
    related: ["box-breathing", "7-11-breathing", "breathing-exercises-for-sleep"],
    published: PUB,
    updated: PUB,
  },

  /* ------------------------------------------------------------------ Box */
  {
    slug: "box-breathing",
    title: "How to Do Box Breathing (4-4-4-4) + Free Timer",
    description:
      "Box breathing is inhale 4, hold 4, exhale 4, hold 4. Learn the steps with a free live pacer, how many rounds to do, common mistakes, and how to do it on Apple Watch.",
    h1: "How to do box breathing",
    kicker: "Breathing guide · 4-4-4-4",
    query: "how to do box breathing",
    answer:
      "To do box breathing, inhale through your nose for 4 seconds, hold for 4, exhale slowly for 4, and hold with empty lungs for 4. That is one round, about 16 seconds. Repeat three or four rounds, or keep going for a few minutes. If four counts feels long, start with three and build up.",
    patterns: ["box"],
    totalTime: "PT2M",
    stepsHeading: "Box breathing, step by step",
    steps: [
      { name: "Settle in", time: "10 sec", text: "Sit upright with your feet on the floor and your shoulders loose. Rest a hand on your belly if it helps you feel the breath." },
      { name: "Breathe out fully", time: "4 sec", text: "Slowly empty your lungs so you start the first side of the box from empty." },
      { name: "Inhale for 4", time: "4 sec", text: "Breathe in through your nose for a count of four. Feel your belly and lower ribs expand." },
      { name: "Hold for 4", time: "4 sec", text: "Pause with full lungs for four counts. Keep your throat and jaw relaxed." },
      { name: "Exhale for 4", time: "4 sec", text: "Breathe out slowly and evenly for four counts." },
      { name: "Hold for 4", time: "4 sec", text: "Pause with empty lungs for four counts, then start the next inhale. That's one round." },
      { name: "Repeat three or four rounds", time: "about 1 min", text: "Three or four rounds take about a minute. Keep going longer if it feels good." },
    ],
    sections: [
      {
        id: "what-it-is",
        heading: "What box breathing is",
        body: [
          "Box breathing (also called square breathing or four-square breathing) gives each part of the breath the same count. You can picture tracing the four sides of a square. Cleveland Clinic describes it as a form of yogic deep breathing, sama vritti pranayama, and notes that the United States Navy SEALs use it.",
          "Because every side is equal, there is nothing to remember except \"four.\" That simplicity is why so many people stick with it. In a Stanford study, people did 5 minutes of breathwork a day for a month. Box breathing was one of three methods compared with mindfulness meditation. Breathwork improved mood more than meditation, and the exhale-focused method (cyclic sighing) stood out most. Box breathing is a good, steady option, not a magic one.",
        ],
      },
      {
        id: "who-its-for",
        heading: "Who it's for",
        body: [
          "Box breathing is a good fit when you want to feel steady and stay alert: before a presentation, between meetings, or after a stressful message. The holds give your mind something to track, which some people find easier than \"just breathe.\"",
          "If holds make you uncomfortable, try [4-6 breathing](/guides/4-6-breathing) or [coherent breathing](/guides/coherent-breathing) instead. Both have no holds. If you are pregnant or have a heart or lung condition, ask a clinician before practicing breath holds.",
        ],
      },
      {
        id: "mistakes",
        heading: "Common mistakes",
        bullets: [
          "**Straining on the holds.** A hold is a pause. If you feel tension building, shorten every side to three counts.",
          "**Breathing high in the chest.** Let the belly and lower ribs move. Shoulders should stay down.",
          "**Speeding up.** It is easy to drift faster as you go. A pacer or haptic cue keeps the sides even.",
          "**Going too long on day one.** Start with three or four rounds. Stop if you feel light-headed.",
          "**Saving it for emergencies.** Practicing on calm days makes it easier to reach for when you need it.",
        ],
      },
      {
        id: "how-long",
        heading: "How long to practice",
        body: [
          "Cleveland Clinic suggests three to four rounds, once or twice a day, whatever kind of day you are having. In the Stanford study, participants practiced for 5 minutes daily. A minute or two is enough to start. Add time once the counts feel easy.",
          "The habit matters more than the length of any one session. Anchor it to something daily, like your first coffee or opening your laptop. See [how to build a daily breathing habit](/guides/daily-breathing-habit).",
        ],
      },
      {
        id: "with-birch",
        heading: "Box breathing with Birch",
        body: [
          "Birch includes Box Breathing 4-4-4-4 on iPhone and Apple Watch. Choose a number of cycles or a time, then follow the guide. On the Watch, a haptic cue marks each side of the box, so you can do a round in a meeting without looking at a screen. Birch is free, with no ads, no account, and no subscription.",
        ],
      },
    ],
    faqs: [
      ["How long should you do box breathing?", "Three to four rounds (about a minute), once or twice a day, is Cleveland Clinic's suggestion. Many people build up to about 5 minutes. Short and regular beats long and rare."],
      ["What if four seconds is too long?", "Use three seconds per side, keep the sides equal, and work up to four as it gets easier."],
      ["Is box breathing good for sleep?", "It can be part of a wind-down. For bedtime, many people prefer patterns with a longer exhale and no hold at the bottom, such as [4-7-8](/guides/4-7-8-breathing) or [7-11](/guides/7-11-breathing). See [breathing exercises for sleep](/guides/breathing-exercises-for-sleep)."],
      ["Box breathing vs 4-7-8: which should I use?", "Box breathing is even and steady, which suits daytime resets. 4-7-8 has a long exhale and a set four-breath routine, which many people use before sleep. Both are easy to learn."],
      ["Can I do box breathing on Apple Watch?", "Apple's built-in Breathe session is a simple in-and-out animation without set holds. Birch's free Watch app has a Box Breathing 4-4-4-4 preset with haptic cues for each phase, 1 to 5 minute sessions, and Mindful Minutes in Apple Health. See [breathing on Apple Watch](/guides/apple-watch-breathing)."],
      ["Is there a free box breathing app?", "Yes. Birch is free on the App Store for iPhone and Apple Watch, with no ads, no subscription, no in-app purchases, and no account."],
    ],
    sources: [S.ccBox, S.balban, S.zaccaro],
    related: ["4-7-8-breathing", "coherent-breathing", "apple-watch-breathing"],
    published: PUB,
    updated: PUB,
  },

  /* ----------------------------------------------------------------- 7-11 */
  {
    slug: "7-11-breathing",
    title: "How to Do 7-11 Breathing (Steps + Free Timer)",
    description:
      "7-11 breathing: in for 7, out for 11, no holds. Steps with a free live pacer, how long to practice, what to do if 11 feels too long, and how it compares with 4-7-8.",
    h1: "How to do 7-11 breathing",
    kicker: "Breathing guide · Gentle Wave",
    query: "how to do 7-11 breathing",
    answer:
      "To do 7-11 breathing, breathe in gently through your nose for a count of 7, then breathe out slowly for a count of 11, with no holds. Keep going for 5 to 10 minutes. If 7 and 11 feel too long, shorten both counts. What matters is that the out-breath stays longer than the in-breath.",
    patterns: ["wave"],
    totalTime: "PT5M",
    stepsHeading: "7-11 breathing, step by step",
    steps: [
      { name: "Get comfortable", time: "15 sec", text: "Sit or lie down. Let your jaw and shoulders soften. Place a hand on your belly so you can feel it rise and fall." },
      { name: "Breathe in for 7", time: "7 sec", text: "Breathe in gently through your nose for a count of seven, letting the belly expand rather than lifting the chest." },
      { name: "Breathe out for 11", time: "11 sec", text: "Breathe out slowly and smoothly for a count of eleven, through your nose or softly through your mouth. Don't push the last bit of air out." },
      { name: "Go straight into the next breath", time: "", text: "There are no holds. When the out-breath ends, start the next in-breath." },
      { name: "Continue for 5 to 10 minutes", time: "5–10 min", text: "Keep the rhythm going. If your mind wanders, bring it back to the count." },
      { name: "Finish gently", time: "30 sec", text: "Return to normal breathing for a few breaths before you get up." },
    ],
    sections: [
      {
        id: "what-it-is",
        heading: "What 7-11 breathing is",
        body: [
          "7-11 breathing is a two-part pattern: a 7-count in-breath and an 11-count out-breath. Student Minds, the UK student mental health charity, describes it as an exercise to reduce stress in the moment, and says regular practice may help you feel calmer generally. In Birch it is called **Gentle Wave**.",
          "The long, unhurried out-breath is the core of it. There are no holds, which is why many people find it gentler than [4-7-8](/guides/4-7-8-breathing) or [box breathing](/guides/box-breathing). In Birch, one count is one second, so one breath takes 18 seconds, a little over three breaths a minute. If 11 seconds out feels too long at first, shorten both numbers and build up.",
        ],
      },
      {
        id: "nhs",
        heading: "Is 7-11 breathing an NHS technique?",
        body: [
          "People often search for \"7-11 breathing NHS.\" The NHS's own breathing exercise for stress is a little different. It asks you to breathe in and out steadily, counting from 1 to 5 if that helps, and to keep going for at least 5 minutes, ideally as part of a daily routine. 7-11 builds on the same idea of slow, regular breathing, with a longer out-breath. If 7-11 feels like a stretch, the NHS 5-and-5 rhythm is a fine place to start.",
        ],
      },
      {
        id: "who-its-for",
        heading: "Who it's for",
        body: [
          "7-11 suits people who find breath holds uncomfortable, and anyone who wants something to do for a few minutes, not just a few breaths: on a train, in a waiting room, or lying in bed. It is one of the patterns in our [breathing for sleep](/guides/breathing-exercises-for-sleep) guide.",
        ],
      },
      {
        id: "mistakes",
        heading: "Common mistakes",
        bullets: [
          "**Forcing the full count.** If 11 makes you gasp on the next breath, try 5 in and 8 out, or 4 in and 6 out. Keep the out-breath longer.",
          "**Chest breathing.** Student Minds recommends deep, diaphragmatic breathing. Let the belly move, not the shoulders.",
          "**Squeezing out the last air.** The out-breath should feel like a slow sigh, not an effort.",
          "**Stopping after a minute.** 7-11 works more like a short session than a quick reset. Give it at least a few minutes.",
        ],
      },
      {
        id: "how-long",
        heading: "How long to practice",
        body: [
          "Student Minds suggests 5 to 10 minutes, or longer if you can. The NHS suggests at least 5 minutes for its similar exercise. On busy days, a couple of minutes is still worth doing. For a routine, pick one moment every day, such as getting into bed, and keep it there. See [how to build a daily breathing habit](/guides/daily-breathing-habit).",
        ],
      },
      {
        id: "with-birch",
        heading: "7-11 with Birch",
        body: [
          "Birch's Gentle Wave preset paces the 7-11 rhythm for you, so you can stop counting and just follow. Set a time, like 5 minutes, or a number of cycles. On Apple Watch, haptic cues mark each in- and out-breath, which is handy in bed or on a commute.",
        ],
      },
    ],
    faqs: [
      ["How long should you do 7-11 breathing?", "5 to 10 minutes is the usual suggestion (Student Minds). Start with a couple of minutes if that is all you have."],
      ["What if I can't breathe out for 11?", "Shorten both numbers, for example 5 in and 8 out, then build up. The point is a longer out-breath than in-breath, not hitting exactly 11."],
      ["Is 7-11 breathing from the NHS?", "The NHS's breathing exercise for stress uses a steady count of up to 5 in and 5 out for at least 5 minutes. 7-11 is a separate pattern taught by Student Minds and others. Both are slow, regular breathing."],
      ["7-11 vs 4-7-8: what's the difference?", "7-11 has no holds and is meant for several minutes. [4-7-8](/guides/4-7-8-breathing) adds a 7-count hold and is done as a short set of four breaths. Both have a long exhale."],
      ["Can I do 7-11 breathing lying down?", "Yes. Lying on your back with your knees bent is comfortable, and it's a natural way to wind down in bed."],
    ],
    sources: [S.sm711, S.nhs, S.zaccaro],
    related: ["4-7-8-breathing", "4-6-breathing", "breathing-exercises-for-sleep"],
    published: PUB,
    updated: PUB,
  },

  /* ------------------------------------------------------------ Coherent */
  {
    slug: "coherent-breathing",
    title: "Coherent Breathing: How to Breathe 5 Times a Minute",
    description:
      "Coherent (resonance) breathing is about 6 seconds in, 6 out: five breaths a minute. How to do it with a free live pacer, how long to practice, and how it compares.",
    h1: "How to do coherent breathing",
    kicker: "Breathing guide · Heart Coherence 6-6",
    query: "coherent breathing how to",
    answer:
      "To do coherent breathing, breathe in smoothly through your nose for about 6 seconds and out for about 6 seconds, with no pauses in between. That works out to roughly five breaths per minute. Keep the breath quiet and easy, not deep and forced. Start with 5 minutes and add time as it gets comfortable.",
    patterns: ["coherence"],
    totalTime: "PT5M",
    stepsHeading: "Coherent breathing, step by step",
    steps: [
      { name: "Sit tall and soften", time: "15 sec", text: "Sit upright with your shoulders relaxed, or lie on your back. Close your eyes or let your gaze rest on the pacer." },
      { name: "Breathe in for 6", time: "6 sec", text: "Breathe in through your nose for about six seconds, filling from the belly up. Aim for smooth, not big." },
      { name: "Breathe out for 6", time: "6 sec", text: "Breathe out for about six seconds at the same easy pace. No hold at the top or bottom; the breath just turns around." },
      { name: "Keep the wave going", time: "5 min", text: "Continue for about five minutes. Each in-and-out takes 12 seconds, so you're breathing about five times a minute." },
      { name: "Return to normal", time: "30 sec", text: "Let your breath go back to its own rhythm for a few breaths before you open your eyes." },
    ],
    sections: [
      {
        id: "what-it-is",
        heading: "What coherent breathing is",
        body: [
          "Coherent breathing means breathing slowly and evenly, with equal time in and out, at around five or six breaths a minute. You will also see it called **resonance breathing**, **resonant frequency breathing**, or **heart coherence breathing**. Some programs tune the exact pace to the person, but the even in-and-out rhythm is the same. Birch's version is **Heart Coherence 6-6**: 6 seconds in, 6 seconds out, five breaths a minute.",
          "Breathing at a slow, steady rhythm is also the basis of heart rate variability (HRV) biofeedback, which Lehrer and Gevirtz review in a 2014 paper. A 2018 systematic review of slow breathing (under 10 breaths a minute) in healthy people found links with higher HRV and with reports of feeling more relaxed and comfortable. You don't need a heart rate monitor to practice. A steady pacer is enough.",
        ],
      },
      {
        id: "who-its-for",
        heading: "Who it's for",
        body: [
          "Coherent breathing suits people who want a longer, meditative session without counting or holding. Because in and out are the same length, it feels natural for many people right away. It also works as a daily practice in the morning or at lunch, not just in tense moments.",
        ],
      },
      {
        id: "mistakes",
        heading: "Common mistakes",
        bullets: [
          "**Breathing too big.** Slow does not mean huge. Over-filling your lungs can leave you light-headed. Keep each breath quiet and comfortable.",
          "**Pausing at the turns.** There's no hold. Let the inhale turn smoothly into the exhale.",
          "**Watching the clock.** Follow a pacer or haptic cue instead of counting, so your attention can settle on the breath.",
          "**Giving up because 6 feels long.** Start at 5 in and 5 out (six breaths a minute, like [4-6 breathing](/guides/4-6-breathing)) and slow down over a week or two.",
        ],
      },
      {
        id: "how-long",
        heading: "How long to practice",
        body: [
          "Most coherent breathing routines are sessions of several minutes, not a few breaths. Five minutes is a realistic start. Many people work up to 10 or more once it feels easy. The NHS's guidance for slow breathing is similar: at least 5 minutes, ideally daily. Consistency matters more than length, so attach it to an existing routine (see [daily breathing habit](/guides/daily-breathing-habit)).",
        ],
      },
      {
        id: "compare",
        heading: "Coherent breathing vs 4-7-8 and box breathing",
        bullets: [
          "**vs [4-7-8](/guides/4-7-8-breathing):** 4-7-8 has a hold and a long exhale, done as a short set of four breaths. Coherent breathing is even, with no holds, done for minutes.",
          "**vs [box breathing](/guides/box-breathing):** box adds two holds and runs at about four breaths a minute at 4-second sides. Coherent breathing is a continuous wave.",
        ],
      },
      {
        id: "with-birch",
        heading: "Coherent breathing with Birch",
        body: [
          "Pick Heart Coherence 6-6 in Birch on iPhone or Apple Watch and set a time. On the Watch, haptic cues tell you when to turn the breath, so you can close your eyes. Sessions can count toward Mindful Minutes in Apple Health. Birch also has Slow-Paced 4-6 (six breaths a minute) if you want something in between.",
        ],
      },
    ],
    faqs: [
      ["Is coherent breathing the same as resonance breathing?", "They are closely related and often used interchangeably. Both describe slow, even breathing at about five to six breaths a minute. Resonance-frequency programs may fine-tune the exact pace for each person."],
      ["What is heart coherence breathing?", "It's another name for the same slow, even rhythm, often taught alongside heart rate variability. Birch's Heart Coherence preset is 6 seconds in and 6 seconds out."],
      ["How long should you do coherent breathing?", "Start with about 5 minutes a day and build up as it feels comfortable. Regular short sessions are easier to keep up than occasional long ones."],
      ["Do I need an HRV monitor or chest strap?", "No. You can practice with any steady pacer, like the one on this page or Birch. Monitors are optional extras."],
      ["Can I do coherent breathing on Apple Watch?", "Apple's built-in Breathe session has a breaths-per-minute setting, so you can approximate an even rhythm there. Birch's Watch app has a dedicated Heart Coherence 6-6 preset with haptic cues. See [breathing on Apple Watch](/guides/apple-watch-breathing)."],
    ],
    sources: [S.lehrer, S.zaccaro, S.nhs],
    related: ["4-6-breathing", "box-breathing", "apple-watch-breathing"],
    published: PUB,
    updated: PUB,
  },

  /* ------------------------------------------------------------------ 4-6 */
  {
    slug: "4-6-breathing",
    title: "4-6 Breathing: How to Do It (6 Breaths a Minute)",
    description:
      "4-6 breathing is inhale 4, exhale 6, no holds: six breaths a minute. How to do it with a free live pacer, how long to practice, and how it compares with box and 4-7-8.",
    h1: "How to do 4-6 breathing",
    kicker: "Breathing guide · Slow-Paced 4-6",
    query: "4-6 breathing technique",
    answer:
      "To do 4-6 breathing, inhale gently through your nose for 4 seconds, then exhale slowly for 6 seconds, without holding your breath. Each breath takes 10 seconds, so you breathe six times a minute. Keep it relaxed rather than deep, and continue for 3 to 5 minutes, or longer once it feels easy.",
    patterns: ["slow"],
    totalTime: "PT5M",
    stepsHeading: "4-6 breathing, step by step",
    steps: [
      { name: "Get comfortable", time: "10 sec", text: "Sit or lie down with your shoulders relaxed. Let your hands rest on your belly or thighs." },
      { name: "Inhale for 4", time: "4 sec", text: "Breathe in through your nose for four seconds, letting your belly expand." },
      { name: "Exhale for 6", time: "6 sec", text: "Breathe out for six seconds, slowly and smoothly, through your nose or softly through pursed lips." },
      { name: "No holds", time: "", text: "Go straight into the next inhale. The longer out-breath is the only twist." },
      { name: "Repeat for 3 to 5 minutes", time: "3–5 min", text: "That's 18 to 30 breaths. Use a pacer so you don't need to count." },
    ],
    sections: [
      {
        id: "what-it-is",
        heading: "What 4-6 breathing is",
        body: [
          "4-6 breathing is slow breathing with a slightly longer exhale: 4 seconds in, 6 seconds out. It works out to six breaths a minute. That is well under the 10 breaths a minute that a 2018 systematic review used as its cutoff for \"slow breathing.\" The review linked slow breathing in healthy people with higher heart rate variability and with reports of feeling more relaxed. In Birch this preset is called **Slow-Paced 4-6**.",
          "Because there are no holds and the counts are short, 4-6 is one of the easiest patterns to start with. It is a stepping stone to [coherent breathing](/guides/coherent-breathing) (6 in, 6 out) or [7-11](/guides/7-11-breathing).",
        ],
      },
      {
        id: "who-its-for",
        heading: "Who it's for",
        bullets: [
          "Beginners who find 4-7-8 or box breathing holds uncomfortable.",
          "Anyone who wants a quiet reset at a desk, in a queue, or on a walk. It's subtle enough that nobody will notice.",
          "People winding down at night who want a long-exhale rhythm that's easy to keep up in bed.",
        ],
      },
      {
        id: "mistakes",
        heading: "Common mistakes",
        bullets: [
          "**Taking huge breaths.** Slow, not big. Over-breathing can leave you light-headed.",
          "**Holding at the top.** There's no pause. Turn the breath around smoothly.",
          "**Pushing the exhale.** Six seconds should feel unhurried. If it's a strain, try 3 in and 5 out.",
          "**Counting in your head for minutes.** Counting can get tiring. Let a pacer or haptic cue keep the time.",
        ],
      },
      {
        id: "belly",
        heading: "Breathe low, not high",
        body: [
          "4-6 feels easiest when the breath moves your belly rather than your chest. Cleveland Clinic's guide to diaphragmatic breathing suggests a simple check: rest one hand on your upper chest and one just below your ribs. As you breathe in, the lower hand should rise while the upper hand stays fairly still. As you breathe out, the lower hand falls.",
          "If your shoulders creep up on the inhale, shorten the count for a few breaths, then come back to 4 and 6.",
        ],
      },
      {
        id: "how-long",
        heading: "How long to practice",
        body: [
          "Three to five minutes is a comfortable session. The NHS's slow breathing exercise suggests at least 5 minutes, and says regular practice as part of your daily routine gives the most benefit. Once 4-6 is easy, you can lengthen the session or move to 6-6.",
        ],
      },
      {
        id: "compare",
        heading: "4-6 vs box breathing and 4-7-8",
        bullets: [
          "**vs [box breathing](/guides/box-breathing):** box adds holds after the inhale and the exhale. 4-6 has none and puts the extra time into the exhale.",
          "**vs [4-7-8](/guides/4-7-8-breathing):** 4-7-8 is a short set of four breaths with a long hold. 4-6 is a gentle rhythm you can keep up for minutes.",
        ],
      },
      {
        id: "with-birch",
        heading: "4-6 breathing with Birch",
        body: [
          "Choose Slow-Paced 4-6 in Birch and set a time or number of cycles. On Apple Watch, a haptic tap marks each in- and out-breath. Log it alongside your other daily habits, so your breathing and your routine show up together across the week.",
        ],
      },
    ],
    faqs: [
      ["Is 4-6 breathing good for sleep?", "Many people like a long-exhale, no-hold rhythm at bedtime, and 4-6 is an easy one. It is a relaxation routine, not a sleep treatment. See [breathing exercises for sleep](/guides/breathing-exercises-for-sleep)."],
      ["How many breaths per minute is 4-6 breathing?", "Six. Each breath takes 10 seconds (4 in plus 6 out)."],
      ["4-6 breathing vs box breathing: which is better?", "Neither is better. 4-6 has no holds and a longer exhale, which many people find easier. Box breathing's equal sides feel steadying to others. Try both."],
      ["What if 6 seconds out feels too long?", "Try 3 in and 5 out. Keep the exhale longer than the inhale, and lengthen both as it gets easier."],
      ["Is there a 4-6 breathing timer?", "The pacer on this page is free to use. Birch's Slow-Paced 4-6 preset does the same on iPhone and Apple Watch, with haptic cues on the Watch."],
    ],
    sources: [S.zaccaro, S.nhs, S.ccDia],
    related: ["coherent-breathing", "7-11-breathing", "box-breathing"],
    published: PUB,
    updated: PUB,
  },

  /* --------------------------------------------------------------- Sleep */
  {
    slug: "breathing-exercises-for-sleep",
    title: "Breathing Exercises for Sleep: 4 Patterns to Try",
    description:
      "Four slow breathing patterns for bedtime (4-7-8, 7-11, 4-6 and 6-6) with a free live pacer, a 5-minute wind-down routine, and common mistakes to avoid.",
    h1: "Breathing exercises for sleep",
    kicker: "Breathing guide · Bedtime",
    query: "breathing exercises for sleep",
    answer:
      "For sleep, pick a slow pattern with a long exhale and do it in bed with the lights off. Try 4-7-8 (in 4, hold 7, out 8) for four breaths, 7-11 (in 7, out 11), or 4-6 (in 4, out 6) for a few minutes. Breathe through your nose, keep it soft, and stop if you feel light-headed.",
    patterns: ["weil", "wave", "slow", "coherence"],
    totalTime: "PT5M",
    stepsHeading: "A 5-minute bedtime breathing routine",
    steps: [
      { name: "Set up for sleep first", time: "1 min", text: "Lights low, phone face down or out of reach, alarm already set. Lie on your back or your side." },
      { name: "Let out a long breath", time: "10 sec", text: "Breathe out slowly through your mouth to mark the switch from day to night." },
      { name: "Pick one pattern", time: "", text: "4-7-8 if you like a short, set routine. 7-11 or 4-6 if you'd rather not hold your breath. Use the same one each night." },
      { name: "Breathe for about 3 to 5 minutes", time: "3–5 min", text: "Four breaths of 4-7-8 (repeat a set if you like), or a few minutes of 7-11, 4-6, or 6-6. Follow a pacer or haptic cue instead of counting." },
      { name: "Let the pattern go", time: "", text: "When the time is up, stop counting and let your breathing find its own pace. Don't check whether it \"worked.\"" },
    ],
    sections: [
      {
        id: "which",
        heading: "Which breathing exercise is best for sleep?",
        body: [
          "There isn't one best pattern. The Sleep Foundation lists several popular options, including belly breathing, box breathing, and 4-7-8. Pick the one you find most comfortable. These four are all in Birch:",
        ],
        bullets: [
          "**[4-7-8](/guides/4-7-8-breathing)** (inhale 4, hold 7, exhale 8): a short four-breath routine. Dr. Weil suggests it to help you fall asleep.",
          "**[7-11](/guides/7-11-breathing)** (inhale 7, exhale 11): no holds, a long, wave-like exhale, done for several minutes.",
          "**[4-6](/guides/4-6-breathing)** (inhale 4, exhale 6): the easiest long-exhale rhythm, six breaths a minute.",
          "**[Coherent 6-6](/guides/coherent-breathing)** (inhale 6, exhale 6): even and steady, five breaths a minute.",
        ],
      },
      {
        id: "why",
        heading: "Why slow breathing at bedtime",
        body: [
          "Slow breathing is one way to bring on what the NIH's NCCIH calls the relaxation response: slower breathing, lower blood pressure, and a lower heart rate, the opposite of the stress response. A wind-down routine also gives your mind one simple thing to follow instead of replaying the day. Many people find that the routine itself becomes a signal that it's time to sleep.",
        ],
      },
      {
        id: "who-its-for",
        heading: "Who it's for",
        body: [
          "Anyone who wants a calmer, more consistent wind-down. If you have ongoing trouble falling or staying asleep, snore heavily, or wake up gasping, talk to a doctor. Breathing exercises aren't a substitute for care.",
        ],
      },
      {
        id: "mistakes",
        heading: "Common mistakes",
        bullets: [
          "**Doing it on a bright screen.** Use audio, haptics, or memory. Birch's Apple Watch app taps your wrist for each phase, so your eyes can stay closed.",
          "**Trying too hard.** Big, forceful breaths are energizing. Keep every breath quiet.",
          "**Switching patterns every night.** Repetition is part of the cue. Keep one for at least a week or two.",
          "**Judging it by whether you fell asleep.** Count it as done when you did it. The habit is the win.",
        ],
      },
      {
        id: "how-long",
        heading: "How long to practice",
        body: [
          "Three to five minutes in bed is plenty. With 4-7-8, Dr. Weil suggests four breaths at a time for the first month. A short daytime session helps too: it's easier to use a pattern at night once it's familiar. See [how to build a daily breathing habit](/guides/daily-breathing-habit).",
        ],
      },
      {
        id: "with-birch",
        heading: "Bedtime breathing with Birch",
        body: [
          "Birch has all four of these patterns on iPhone and Apple Watch. Set a time or number of cycles once, then start from your wrist in the dark. Add a \"wind down\" habit with a reminder at the time you want to be in bed, and see it beside your breathing across the week.",
        ],
      },
    ],
    faqs: [
      ["What is the best breathing exercise to fall asleep?", "The one you'll actually do every night. 4-7-8, 7-11, and 4-6 are popular because they slow you down and have a long exhale. Pick one, keep it for a couple of weeks, and see how it feels."],
      ["How can I fall asleep fast with breathing?", "No breathing exercise can guarantee fast sleep. A few minutes of slow, long-exhale breathing in a dark room is a calm way to wind down. If sleep problems last, see a doctor."],
      ["Should I breathe through my nose or mouth?", "Most guides suggest breathing in through your nose. With 4-7-8, you breathe out through your mouth. With 7-11 and 4-6, either is fine, as long as it's soft."],
      ["How long before bed should I do breathing exercises?", "Right as you lie down works well. Some people also do a short session 30 to 60 minutes before bed as part of a wider wind-down."],
      ["Is there a free sleep breathing app?", "Birch is free on iPhone and Apple Watch, with no ads, no subscription, and no account. Its Watch app guides each breath with haptics, so you don't need to look at a screen."],
    ],
    sources: [S.sleepfdn, S.nccih, S.weil, S.sm711],
    related: ["4-7-8-breathing", "7-11-breathing", "4-6-breathing"],
    published: PUB,
    updated: PUB,
  },

  /* --------------------------------------------------------- Apple Watch */
  {
    slug: "apple-watch-breathing",
    title: "Breathing on Apple Watch: Breathe App vs Patterns",
    description:
      "How to use Breathe in the Apple Watch Mindfulness app, change the breath rate, and do 4-7-8, box, or 7-11 breathing on your wrist with haptic cues.",
    h1: "How to do breathing exercises on Apple Watch",
    kicker: "Breathing guide · Apple Watch",
    query: "breathing app for apple watch",
    answer:
      "On Apple Watch, open the Mindfulness app and tap Breathe. Breathe in as the animation grows and out as it shrinks, for 1 to 5 minutes. Change the breaths per minute in Settings > Mindfulness. For patterns with holds or longer exhales, like 4-7-8, box, or 7-11, use an app such as Birch, which cues each phase with haptics.",
    patterns: ["box", "weil", "wave", "balance", "slow", "coherence"],
    totalTime: "PT3M",
    stepsHeading: "Start a Breathe session on Apple Watch",
    steps: [
      { name: "Open Mindfulness", time: "5 sec", text: "Open the Mindfulness app on your Apple Watch." },
      { name: "Set the duration", time: "10 sec", text: "Tap the more button next to Breathe, tap Duration, and pick a time between 1 and 5 minutes." },
      { name: "Adjust breath rate and haptics (optional)", time: "30 sec", text: "Open Settings on the watch, tap Mindfulness, then tap Breath Rate to set breaths per minute, or Haptics to choose None, Minimal, or Prominent. You can also change these in the Watch app on iPhone under My Watch > Mindfulness." },
      { name: "Start and follow", time: "1–5 min", text: "Tap Breathe. Inhale slowly as the animation grows and exhale as it shrinks. To end early, swipe right and tap End." },
      { name: "Check your summary", time: "10 sec", text: "Your heart rate appears on the summary screen. You can find it later in the Health app on iPhone." },
    ],
    sections: [
      {
        id: "builtin",
        heading: "What Apple's Breathe session is good for",
        body: [
          "The Breathe session in Apple's Mindfulness app is free, built in, and simple. You follow one animation in and out, at a breath rate you choose, for 1 to 5 minutes. It also offers reminders and a weekly summary. If an even in-and-out rhythm is all you want, it's a great place to start. Set the breath rate to five or six a minute and you have something close to [coherent breathing](/guides/coherent-breathing).",
        ],
      },
      {
        id: "patterns",
        heading: "When you want a breathing pattern app",
        body: [
          "Many popular techniques have holds or uneven timings that a single in-and-out animation doesn't cover: [4-7-8](/guides/4-7-8-breathing) (hold 7, exhale 8), [box breathing](/guides/box-breathing) (four equal sides with two holds), and [7-11](/guides/7-11-breathing) (a much longer exhale). For those, a pattern app that cues each phase on your wrist is easier than counting in your head.",
          "What to look for in a breathing app for Apple Watch:",
        ],
        bullets: [
          "**Distinct haptics for each phase**, so you can follow with your eyes closed.",
          "**The patterns you actually use**, with the timings shown.",
          "**Short session options** (a minute or two) for real-life use.",
          "**Apple Health support**, so sessions count toward Mindful Minutes.",
          "**No paywall surprises**: check for subscriptions, ads, and account requirements.",
        ],
      },
      {
        id: "birch",
        heading: "Birch on Apple Watch",
        body: [
          "Birch's Watch app (new in Birch 3.5) has six patterns: Weil Method 4-7-8, Box Breathing 4-4-4-4, Gentle Wave 7-11, Balance 3-3-6-3 (inhale 3, hold 3, exhale 6, hold 3), Heart Coherence 6-6, and Slow-Paced 4-6. Sessions run from 1 to 5 minutes, with gentle haptic cues for each breath. Completed sessions sync to Birch on your iPhone and can save Mindful Minutes to Apple Health. It requires watchOS 11 or later and is free, with no ads, no subscription, and no account.",
          "On iPhone, Birch puts your breathing beside simple daily habits, like drinking water, taking vitamins, or a walk, so you can see both across your week and month.",
        ],
      },
      {
        id: "who-its-for",
        heading: "Who it's for",
        body: [
          "Apple Watch breathing works best for quick resets during the day, when pulling out a phone isn't practical, and for bedtime, when you don't want a bright screen. If you just need a nudge to breathe slowly, Apple's Breathe is enough. If you've learned a specific pattern, use an app built for it.",
        ],
      },
      {
        id: "mistakes",
        heading: "Common mistakes",
        bullets: [
          "**Staring at the screen.** Turn up haptics and close your eyes. Your wrist will tell you when to switch.",
          "**Setting the rate too slow too soon.** Very slow rates can feel like a struggle at first. Start around six breaths a minute.",
          "**Dismissing every reminder.** Move reminders to times you can actually breathe (after lunch, before bed) instead of ignoring them.",
        ],
      },
      {
        id: "how-long",
        heading: "How long to practice",
        body: [
          "Apple's sessions run 1 to 5 minutes, and so do Birch's Watch sessions. That range lines up with common guidance, like Cleveland Clinic's three or four rounds of box breathing once or twice a day, or the NHS's at least 5 minutes of slow breathing. See [how to build a daily breathing habit](/guides/daily-breathing-habit).",
        ],
      },
    ],
    faqs: [
      ["How do I change the breathing rate on Apple Watch?", "Open Settings on the watch, tap Mindfulness, then Breath Rate, and choose breaths per minute. You can also do it in the Watch app on iPhone: My Watch > Mindfulness."],
      ["What's the difference between Reflect and Breathe?", "In Apple's Mindfulness app, Reflect gives you a theme to read and focus on. Breathe guides slow breathing with an animation that grows and shrinks."],
      ["Can Apple Watch do box breathing or 4-7-8?", "The built-in Breathe session is an in-and-out rhythm without set holds. Birch's free Watch app has Box Breathing 4-4-4-4 and Weil Method 4-7-8 presets with haptic cues."],
      ["Do Birch's Watch sessions count toward Mindful Minutes?", "Yes. Completed sessions can save Mindful Minutes to Apple Health and sync to Birch on your iPhone."],
      ["What's the best free breathing app for Apple Watch?", "It depends on what you need. Apple's Breathe is free and built in for even breathing. Birch is free for patterned breathing (4-7-8, box, 7-11, and more), with no ads, no subscription, and no account."],
      ["Which watchOS version does Birch need?", "watchOS 11 or later."],
    ],
    sources: [S.apple, S.ccBox, S.nhs],
    related: ["box-breathing", "4-7-8-breathing", "coherent-breathing"],
    published: PUB,
    updated: PUB,
  },

  /* ------------------------------------------------- Build a Habit */
  {
    slug: "how-to-build-a-habit",
    title: "How to Build a Daily Habit (Steps + Free Habit Tracker)",
    description:
      "How to start a daily habit and make it stick: tiny habits, habit stacking, reminders, streaks, and tracking. Free habit tracker for iOS and Apple Watch.",
    h1: "How to build a daily habit",
    kicker: "Guide · Habit building",
    query: "how to build a daily habit",
    answer:
      "To build a daily habit, start tiny (one push-up, one glass of water), stack it right after something you already do every day, set a reminder as backup, and track your streaks. Make it so small it feels too easy to skip. The easier it is on day one, the more likely it becomes automatic.",
    patterns: [],
    totalTime: "PT2M",
    stepsHeading: "Build a habit that sticks in 6 steps",
    steps: [
      { name: "Pick one small thing", time: "1 min", text: "Choose one habit you want to build. Just one. Make it tiny: one glass of water, one push-up, two minutes of reading. Small beats ambitious." },
      { name: "Find an anchor", time: "1 min", text: "Pick something you already do every day at roughly the same time: pouring coffee, brushing teeth, sitting at your desk, getting into bed." },
      { name: "Write the habit stack", time: "30 sec", text: "\"After I [anchor], I will [new habit].\" Example: \"After I pour my morning coffee, I will drink one glass of water.\" Be specific." },
      { name: "Set a reminder", time: "30 sec", text: "Put a reminder at the anchor time as a safety net. The anchor is the main trigger, the reminder is backup." },
      { name: "Track it", time: "10 sec", text: "Mark it done each day. Use an app, a calendar, a notebook, anything that lets you see your streak grow." },
      { name: "Don't break the chain", time: "", text: "Miss one day? Fine. Miss two days in a row? That's where habits slip. Get back on track the next day." },
    ],
    sections: [
      {
        id: "what-it-is",
        heading: "What a daily habit is",
        body: [
          "A daily habit is something you do every day, without thinking about it much, usually triggered by something else. Brushing your teeth after breakfast is a habit. Checking your phone when you wake up is a habit. A habit is automatic, not a decision.",
          "Building a new daily habit means making a new behavior automatic. That takes repetition, a consistent trigger, and making it easy enough that you don't need willpower. Most advice says it takes 21 days to form a habit. That number is a myth, based on a misreading of old research. Real research (Lally et al., 2009) found it took anywhere from 18 to 254 days, with an average of 66 days. The simpler the habit, the faster it stuck.",
        ],
      },
      {
        id: "start-tiny",
        heading: "Start tiny, really tiny",
        body: [
          "BJ Fogg's Tiny Habits research shows that starting small is the single best predictor of success. One push-up is better than ten. One glass of water is better than eight. Two minutes of reading is better than a chapter. You can always do more once you're there, but the habit is just showing up.",
          "Why tiny works: it removes the friction. On a tired day, \"go to the gym for an hour\" feels impossible. \"Do one push-up\" does not. Once you've done the tiny version for a week or two, you can grow it. But most people start too big and quit.",
        ],
      },
      {
        id: "stacking",
        heading: "Habit stacking: the easiest trigger",
        body: [
          "Habit stacking, described by James Clear and based on BJ Fogg's work, pairs your new habit with something you already do. The formula: **After [current habit], I will [new habit].**",
        ],
        bullets: [
          "After I pour my morning coffee, I will drink one glass of water.",
          "After I brush my teeth at night, I will do ten push-ups.",
          "After I sit down at my desk, I will write one sentence in my journal.",
          "After I get into bed, I will read for two minutes.",
          "After I park the car at home, I will take five deep breaths before I go in.",
        ],
      },
      {
        id: "stacking-anchor",
        heading: "Choose the right anchor",
        body: [
          "The anchor has to be something you already do at the same time every day. \"After I eat lunch\" is too vague because lunch moves around. \"After I close my laptop at the end of the work day\" is better. The more consistent the timing and location of your anchor, the more reliable your new habit becomes.",
        ],
      },
      {
        id: "reminders",
        heading: "Reminders are backup, not the main trigger",
        body: [
          "Set a reminder at the time you chose, but don't rely on it as your only trigger. Reminders get dismissed. Anchors are automatic. Use the reminder to catch you on days when the routine changes. For habits tied to a fixed time (take vitamins at 8 AM), a reminder is the trigger. For everything else, the anchor does more of the work.",
        ],
      },
      {
        id: "tracking",
        heading: "Track your streaks",
        body: [
          "Tracking makes progress visible. A streak is a simple count of consecutive days. Seeing \"12 days\" makes you want to see \"13 days.\" That's not gamification, it's feedback. You can track on paper (cross off each day on a calendar), in a notes app, or with a habit tracker.",
          "What matters is that you can see your streak at a glance. Monthly summaries help too: \"I did this 24 out of 31 days in October\" is useful information. It shows you kept going even when some days got skipped.",
        ],
      },
      {
        id: "dont-break",
        heading: "Don't break the chain (but one miss is fine)",
        body: [
          "The \"don't break the chain\" rule, popularized by a story about Jerry Seinfeld (whether true or not, the advice is sound), says to do the habit every single day and mark it on a calendar. Your only job is to not break the chain of X marks.",
          "But here's the real rule: missing one day is normal. Life happens. Missing two days in a row is where habits die. If you miss a day, just do it the next day. Don't wait for Monday. Don't start over. Just pick it back up.",
        ],
      },
      {
        id: "mistakes",
        heading: "Common mistakes",
        bullets: [
          "**Starting too big.** \"Exercise for an hour every day\" lasts a week. \"Do one push-up every day\" lasts.",
          "**Picking five habits at once.** Pick one. When that one is automatic, add another.",
          "**No clear anchor.** \"I'll do it sometime in the morning\" means you'll forget. \"After I pour my coffee\" means it happens.",
          "**All-or-nothing thinking.** One missed day doesn't erase your progress. Two missed days in a row starts a new pattern of not doing it.",
          "**Relying on motivation.** Motivation fades. A good anchor and a tiny habit don't need motivation.",
        ],
      },
      {
        id: "breathing",
        heading: "Building a breathing habit",
        body: [
          "Breathing exercises are a good first habit because they're quick (one to five minutes), require no equipment, and can be done almost anywhere. The challenge is remembering to do them. Habit stacking solves that: \"After I get into bed, I will do [4-7-8 breathing](/guides/4-7-8-breathing) for four breaths.\" Or: \"After I sit down at my desk in the morning, I will do one minute of [box breathing](/guides/box-breathing).\"",
          "See [how to build a daily breathing habit](/guides/daily-breathing-habit) for breathing-specific guidance.",
        ],
      },
      {
        id: "with-birch",
        heading: "Track habits in Birch",
        body: [
          "Birch keeps daily habits beside your breathing. Log water, vitamins, reading, walking, fasting, meditation, or create your own with any emoji and color. Yes/no or a count, logged in one tap. Set gentle reminders at times you choose. See your streaks, weekly progress, and monthly summaries. Missed a day? Fill it in. Birch is free on iPhone and Apple Watch, with no ads, no account, and no subscription.",
        ],
      },
    ],
    faqs: [
      ["How long does it take to build a daily habit?", "Research suggests an average of 66 days, with a wide range from 18 to 254 days depending on the habit and the person. Simpler habits (like drinking water) form faster than complex ones (like daily exercise). The \"21 days\" claim is a myth."],
      ["What is habit stacking?", "Habit stacking means pairing a new habit with something you already do every day. The formula: \"After [current habit], I will [new habit].\" It's easier than trying to remember a habit out of nowhere."],
      ["Should I track my habits?", "Yes. Tracking makes progress visible and builds momentum. A simple calendar with X marks for each day works. Apps like Birch show streaks, weekly progress, and monthly summaries in one place."],
      ["What if I miss a day?", "Missing one day is fine. Just do it the next day. Don't wait for a fresh Monday or a new month. Missing two days in a row is where habits slip, so get back on track right away."],
      ["How many habits should I start at once?", "One. When that one is automatic (you don't think about it anymore), add another. Most people who try to build five habits at once end up with zero habits."],
      ["What is the best time of day to build a habit?", "The best time is whenever you already have a reliable anchor. Morning routines (after coffee, after brushing teeth) are popular because they're consistent. Bedtime routines work too. The anchor matters more than the clock time."],
      ["Is Birch a good habit tracker?", "Birch is designed for small daily habits: yes/no or a count, with gentle reminders, streaks, and monthly summaries. It keeps your habits next to your breathing, both in one place, free with no ads or account."],
    ],
    sources: [S.clear, { label: "BJ Fogg — Tiny Habits: The Small Changes That Change Everything", url: "https://tinyhabits.com/" }, { label: "Lally et al., 2009. How are habits formed: Modelling habit formation in the real world. European Journal of Social Psychology", url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/ejsp.674" }],
    related: ["daily-breathing-habit"],
    published: PUB,
    updated: PUB,
  },

  /* --------------------------------------------------------------- Habit */
  {
    slug: "daily-breathing-habit",
    title: "How Long Should You Do Breathing Exercises Daily?",
    description:
      "How many minutes a day to do breathing exercises, and how to make it a daily habit that sticks with habit stacking, reminders, and streaks.",
    h1: "How long should you do breathing exercises?",
    kicker: "Guide · Breathing + habits",
    query: "how long should you do breathing exercises",
    answer:
      "Most guidance suggests short, regular sessions, from a few breaths to about 5 minutes, once or twice a day, rather than long sessions now and then. Cleveland Clinic suggests 4-7-8 twice a day. The NHS suggests at least 5 minutes of slow breathing, and says regular practice helps most. Tie it to a daily habit so it sticks.",
    patterns: ["slow", "weil", "box", "wave", "coherence"],
    totalTime: "PT5M",
    stepsHeading: "Build a daily breathing habit in 6 steps",
    steps: [
      { name: "Pick one pattern", time: "1 min", text: "Choose the one that felt easiest: [4-6](/guides/4-6-breathing) or [coherent](/guides/coherent-breathing) for no holds, [4-7-8](/guides/4-7-8-breathing) or [box](/guides/box-breathing) for structure." },
      { name: "Pick an anchor", time: "1 min", text: "Choose something you already do every day: pouring coffee, sitting down at your desk, getting into bed." },
      { name: "Write the habit stack", time: "1 min", text: "\"After I pour my morning coffee, I will do four breaths of 4-7-8.\" Specific beats vague." },
      { name: "Start tiny", time: "1–2 min", text: "One or two minutes a day. You can always do more. Small makes it hard to skip." },
      { name: "Set a reminder", time: "30 sec", text: "Put a reminder at the anchor time as a backup, not as the main trigger." },
      { name: "Log it and look weekly", time: "10 sec", text: "Mark it done. Once a week, glance at your week or month. Missed days happen. Just pick it up again." },
    ],
    sections: [
      {
        id: "per-session",
        heading: "How long per session, by pattern",
        bullets: [
          "**[4-7-8](/guides/4-7-8-breathing):** four breaths, at least twice a day (Dr. Weil). Cleveland Clinic suggests three cycles twice a day while learning.",
          "**[Box breathing](/guides/box-breathing):** three to four rounds, once or twice a day (Cleveland Clinic).",
          "**[7-11](/guides/7-11-breathing):** 5 to 10 minutes (Student Minds).",
          "**Slow breathing in general ([4-6](/guides/4-6-breathing), [coherent](/guides/coherent-breathing)):** at least 5 minutes, ideally daily (NHS).",
          "**Belly (diaphragmatic) breathing practice:** 5 to 10 minutes, three to four times a day at first (Cleveland Clinic).",
        ],
      },
      {
        id: "how-long-to-work",
        heading: "How long do breathing exercises take to work?",
        body: [
          "Many people notice they feel calmer during or right after a session. Whether it adds up over weeks is less certain, and it varies from person to person. A 2023 meta-analysis of randomized trials found breathwork was linked to lower self-reported stress than control conditions, with a small-to-medium effect. The authors urged caution about hype. In a Stanford study, people practiced for just 5 minutes a day for a month.",
          "So the honest answer: expect a short-term reset now, and treat any longer-term change as a bonus of doing it regularly. That's why the habit matters more than the length of any one session.",
        ],
      },
      {
        id: "stacking",
        heading: "Habit stacking: the easiest way to remember",
        body: [
          "Habit stacking, described by James Clear and based on BJ Fogg's Tiny Habits work, pairs a new habit with one you already do. The formula is: **After [current habit], I will [new habit].** A few breathing stacks:",
        ],
        bullets: [
          "After I pour my morning coffee, I will do four breaths of 4-7-8.",
          "After I sit down at my desk, I will do one minute of box breathing.",
          "After I park the car at home, I will do five breaths of 4-6 before I go in.",
          "After I get into bed, I will do 7-11 breathing until the timer ends.",
        ],
      },
      {
        id: "general-habits",
        heading: "Building any daily habit",
        body: [
          "This same approach works for any daily habit, not just breathing. See [how to build a habit](/guides/how-to-build-a-habit) for the complete method: starting tiny, choosing the right anchor, tracking streaks, and making it stick.",
        ],
      },
      {
        id: "who-its-for",
        heading: "Who it's for",
        body: [
          "This is for anyone who has tried breathing exercises, liked them, and then forgot about them. It's the most common way people fall off. If you already keep other small daily habits, like water, vitamins, or a walk, breathing fits right beside them.",
        ],
      },
      {
        id: "mistakes",
        heading: "Common mistakes",
        bullets: [
          "**Starting too big.** 20 minutes a day sounds great and lasts a week. Two minutes lasts.",
          "**Relying only on motivation.** Use an anchor and a reminder. Don't wait to feel like it.",
          "**All-or-nothing streaks.** Missing one day is normal. Missing two is where habits slip, so just do the next one.",
          "**Changing patterns constantly.** Pick one and give it a few weeks before you switch.",
        ],
      },
      {
        id: "with-birch",
        heading: "Tracking breathing and habits in Birch",
        body: [
          "Birch was built for this. Breathe with any of six patterns on iPhone or Apple Watch, and keep small yes/no or count habits (drink water, take vitamins, read, walk, or your own) on the same screen. Set gentle reminders at times you choose. Your breathing cycles, completed habits, streaks, and monthly summaries show together. Missed a day? Log today or update a recent day. Progress without pressure, free with no ads or account.",
        ],
      },
    ],
    faqs: [
      ["How many minutes a day should I do breathing exercises?", "Start with 1 to 5 minutes, once or twice a day. Common guidance ranges from four breaths of 4-7-8 twice a day to at least 5 minutes of slow breathing (NHS)."],
      ["How long do breathing exercises take to work?", "Many people feel calmer during a session. Longer-term changes are less certain and vary. Research on regular breathwork is promising but mixed, so treat consistency as the goal."],
      ["Is it better to do breathing exercises in the morning or at night?", "Whichever you'll keep. Morning stacks (after coffee) are easy to remember. Bedtime stacks double as a wind-down. Some people do both."],
      ["What if I miss a day?", "Just do the next one. A missed day doesn't erase anything. In Birch you can also log a recent day you forgot to record."],
      ["Can I track breathing as a habit?", "Yes. Birch shows breathing sessions beside your daily habits across your week and month, with streaks and reminders."],
    ],
    sources: [S.weil, S.cc478, S.ccBox, S.sm711, S.nhs, S.ccDia, S.fincham, S.balban, S.clear],
    related: ["4-7-8-breathing", "box-breathing", "how-to-build-a-habit"],
    published: PUB,
    updated: PUB,
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);

export const GUIDES_INDEX = {
  title: "Breathing Exercise Guides: 4-7-8, Box, 7-11 & More",
  description:
    "Free step-by-step guides to 4-7-8, box, 7-11, coherent, and 4-6 breathing, each with a live pacer, plus breathing for sleep, Apple Watch, and building a daily habit.",
  updated: PUB,
};

/** Strip inline markup for plain-text contexts (JSON-LD, meta). */
export const plain = (s: string) =>
  s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");
