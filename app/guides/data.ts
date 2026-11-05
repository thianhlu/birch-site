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
  mayo: { label: "Mayo Clinic — Water: How much should you drink every day?", url: "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/water/art-20044256" },
  cdc_water: { label: "CDC — Get the Facts: Drinking Water and Intake", url: "https://www.cdc.gov/nutrition/php/tips/drinking-water.html" },
  aafp_meds: { label: "American Academy of Family Physicians — How to Take Your Medicines", url: "https://familydoctor.org/how-to-take-your-medicines/" },
  acsm: { label: "American College of Sports Medicine — Physical Activity Guidelines", url: "https://www.acsm.org/education-resources/trending-topics-resources/physical-activity-guidelines" },
  sleepfdn_routine: { label: "Sleep Foundation — Bedtime Routine for Adults", url: "https://www.sleepfoundation.org/sleep-hygiene/bedtime-routine-for-adults" },
  ccStretch: { label: "Cleveland Clinic — Benefits of Stretching and Why It Feels Good", url: "https://health.clevelandclinic.org/benefits-of-stretching" },
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
    related: ["4-7-8-breathing", "box-breathing", "breathing-exercises-for-sleep"],
    published: PUB,
    updated: PUB,
  },

  /* ---------------------------------------------------------- Water Habit */
  {
    slug: "how-to-drink-more-water",
    title: "How to Make Drinking Water a Habit (Steps + Free Water Tracker)",
    description:
      "Six practical steps to make drinking water a daily habit, with cues, reminders, count tracking on Apple Watch, and a free habit tracker app.",
    h1: "How to Make Drinking Water a Habit",
    kicker: "Guide · Habit building",
    query: "how to make drinking water a habit",
    answer:
      "To make drinking water a habit, tie it to existing routines (drink a glass after waking, with meals, or after each bathroom break), use visual cues like a marked bottle, set a reminder, and track each glass with a simple check. Birch lets you log water by count on Apple Watch and set gentle reminders across your day.",
    patterns: [],
    totalTime: "PT5M",
    stepsHeading: "Build a daily water habit in 6 steps",
    steps: [
      { name: "Pick your target count", time: "1 min", text: "Most people aim for about 8 glasses a day. If a doctor or dietitian gave you a different target, use theirs. If you have been told to limit fluids, follow that guidance." },
      { name: "Stack it with existing habits", time: "2 min", text: "After I wake up, I drink a glass. After I use the bathroom, I drink water. After I start work, I fill my bottle. After each meal, one glass. Anchor water to things you already do every day." },
      { name: "Use a visual cue", time: "1 min", text: "Keep a reusable bottle on your desk, mark the side with times or counts, or set out the number of glasses you want to finish by bedtime." },
      { name: "Set one or two reminders", time: "1 min", text: "Midmorning and midafternoon, or whatever times you tend to forget. Just enough to nudge, not nag." },
      { name: "Track each glass or bottle", time: "10 sec per glass", text: "Mark it done right after you drink. A simple count (one, two, three…) beats trying to remember at the end of the day. On Apple Watch, one tap logs it." },
      { name: "Review weekly", time: "1 min", text: "At the end of the week, look at your count across the days. Most people see a pattern: weekends dip, or mornings are easier than afternoons. Adjust cues or reminders where the gaps are." },
    ],
    sections: [
      {
        id: "why",
        heading: "Why it's hard to remember",
        body: [
          "Drinking water has no built-in alarm. You might notice thirst when it's strong, but mild thirst is easy to ignore until you have a headache or feel sluggish. By then you have already been under-hydrated for a while. Making it a habit means you drink before you feel bad, and you stop having to think about it.",
        ],
      },
      {
        id: "how-much",
        heading: "How much water should you drink?",
        body: [
          "Mayo Clinic's guidance suggests about 15.5 cups (3.7 liters) of fluids a day for men and 11.5 cups (2.7 liters) for women, from all beverages and food. About 20% typically comes from food. The old \"8 glasses a day\" is a rough shorthand, not a hard rule. More if you exercise, sweat a lot, or live somewhere hot. Less if a doctor told you to limit fluids (for example, with certain heart or kidney conditions). When in doubt, check with a clinician. The CDC notes that most people can use thirst and the color of their urine as a guide: pale yellow is good.",
        ],
      },
      {
        id: "who-its-for",
        heading: "Who it's for",
        body: [
          "Anyone who gets to the end of the day and realizes they only drank coffee. Anyone whose thirst cue is weak. Anyone a doctor told to drink more. If you have been told to limit your fluid intake, this habit-building approach still applies—just set your count to match your limit and track that instead.",
        ],
      },
      {
        id: "mistakes",
        heading: "Common mistakes",
        bullets: [
          "**No cue, just willpower.** Remembering to drink is hard. Stack it with bathroom breaks or meals so it happens automatically.",
          "**Tracking at the end of the day.** You'll forget half. Log each glass right after you drink it.",
          "**Setting ten reminders.** One or two well-placed reminders beat constant notifications you start ignoring.",
          "**Switching units (glasses vs bottles vs ounces).** Pick one count (glasses, bottles, or whatever feels simple) and stick with it all month. Birch lets you count by number so you don't have to do math.",
          "**Treating one slip as failure.** Missed yesterday? Log today. Consistency beats perfection.",
        ],
      },
      {
        id: "stacking",
        heading: "Best habit stacks for water",
        bullets: [
          "After I wake up, I drink a full glass of water before coffee.",
          "After I use the bathroom, I drink water (bathroom trips are a built-in reminder).",
          "After I sit down at my desk, I fill my water bottle.",
          "After each meal, I drink one glass.",
          "After I finish a work block, I drink water before I check my phone.",
        ],
      },
      {
        id: "with-birch",
        heading: "Tracking water in Birch",
        body: [
          "Birch has a water habit you can log by count: one tap per glass on iPhone or Apple Watch. Set a reminder at a time that works (midmorning, after lunch, whatever fits your day). Your daily total, weekly pattern, and monthly summary show on one screen alongside your breathing and other small habits. Missed a day? Update a recent date. Free, no ads, no account.",
        ],
      },
    ],
    faqs: [
      ["How many glasses of water should I drink a day?", "Eight glasses (about 64 oz or 2 liters) is common advice. Mayo Clinic's broader guidance is about 11.5 to 15.5 cups of total fluids a day (including from food), varying by sex, activity, and climate. If a healthcare provider gave you a different target or told you to limit fluids, follow their advice."],
      ["How do I remember to drink water every day?", "Stack it with an existing habit (after waking, with meals, after bathroom breaks), use a visual cue like a marked bottle, set a reminder, and track each glass right after you drink it. Tracking on Apple Watch makes it one tap."],
      ["What if I don't like plain water?", "Herbal tea, sparkling water, and water with a slice of lemon or cucumber all count. The point is hydration, not forcing yourself to drink something you hate."],
      ["How long does it take to form a water-drinking habit?", "It varies. Some studies suggest 2 to 8 weeks for a simple habit. The key is daily tracking and tying it to something you already do. You'll know it's a habit when you reach for water without thinking."],
      ["Is there a free water tracker for Apple Watch?", "Birch is free for iPhone and Apple Watch. Log water by count with one tap, set reminders, see your daily and weekly totals, and track it alongside breathing and other habits. No ads, no subscription, no account."],
    ],
    sources: [S.mayo, S.cdc_water, S.clear],
    related: ["daily-breathing-habit", "how-to-remember-to-take-vitamins", "daily-walk-habit"],
    published: PUB,
    updated: PUB,
  },

  /* -------------------------------------------------------- Vitamin Habit */
  {
    slug: "how-to-remember-to-take-vitamins",
    title: "How to Remember to Take Your Vitamins Every Day",
    description:
      "Six steps to make taking vitamins a daily habit: cues, pill organizers, reminders, and simple yes/no tracking on Apple Watch with a free habit tracker.",
    h1: "How to Remember to Take Your Vitamins Every Day",
    kicker: "Guide · Habit building",
    query: "how to remember to take vitamins",
    answer:
      "To remember your vitamins, keep them next to something you use every morning (coffee maker, toothbrush), use a daily pill organizer as a visual check, set a reminder at the same time each day, and log it as soon as you take them. Birch lets you check off vitamins with one tap on Apple Watch and shows your streak across the week.",
    patterns: [],
    totalTime: "PT5M",
    stepsHeading: "Build a daily vitamin habit in 6 steps",
    steps: [
      { name: "Pick one time", time: "1 min", text: "Morning with breakfast is easiest for most people. Pick the time you're most likely to be home and awake, and keep it the same every day." },
      { name: "Place them where you'll see them", time: "1 min", text: "Next to the coffee maker, on the bathroom counter by your toothbrush, or on the kitchen table where you eat breakfast. Out of sight is out of mind." },
      { name: "Use a pill organizer", time: "2 min once a week", text: "Fill a seven-day organizer once a week (Sunday night works for many people). Each empty slot is a visual check that you took today's dose. You won't have to open bottles and guess." },
      { name: "Stack it with an existing habit", time: "1 min", text: "After I pour my coffee, I take my vitamins. After I brush my teeth, I take my vitamins. The habit you already do every day becomes the cue." },
      { name: "Set one reminder", time: "30 sec", text: "Same time every day, at the moment you chose. If you took them already, dismiss it. If you forgot, the nudge catches you before the day is over." },
      { name: "Log it immediately", time: "5 sec", text: "Check it off right after you swallow them, while the bottle or organizer is still in your hand. On Apple Watch, one tap. That instant confirmation helps the habit stick." },
    ],
    sections: [
      {
        id: "why-we-forget",
        heading: "Why we forget vitamins",
        body: [
          "Vitamins don't hurt when you skip them. There's no immediate consequence, so your brain doesn't flag it as urgent. A week can go by before you notice the unopened bottle. Making it automatic means you take them before you have a chance to forget, and you stop spending mental energy remembering.",
        ],
      },
      {
        id: "who-its-for",
        heading: "Who it's for",
        body: [
          "Anyone who has a bottle of vitamins they bought with good intentions and then forgot about. Anyone taking a daily supplement a doctor or dietitian recommended. Anyone tired of that 9 p.m. \"wait, did I take my vitamins?\" moment.",
        ],
      },
      {
        id: "safe",
        heading: "Take what's on the label or what your doctor said",
        body: [
          "This guide is about the habit of remembering, not which vitamins to take or how much. Follow the dosage on the label or what your healthcare provider advised. If you're not sure whether you need a supplement, ask a doctor or dietitian. Taking more than the recommended dose of some vitamins can be harmful.",
        ],
      },
      {
        id: "mistakes",
        heading: "Common mistakes",
        bullets: [
          "**Keeping them in a closed cabinet.** Out of sight, out of mind. Put them where you'll see them at the time you want to take them.",
          "**No set time.** \"Sometime in the morning\" is too vague. Pick one anchor (after coffee, after brushing teeth) and keep it.",
          "**Relying on memory instead of logging.** If you don't mark it done right away, you'll spend the rest of the day wondering if you took them. One tap removes the doubt.",
          "**Skipping the organizer.** Opening four bottles and counting pills every morning is a recipe for giving up. An organizer is one glance.",
        ],
      },
      {
        id: "stacking",
        heading: "Best habit stacks for vitamins",
        bullets: [
          "After I pour my morning coffee, I take my vitamins.",
          "After I brush my teeth in the morning, I take my vitamins.",
          "After I sit down for breakfast, I take my vitamins.",
          "After I feed the dog, I take my vitamins (if you do that every morning).",
        ],
      },
      {
        id: "with-birch",
        heading: "Tracking vitamins in Birch",
        body: [
          "Add a vitamins habit in Birch and check it off each day on iPhone or Apple Watch. Set a reminder at your chosen time. Your streak, weekly completion, and monthly view show on one screen with your other small daily habits. Update a recent day if you forgot to log it. Free, no ads, no account.",
        ],
      },
    ],
    faqs: [
      ["What is the best time of day to take vitamins?", "Morning with food works for most people because it's part of a predictable routine. Some vitamins (like D) are better absorbed with fat, and some (like iron) are better on an empty stomach. Check your label or ask your pharmacist. Once you pick a time, keep it the same every day so it becomes automatic."],
      ["How do I stop forgetting my vitamins?", "Put them somewhere you see them every morning (next to the coffee maker or toothbrush), use a seven-day pill organizer, set a daily reminder, and log them immediately after you take them. Habit stacking works: \"After I pour coffee, I take my vitamins.\""],
      ["What if I miss a day?", "Take the next dose at the regular time. Don't double up unless the label or your doctor specifically says to. One missed day doesn't undo the habit—just pick it back up."],
      ["Should I use a pill organizer?", "Yes. It's the easiest way to see at a glance whether you took today's dose, and filling it once a week is faster than opening bottles every morning."],
      ["Is there a free vitamin tracker for Apple Watch?", "Birch is free for iPhone and Apple Watch. Log vitamins with one tap, set a daily reminder, see your streak and weekly pattern, and track them alongside water, breathing, and other small habits. No ads, no subscription, no account."],
    ],
    sources: [S.clear],
    related: ["daily-breathing-habit", "how-to-drink-more-water", "how-to-remember-to-take-medication"],
    published: PUB,
    updated: PUB,
  },

  /* ------------------------------------------------------------- Walk Habit */
  {
    slug: "daily-walk-habit",
    title: "How to Make Walking a Daily Habit",
    description:
      "Six steps to make walking a daily habit: pick a time and route, set a reminder, start with 10 minutes, track each walk, and build a streak with a free habit tracker.",
    h1: "How to Make Walking a Daily Habit",
    kicker: "Guide · Habit building",
    query: "how to make walking a habit",
    answer:
      "To make walking a daily habit, pick a set time (morning, lunch, or evening), choose a simple route you can do without planning, set a daily reminder, start with 10 minutes, and log each walk right after. Birch lets you check off your walk with one tap on Apple Watch and shows your streak across the week.",
    patterns: [],
    totalTime: "PT10M",
    stepsHeading: "Build a daily walk habit in 6 steps",
    steps: [
      { name: "Pick your time slot", time: "2 min", text: "Morning before work, lunch break, or evening after dinner. Pick the slot you're most likely to be able to walk, and keep it the same every day. Consistency is easier than motivation." },
      { name: "Choose a default route", time: "5 min", text: "Around the block, to the end of the street and back, or a loop you already know. A route you don't have to think about removes one decision. You can vary it later; for now, keep it simple." },
      { name: "Start small: 10 minutes", time: "10 min", text: "Ten minutes is enough to form the habit. You can walk farther once it feels automatic. Small and daily beats long and rare." },
      { name: "Set a daily reminder", time: "30 sec", text: "At the start of your chosen time slot. When the reminder goes off, put on your shoes and go. The reminder is the cue; the walk is the response." },
      { name: "Log it right after", time: "5 sec", text: "As soon as you're back, mark it done. On Apple Watch, one tap. Logging it immediately reinforces the habit and lets you see your streak build." },
      { name: "Review weekly", time: "1 min", text: "At the end of the week, look at which days you walked. If you missed the same day each week, move the reminder or pick a different time for that day." },
    ],
    sections: [
      {
        id: "why",
        heading: "Why daily walking matters",
        body: [
          "Walking is one of the simplest forms of regular physical activity. The American College of Sports Medicine recommends at least 150 minutes of moderate-intensity activity per week for most adults—that's about 20 to 30 minutes most days. A short daily walk helps meet that, and it's something almost anyone can do without equipment or a gym. If you're returning to activity after an injury or have a health condition, check with your doctor before you start.",
        ],
      },
      {
        id: "mindful-walk",
        heading: "Pair a walk with a breathing minute",
        body: [
          "A walk is also a good time for a slow breathing session. After the first few minutes, when your stride is steady, try a minute of 4-6 or coherent breathing while you walk: in for 4 steps, out for 6, or in for 6, out for 6. It turns a daily walk into a mindful one. Birch has a breathing session you can start from your wrist, so your phone stays in your pocket.",
        ],
      },
      {
        id: "who-its-for",
        heading: "Who it's for",
        body: [
          "Anyone who wants to move more but finds gyms or structured workouts hard to sustain. Anyone who used to walk regularly and wants to start again. Anyone working from home who realized they barely leave the house. If you've been told to increase activity or lose weight, a daily walk is a realistic place to start, and habit tracking helps it stick.",
        ],
      },
      {
        id: "mistakes",
        heading: "Common mistakes",
        bullets: [
          "**No set time or route.** \"I'll go for a walk sometime today\" rarely happens. Pick one time and one default route.",
          "**Starting with 30 or 60 minutes.** That's great as a goal, but it's hard to keep up every single day when you're building the habit. Start with 10 and add time once it's automatic.",
          "**Only walking when the weather is perfect.** Have a backup plan for rain or heat: a mall, a treadmill, or a shorter loop. The habit is the walk, not the conditions.",
          "**Not logging it.** A habit you don't track is easier to skip. One tap right after the walk keeps your streak visible.",
        ],
      },
      {
        id: "stacking",
        heading: "Best habit stacks for walking",
        bullets: [
          "After I pour my morning coffee, I put on my shoes and walk.",
          "After I close my laptop for lunch, I walk for 10 minutes before I eat.",
          "After I finish dinner, I walk around the block.",
          "After I drop the kids at school, I walk the loop near the school (if that's your routine).",
        ],
      },
      {
        id: "with-birch",
        heading: "Tracking walks in Birch",
        body: [
          "Add a walk habit in Birch and check it off each day. Set a reminder at your chosen time. See your daily streak, weekly completion, and how many days you walked this month, on the same screen as your breathing and other small habits. Update a recent day if you forgot to log it. On Apple Watch, one tap after your walk logs it. Free, no ads, no account.",
        ],
      },
    ],
    faqs: [
      ["How long should I walk every day?", "Start with 10 minutes. The American College of Sports Medicine recommends at least 150 minutes of moderate activity per week for most adults—about 20 to 30 minutes most days. Build up as the habit gets easier."],
      ["What time of day is best for walking?", "Whichever time you'll actually keep. Morning walkers often find it easier to stay consistent because the day hasn't filled up yet. Lunch and evening work too—just pick one slot and keep it."],
      ["How do I make myself walk every day?", "Pick a set time, choose a simple route, set a daily reminder, start with 10 minutes, and log it right after. Habit stacking helps: \"After I finish breakfast, I walk.\" The routine makes it automatic."],
      ["Can I pair walking with breathing exercises?", "Yes. Once your stride is steady, try a minute of slow breathing (4-6 or 6-6) while you walk. It makes the walk more mindful. Birch has breathing you can start from Apple Watch without breaking your stride."],
      ["Is there a free walking habit tracker for Apple Watch?", "Birch is free for iPhone and Apple Watch. Log your walk with one tap, set a daily reminder, see your streak and monthly total, and track it alongside breathing and other daily habits. No ads, no subscription, no account."],
    ],
    sources: [S.acsm, S.clear],
    related: ["daily-breathing-habit", "how-to-drink-more-water", "how-to-make-stretching-a-habit"],
    published: PUB,
    updated: PUB,
  },

  /* ------------------------------------------------------ Medication Habit */
  {
    slug: "how-to-remember-to-take-medication",
    title: "How to Remember to Take Your Medication Every Day",
    description:
      "Six steps to make taking medication a daily habit: pill organizers, reminders, cues, and simple check-off tracking on Apple Watch with a free habit tracker.",
    h1: "How to Remember to Take Your Medication Every Day",
    kicker: "Guide · Habit building",
    query: "how to remember to take medication",
    answer:
      "To remember your medication, use a seven-day pill organizer, set a reminder (or an OS alarm if you need something harder to dismiss), keep it visible where you'll be at that time, stack it with a daily habit, and check it off immediately. Birch is not a medication app, but you can log a daily yes/no habit for medications with simple schedules, set a push notification reminder, and see your streak on Apple Watch.",
    patterns: [],
    totalTime: "PT5M",
    stepsHeading: "Build a medication routine in 6 steps",
    steps: [
      { name: "Follow your prescription", time: "1 min", text: "Take the exact dose your doctor or pharmacist prescribed, at the times they specified. If anything is unclear, ask your pharmacist before you start." },
      { name: "Use a seven-day pill organizer", time: "5 min once a week", text: "Fill it once a week. Each empty compartment is a visual check that you took today's dose. Mark each compartment with the time if you take meds more than once a day." },
      { name: "Set a reminder at the exact time", time: "1 min", text: "Set a push notification reminder for the exact time you should take it. If you need something harder to dismiss, use your phone's alarm app instead of (or in addition to) a notification. If you take meds twice a day, set two." },
      { name: "Keep it where you'll be", time: "1 min", text: "If you take it at breakfast, keep it on the kitchen counter. If you take it at bedtime, keep it on your nightstand. The location is a cue." },
      { name: "Stack it with an existing habit", time: "1 min", text: "After I pour my coffee, I take my medication. After I brush my teeth at night, I take my medication. The habit you already do becomes the trigger." },
      { name: "Log it immediately", time: "5 sec", text: "Check it off right after you take it. On Apple Watch, one tap. If you missed a dose, follow your pharmacist's or doctor's instructions—don't just double the next one." },
    ],
    sections: [
      {
        id: "birch-limits",
        heading: "What Birch is and isn't",
        body: [
          "Birch is a simple habit tracker for small daily yes/no habits, not a medication management app. It has no dose schedules, no refill tracking, no medication database, and no medical alerts. If your medication has a complex schedule (multiple times a day with different doses, or \"take as needed\"), Birch isn't built for that. For complex medication routines, ask your pharmacist or doctor to recommend a dedicated medication reminder app.",
          "If your prescription is one simple daily dose (once a day, same time), Birch can help you track whether you took it, the same way it tracks any other yes/no habit. You can set a push notification reminder in Birch at your medication time. The check-off, reminder, and streak can support the routine. But all the medical decisions—what to take, when, how much, what to do if you miss a dose, when to refill—stay between you and your healthcare team. Birch doesn't give medical advice.",
        ],
      },
      {
        id: "what-if-miss",
        heading: "What if you miss a dose?",
        body: [
          "Ask your pharmacist or read the information that came with your prescription. Some medications you take as soon as you remember. Others you skip and take the next dose at the regular time. Some you should never double up on. The answer depends on the medication, so don't guess. If you're not sure, call your pharmacy.",
        ],
      },
      {
        id: "who-its-for",
        heading: "Who it's for",
        body: [
          "Anyone taking a once-a-day medication who keeps forgetting. Anyone who stares at the pill bottle at 10 p.m. and can't remember if they took it. Anyone whose doctor said \"you have to take this every day\" and wants a way to make it stick. If you take multiple medications at different times, read the section above about Birch's limits.",
        ],
      },
      {
        id: "mistakes",
        heading: "Common mistakes",
        bullets: [
          "**No reminder at all.** Use your habit tracker's push notification reminder, or if you need something harder to dismiss, set an OS alarm in your phone's Clock app.",
          "**No pill organizer.** Without one, you'll spend time every day opening the bottle and wondering if you already took it. An empty compartment is instant confirmation.",
          "**Keeping meds out of sight.** If it's in a closed cabinet, you'll forget. Keep it where you'll see it at the time you're supposed to take it.",
          "**Doubling up without asking.** If you miss a dose, ask your pharmacist what to do. Never assume it's safe to take two.",
        ],
      },
      {
        id: "stacking",
        heading: "Best habit stacks for daily medication",
        bullets: [
          "After I pour my morning coffee, I take my medication.",
          "After I brush my teeth in the morning, I take my medication.",
          "After I sit down for breakfast, I take my medication.",
          "After I brush my teeth at night, I take my medication (if it's a bedtime dose).",
        ],
      },
      {
        id: "with-birch",
        heading: "Tracking simple medication routines in Birch",
        body: [
          "If your medication is one daily dose at the same time, you can add it as a yes/no habit in Birch and set a push notification reminder at the exact time. Check off the habit in Birch right after you take it. See your streak, weekly completion, and monthly view on one screen with other small daily habits. If you need something harder to dismiss than a push notification, also set an OS alarm in your phone's Clock app. For more complex schedules, ask your pharmacist to recommend a medication-specific app. Birch is free, no ads, no account.",
        ],
      },
    ],
    faqs: [
      ["How do I remember to take my medication every day?", "Use a seven-day pill organizer, set a reminder (push notification or OS alarm) at the exact time, keep the medication visible where you'll be at that time, and check it off immediately after you take it. Habit stacking helps: \"After I pour my coffee, I take my medication.\""],
      ["What should I do if I miss a dose?", "Ask your pharmacist or check the information that came with your prescription. Some medications you take as soon as you remember; others you skip and take the next dose at the regular time. Don't double up unless you've been told it's safe."],
      ["Is Birch a medication reminder app?", "No. Birch is a simple habit tracker for daily yes/no habits. It has no medication database, no dose schedules, and no refill tracking. If your medication is one daily dose at the same time, Birch can help you track the habit with a push notification reminder and streak tracking, but it's not a substitute for a medication-specific app or your pharmacist's guidance."],
      ["Can I track multiple medications in Birch?", "Birch is built for simple daily habits, not complex medication schedules. If you take several medications at different times or doses, ask your pharmacist to recommend a medication reminder app. If you take a few once-a-day meds at the same time, you could track them as one combined habit in Birch."],
      ["Is there a free medication habit tracker for Apple Watch?", "Birch is free for iPhone and Apple Watch. You can log a once-a-day medication as a yes/no habit with one tap and see your streak, but it's not a medication management app. For complex schedules, use a medication-specific app. No ads, no subscription, no account."],
    ],
    sources: [S.aafp_meds, S.clear],
    related: ["how-to-remember-to-take-vitamins", "daily-breathing-habit", "how-to-drink-more-water"],
    published: PUB,
    updated: PUB,
  },

  /* -------------------------------------------------------- Stretching Habit */
  {
    slug: "how-to-make-stretching-a-habit",
    title: "How to Make Stretching a Daily Habit",
    description:
      "Six steps to make stretching a daily habit: pick a time and a few stretches, set a reminder, start with 5 minutes, track each session, and build a streak with a free habit tracker.",
    h1: "How to Make Stretching a Daily Habit",
    kicker: "Guide · Habit building",
    query: "how to make stretching a habit",
    answer:
      "To make stretching a daily habit, pick a set time (morning or evening), choose three to five stretches you can do without looking anything up, set a daily reminder, start with 5 minutes, and check it off right after. Birch lets you log stretching with one tap on Apple Watch and shows your streak across the week.",
    patterns: [],
    totalTime: "PT5M",
    stepsHeading: "Build a daily stretching habit in 6 steps",
    steps: [
      { name: "Pick your time", time: "1 min", text: "Morning after you wake up, or evening before bed. Pick the slot where you have a few minutes of floor space and aren't rushing. Keep it the same every day." },
      { name: "Choose a short routine", time: "5 min", text: "Three to five stretches you already know: neck rolls, shoulder shrugs, hamstring stretch, cat-cow, whatever feels good. Write them down or keep a photo. A routine you don't have to look up is easier to keep." },
      { name: "Start with 5 minutes", time: "5 min", text: "Hold each stretch for 15 to 30 seconds, breathe slowly, and don't bounce. Five minutes is enough to form the habit. Add time or stretches later." },
      { name: "Stack it with an existing habit", time: "1 min", text: "After I get out of bed, I stretch. After I finish my last work call, I stretch. After I brush my teeth at night, I stretch. The habit you already do becomes the cue." },
      { name: "Set a daily reminder", time: "30 sec", text: "At the start of your chosen time. When it goes off, get on the floor and start. The reminder is the nudge; the stretching is the response." },
      { name: "Log it immediately", time: "5 sec", text: "Right after you finish, mark it done. On Apple Watch, one tap. Seeing the streak build makes it easier to keep going." },
    ],
    sections: [
      {
        id: "why",
        heading: "Why stretch daily",
        body: [
          "Cleveland Clinic notes that stretching can improve flexibility and range of motion, and many people find it feels good, especially if they sit a lot or wake up stiff. It's also a natural pair with slow breathing: stretch for a few minutes, then do four breaths of 4-7-8 or a minute of 4-6 breathing while you're still on the floor. That combination is a simple morning or evening routine.",
        ],
      },
      {
        id: "breath-pair",
        heading: "Pair stretching with a breathing minute",
        body: [
          "After you stretch, while you're still on the floor or mat, is a good time for a short breathing session. Try a minute of [4-6 breathing](/guides/4-6-breathing) or four breaths of [4-7-8](/guides/4-7-8-breathing). The stretching loosens you up, the breathing settles you down, and the whole routine takes less than 10 minutes. Birch has both habits (stretching and breathing) on one screen, so you can log them together.",
        ],
      },
      {
        id: "who-its-for",
        heading: "Who it's for",
        body: [
          "Anyone who sits at a desk all day and feels tight by the end. Anyone who wakes up stiff. Anyone a physical therapist told to stretch regularly. Anyone who used to stretch and wants to start again. If you have an injury, check with a doctor or physical therapist about which stretches are safe.",
        ],
      },
      {
        id: "mistakes",
        heading: "Common mistakes",
        bullets: [
          "**No set routine.** Deciding which stretches to do every time adds friction. Pick three to five and do the same ones every day.",
          "**Bouncing.** Stretch slowly and hold. Bouncing can cause injury.",
          "**Holding your breath.** Breathe slowly while you stretch. A long exhale helps you relax into it.",
          "**Starting with 30 minutes.** That's great once the habit is solid, but 5 minutes is easier to keep every single day at the start.",
          "**Only stretching when something hurts.** Stretching works better as a daily habit than as a reaction to pain. If something does hurt, see a healthcare provider.",
        ],
      },
      {
        id: "stacking",
        heading: "Best habit stacks for stretching",
        bullets: [
          "After I get out of bed, I stretch on the floor for 5 minutes.",
          "After I finish my last work call, I stretch.",
          "After I change into comfortable clothes in the evening, I stretch.",
          "After I roll out my yoga mat (if you already do that), I stretch.",
        ],
      },
      {
        id: "with-birch",
        heading: "Tracking stretching in Birch",
        body: [
          "Add a stretching habit in Birch and check it off each day. Set a reminder at your chosen time. See your streak, weekly completion, and monthly total on one screen with breathing and other small daily habits. On Apple Watch, one tap logs it. Free, no ads, no account.",
        ],
      },
    ],
    faqs: [
      ["How long should I stretch every day?", "Start with 5 minutes. Hold each stretch for 15 to 30 seconds and breathe slowly. Once the habit is solid, you can add time or stretches."],
      ["What time of day is best for stretching?", "Morning or evening, whichever you'll keep. Morning stretching can loosen you up after sleep. Evening stretching can be part of a wind-down. Pick one slot and stick with it."],
      ["How do I make myself stretch every day?", "Pick a set time, choose a short routine (three to five stretches), set a daily reminder, and log it right after. Habit stacking helps: \"After I get out of bed, I stretch.\" Keep it simple and the same every day."],
      ["Can I pair stretching with breathing exercises?", "Yes. After you stretch, stay on the floor and do a minute of slow breathing (4-6 or 4-7-8). It's a natural combination: stretching loosens, breathing settles. Birch has both on one screen."],
      ["Is there a free stretching habit tracker for Apple Watch?", "Birch is free for iPhone and Apple Watch. Log stretching with one tap, set a daily reminder, see your streak and monthly total, and track it alongside breathing and other habits. No ads, no subscription, no account."],
    ],
    sources: [S.ccStretch, S.clear],
    related: ["daily-breathing-habit", "daily-walk-habit", "how-to-drink-more-water"],
    published: PUB,
    updated: PUB,
  },

  /* -------------------------------------------------------- Bedtime Routine */
  {
    slug: "bedtime-routine-for-adults",
    title: "A Simple Bedtime Routine for Adults",
    description:
      "A simple five-step bedtime routine: set a time, dim lights, put devices away, do a short breathing session, and track your wind-down habit with a free tracker.",
    h1: "A Simple Bedtime Routine for Adults",
    kicker: "Guide · Habit building",
    query: "bedtime routine for adults",
    answer:
      "A simple bedtime routine for adults: set a consistent bedtime, dim the lights 30 to 60 minutes before, put your phone face down or out of reach, do a few minutes of slow breathing (4-7-8, 7-11, or 4-6), and get into bed. Birch lets you log a bedtime routine habit and track breathing sessions from Apple Watch in the dark.",
    patterns: ["weil", "wave", "slow"],
    totalTime: "PT30M",
    stepsHeading: "A simple bedtime routine in 5 steps",
    steps: [
      { name: "Set a consistent bedtime", time: "1 min", text: "Pick a time you can realistically be in bed most nights, and set a reminder 30 to 60 minutes before. That's your wind-down cue." },
      { name: "Dim the lights", time: "5 sec", text: "When the reminder goes off, turn off bright overhead lights. Use a lamp or dim setting. Lower light helps signal that the day is ending." },
      { name: "Put devices down", time: "1 min", text: "Phone face down or in another room, laptop closed, TV off. If you must check something, do it now, then put it away. Screens close to bedtime make it harder to wind down." },
      { name: "Do a short breathing session", time: "3–5 min", text: "In bed, with the lights already low. Try [4-7-8](/guides/4-7-8-breathing) for four breaths, [7-11](/guides/7-11-breathing) for a few minutes, or [4-6](/guides/4-6-breathing). Follow a pacer or haptic cue on Apple Watch so you can keep your eyes closed." },
      { name: "Let go and sleep", time: "", text: "When the breathing session ends, stay in bed and let your body settle. Don't check whether it \"worked.\" The routine is the habit; sleep follows when it's ready." },
    ],
    sections: [
      {
        id: "why",
        heading: "Why a bedtime routine helps",
        body: [
          "Sleep Foundation notes that a consistent bedtime routine can help signal your body that it's time to wind down. The routine itself becomes a cue for sleep. Dimming lights, putting devices away, and doing something calming (like slow breathing) in the same order every night makes it easier to fall asleep than going straight from a bright screen to bed.",
          "This is not a cure for insomnia or a sleep disorder. If you have ongoing trouble falling asleep, staying asleep, waking up gasping, or feeling exhausted despite enough hours in bed, talk to a doctor.",
        ],
      },
      {
        id: "breathing-choice",
        heading: "Which breathing pattern for bedtime",
        body: [
          "Pick a pattern with a long exhale or an even rhythm, and no breath holds if holds make you uncomfortable. Common bedtime choices:",
        ],
        bullets: [
          "**[4-7-8](/guides/4-7-8-breathing):** four breaths, about a minute. Many people use this as the last thing before sleep.",
          "**[7-11](/guides/7-11-breathing):** longer exhale, no holds, done for a few minutes.",
          "**[4-6](/guides/4-6-breathing):** the simplest long-exhale rhythm, easy to keep up in bed.",
        ],
      },
      {
        id: "who-its-for",
        heading: "Who it's for",
        body: [
          "Anyone whose bedtime is chaotic: scrolling until midnight, turning the lights off whenever they feel tired, no consistent wind-down. Anyone who wants a calmer, more predictable end to the day. Anyone who lies awake replaying the day. A routine won't fix a sleep disorder, but it can make winding down easier.",
        ],
      },
      {
        id: "mistakes",
        heading: "Common mistakes",
        bullets: [
          "**No set bedtime.** \"Whenever I'm tired\" is too vague. Pick a time and set a wind-down reminder 30 to 60 minutes before.",
          "**Doing the breathing on a bright screen.** Use haptics or audio. Birch's Apple Watch app taps your wrist for each breath, so your eyes stay closed.",
          "**Checking your phone \"one last time.** That one check turns into ten minutes. Put it down when the wind-down starts, not when you're in bed.",
          "**Changing the routine every night.** The repetition is part of the signal. Keep the same steps in the same order.",
          "**Judging the routine by whether you fall asleep fast.** The habit is the wind-down, not how quickly you fall asleep. Some nights are easier than others.",
        ],
      },
      {
        id: "breathing-link",
        heading: "More on breathing for sleep",
        body: [
          "See our full guide to [breathing exercises for sleep](/guides/breathing-exercises-for-sleep) for more detail on 4-7-8, 7-11, and other bedtime breathing patterns, plus common mistakes and how long to practice.",
        ],
      },
      {
        id: "with-birch",
        heading: "Tracking a bedtime routine in Birch",
        body: [
          "Add a bedtime routine habit in Birch (yes/no or a custom name) and check it off each night. Set a reminder at your wind-down time. When it's time for breathing, start a session from Apple Watch without turning on a screen. See your routine streak, weekly completion, and monthly view alongside other small daily habits. Free, no ads, no account.",
        ],
      },
    ],
    faqs: [
      ["What should be in a bedtime routine for adults?", "A simple routine: set a consistent bedtime, dim lights 30 to 60 minutes before, put devices away, do a short breathing session (4-7-8, 7-11, or 4-6) in bed, and let yourself settle. Repetition and consistency matter more than length."],
      ["How long should a bedtime routine take?", "30 to 60 minutes from wind-down cue to lights out. The breathing part is just a few minutes. The rest is dimming lights and putting devices away. You don't need an hour-long ritual; you need consistency."],
      ["What breathing exercise is best for sleep?", "4-7-8 (four breaths, about a minute), 7-11 (longer exhale, a few minutes), or 4-6 (simple and easy to keep up). All have a long exhale. Pick the one that feels easiest in bed. See [breathing for sleep](/guides/breathing-exercises-for-sleep)."],
      ["Should I do breathing exercises before bed every night?", "If it helps you wind down, yes. A few minutes of slow breathing as part of a bedtime routine can signal that it's time to sleep. It's not a substitute for treating a sleep problem, but it's a low-effort addition to a wind-down."],
      ["Is there a free bedtime routine tracker for Apple Watch?", "Birch is free for iPhone and Apple Watch. Log a bedtime routine habit with one tap, set a reminder at your wind-down time, and start breathing sessions from your wrist in the dark with haptic cues. See your streak and weekly pattern alongside other habits. No ads, no subscription, no account."],
    ],
    sources: [S.sleepfdn_routine, S.sleepfdn, S.clear],
    related: ["breathing-exercises-for-sleep", "4-7-8-breathing", "daily-breathing-habit"],
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
