import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Freelance Contract Analyzer — Spot Red Flags Instantly',
  description: 'AI-powered contract analysis for freelancers. Detect problematic clauses, bad payment terms, and IP ownership traps before you sign.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="dd4fdede-f60e-4438-b83d-7874ca8695db"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
