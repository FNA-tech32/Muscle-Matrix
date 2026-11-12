# Muscle Matrix

Muscle Matrix is a single-page fitness site. The header shows the Muscle Matrix name and links to each section. The footer lists the club address, a main phone number, an alternative phone number, a main email, and an alternative email.

## Sections

The home page is one scrolling page:

- **Home** — headline, a short introduction, and a join button.
- **About** — the club mission and the atmosphere members train in.
- **Workouts** — training programs: Resistance, Boxing, Body Pump, Yoga, Full Body, Fitness, and Battle Rope.
- **Pricing** — Basic (20), Premium (35), and Elite (49) membership plans.
- **Community** — short notes from members.
- **FAQ** — booking, payment, age, lockers, cancellation, and water.
- **Join** — a closing invitation to sign up.
- **Contact** — address, phone, alternative phone, email, and alternative email in the footer.

## Contact

These details appear in the footer. The Contact link in the menu jumps to them.

- **Address:** 14 Iron Lane, Koregaon Park, Pune 411001
- **Phone:** +91 20 4856 2100
- **Alternative phone:** +91 20 4856 2101
- **Email:** hello@musclematrix.fit
- **Alternative email:** support@musclematrix.fit

The alternative phone and email are for follow-up when the main line is busy.

## Stack

React 18, Vite, Tailwind CSS, Swiper, and AOS. Page copy lives in `src/data.js`. Section components live in `src/components`.

## Prerequisites

- Node.js 18 or newer
- npm

## Setup

```bash
npm install
npm run dev
```

The dev server prints a local URL, usually `http://localhost:5173/`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm start` | Same as `npm run dev` |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally |
