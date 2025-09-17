import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Analyze Your CV and Find Your Dream Job
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Get AI-powered feedback on your CV and discover job opportunities that match your skills and experience.
        </p>
        <div className="mt-10">
          <Link
            href="/login"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
