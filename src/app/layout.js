import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Next.js Best Practice App',
  description: 'Best performance, scalable, and ready for deployment anywhere.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased min-h-screen font-sans">{children}</body>
    </html>
  );
}
