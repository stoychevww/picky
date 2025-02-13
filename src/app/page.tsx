import Link from "next/link";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-900 to-black text-white ${outfit.className}`}
    >
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        <main className="flex flex-col items-center justify-center space-y-12">
          {/* Intro Section */}
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Hi, I&apos;m{" "}
              <a
                href="https://instagram.com/stoychevww"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-300 hover:from-blue-500 hover:to-purple-600"
              >
                Georgi
              </a>
            </h1>
            <p className="text-lg text-gray-300">
              I built these tools because I was annoyed they didn&apos;t exist.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid w-full max-w-lg gap-4 sm:grid-cols-1">
            <Link
              href="/svg-to-png"
              className="group relative overflow-hidden rounded-xl bg-white/5 p-6 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/10 hover:ring-white/20"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">
                  SVG to PNG Converter
                </span>
                <svg
                  className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              href="/square-image"
              className="group relative overflow-hidden rounded-xl bg-white/5 p-6 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/10 hover:ring-white/20"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">
                  Square Image Generator
                </span>
                <svg
                  className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              href="/rounded-border"
              className="group relative overflow-hidden rounded-xl bg-white/5 p-6 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/10 hover:ring-white/20"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Corner Rounder</span>
                <svg
                  className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </main>

        <footer className="mt-16 text-center">
          <a
            href="https://github.com/stoychevww/picky"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-white"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
