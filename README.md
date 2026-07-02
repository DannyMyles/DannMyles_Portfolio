# Muhadi Dancun — Portfolio

Personal portfolio site built with [Next.js](https://nextjs.org) (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The contact form submits via [Web3Forms](https://web3forms.com), configured with the access key in [`lib/constants.ts`](./lib/constants.ts). Web3Forms access keys are meant to be used client-side (not secret), so it's fine to keep it in source. Get a new one at web3forms.com if it ever needs rotating.

## Content

All copy (profile, experience, projects, skills, education) lives in typed modules under [`data/`](./data) — edit those files to update site content, no JSX changes needed.

## Build & deploy

```bash
npm run build
```

Deployed on [Vercel](https://vercel.com) — pushes to `master` deploy automatically once the project is linked.
