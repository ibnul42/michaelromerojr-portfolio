// pages/404.js
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-pink-500">404</h1>
      <p className="mt-4 text-2xl text-gray-700">Oops! Page not found.</p>
      <Link href="/" className="mt-6 text-pink-500 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
