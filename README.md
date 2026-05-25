# landing_algeria

Next.js landing page configured for static export and Cloudflare Pages.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production build

```bash
npm run build
```

The static site is generated in the `out` directory.

## Deploy on Cloudflare Pages

Use these Cloudflare Pages build settings:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: `20`

The project uses `output: "export"` in `next.config.ts`, so Cloudflare can serve it as a static site without a Workers runtime.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
