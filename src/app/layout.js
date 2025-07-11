import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Haris Velić - Full Stack Developer',
  description:
    'Full Stack Developer specializing in modern web technologies. Currently working at Shop Circle BH, building Shopify applications that serve thousands of merchants globally.',
  keywords:
    'Full Stack Developer, React, Next.js, Shopify, JavaScript, TypeScript, Web Development, Frontend, Backend',
  authors: [{ name: 'Haris Velić' }],
  creator: 'Haris Velić',
  openGraph: {
    title: 'Haris Velić - Full Stack Developer',
    description:
      'Full Stack Developer specializing in modern web technologies. Currently working at Shop Circle BH, building Shopify applications that serve thousands of merchants globally.',
    url: 'https://haris-velic.vercel.app',
    siteName: 'Haris Velić Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haris Velić - Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web technologies.',
    creator: '@harisvelic',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-slate-900 text-white antialiased min-h-screen font-sans">{children}</body>
    </html>
  );
}
