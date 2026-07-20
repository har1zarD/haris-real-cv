import './globals.css';
import { Archivo, IBM_Plex_Mono } from 'next/font/google';

const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-archivo',
  axes: ['wdth'],
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
});

export const metadata = {
  title: 'Haris Velić — Full-Stack & Mobile Engineer',
  description:
    'Full-stack & mobile engineer in Sarajevo. Frontend Lead at Shop Circle, building Shopify apps used by 9,000+ merchants. React, Next.js, TypeScript, React Native.',
  keywords:
    'Haris Velić, Full Stack Developer, Frontend Lead, React, Next.js, TypeScript, React Native, Shopify, Sarajevo',
  authors: [{ name: 'Haris Velić' }],
  creator: 'Haris Velić',
  openGraph: {
    title: 'Haris Velić — Full-Stack & Mobile Engineer',
    description:
      'Frontend Lead at Shop Circle, building Shopify apps used by 9,000+ merchants. React, Next.js, TypeScript, React Native.',
    url: 'https://haris-real-cv.vercel.app',
    siteName: 'Haris Velić',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
