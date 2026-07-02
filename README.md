# Muhadi Dancun — Portfolio

Personal portfolio site built with [Next.js](https://nextjs.org) (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The contact form submits via [Web3Forms](https://web3forms.com). Copy `.env.local.example` to `.env.local` and set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to your free access key (get one instantly at web3forms.com with just your email, no account needed). Without a key, the form shows a "not configured" message with a mailto fallback instead of submitting.

When deploying to Vercel, add the same env var in the project's Settings → Environment Variables.

## Content

All copy (profile, experience, projects, skills, education) lives in typed modules under [`data/`](./data) — edit those files to update site content, no JSX changes needed.

## Build & deploy

```bash
npm run build
```

Deployed on [Vercel](https://vercel.com) — pushes to `master` deploy automatically once the project is linked.
