// import { Main } from "next/document";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-semibold mb-4">Welcome to Bitlinks</h1>
      <p className="text-center max-w-md mb-6">
        Simplify your links with Bitlinks. Create short, easy-to-share URLs in
        seconds.
      </p>
      <div className="flex gap-4">
        <Link href="/shorten">
          <button className="bg-blue-500 dark:bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
        <Link href="https://github.com/vivekborkar17">
          <button className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition">
            GitHub
          </button>
        </Link>
      </div>
    </main>
  );
}
