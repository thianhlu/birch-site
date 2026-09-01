# Birch: Breathe, Relax & Sleep

A premium one-page marketing site for Birch, a free indie iOS breathing and habit app.

## About Birch

Birch is a free breathing and habit app for iPhone that helps you breathe better in minutes. The app features:

- **Six Breathing Techniques**: Weil Method (4-7-8), Box Breathing (4-4-4-4), Gentle Wave (7-11), Balance (3-3-6-3), Heart Coherence (6-6), and Slow-Paced Breathing (4-6)
- **Habit Tracking**: Build daily habits alongside your breathing practice
- **Apple Health Integration**: Sessions count toward Mindful Minutes
- **Privacy-First**: No subscriptions, no ads, no account required

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

The site uses real App Store marketing screenshots downloaded from Apple's CDN:
- `public/images/birch-icon.png` - App icon (1024x1024)
- `public/images/birch-ss1.jpg` - Breathing session screen
- `public/images/birch-ss2.jpg` - Technique selection screen
- `public/images/birch-ss3.jpg` - Habits screen

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Google Fonts** - Playfair Display (serif headlines) and Inter (body text)

## Project Structure

```
app/
├── page.tsx           # Home page with hero, techniques, habits sections
├── support/
│   └── page.tsx       # Support page
├── privacy/
│   └── page.tsx       # Privacy policy
├── layout.tsx         # Root layout with metadata
└── globals.css        # Global styles and fonts
```

## Design

The site matches Birch's premium dark aesthetic:

- Solid black backgrounds with white serif headlines (Playfair Display)
- Clean sans-serif body text (Inter) in muted grey
- Neon magenta/pink accents
- Glass-morphism UI cards
- Gradient breathing visualizations (lime-green to cornflower-blue)
- White iPhone mockups with rounded corners

## Build & Deploy

Build for production:

```bash
npm run build
npm start
```

The site is optimized for static deployment on Vercel, Netlify, or any static hosting platform.

## Requirements

- Node.js 18 or later
- iOS 18+ iPhone (for the actual Birch app)

## Contact

Created by Thianh Lu / Tsukemen.io

- Email: luthianh@gmail.com
- App Store: [Download Birch](https://apps.apple.com/us/app/birch-breathe-relax-sleep/id6449722381)

## License

© 2026 Tsukemen.io. All rights reserved.
