import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-8">
      <main className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center max-w-xl w-full">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">
          Dobrodošao u Next.js + Tailwind!
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Ovo je best practice starter za ultra brze, moderne i skalabilne aplikacije. Spreman za
          deploy bilo gdje.
        </p>
        <a
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors"
        >
          Pogledaj Tailwind dokumentaciju
        </a>
      </main>
      <footer className="mt-10 text-gray-500 text-sm text-center">
        Powered by Next.js & Tailwind CSS
      </footer>
    </div>
  );
}
