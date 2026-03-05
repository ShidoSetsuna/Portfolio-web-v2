# Valdemar Andreas — Portfolio

My personal portfolio site. Built with React and deployed on Vercel.

**Live site:** https://valde.app

## Stack

- **React** + **Vite**
- **SCSS** with custom theming (dark/light mode)
- **GSAP** for animations — including a physics-based interactive 3D cube
- **Vercel Serverless Functions** + **Upstash Redis** for a global click counter
- **React Router** for routing
- **React Icons** for icons

## Running locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

The global click counter is powered by a Vercel Serverless Function (`/api/counter.js`) backed by Upstash Redis. This works automatically when deployed on Vercel with the environment variables set in the project settings.

If you want to run it outside of Vercel (e.g. a different host or a local API server), you'll need to adapt `api/counter.js` to whatever serverless or backend environment you're using, and supply the credentials yourself:

```
UPSTASH_REDIS_REST_URL=your_url_here
UPSTASH_REDIS_REST_TOKEN=your_token_here
```

Without these the counter just won't update — everything else works fine.

## Build

```bash
npm run build
npm run preview
```