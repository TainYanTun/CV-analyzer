
'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  url: string;
}

export default function JobsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [suggestedJobs, setSuggestedJobs] = useState<Job[]>([]);
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (status === 'authenticated') {
      // Fetch suggested jobs (this is just a placeholder, you would fetch this based on the CV analysis)
      const fetchSuggestedJobs = async () => {
        const res = await fetch('/api/jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: 'Software Engineer' }), // Placeholder query
        });
        const data = await res.json();
        setSuggestedJobs(data.data || []);
      };

      // Fetch saved jobs
      const fetchSavedJobs = async () => {
        const res = await fetch('/api/jobs/saved');
        const data = await res.json();
        setSavedJobs(data.jobs || []);
      };

      fetchSuggestedJobs();
      fetchSavedJobs();
    }
  }, [status, router]);

  const handleSaveJob = async (job: Job) => {
    await fetch('/api/jobs/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    // Refresh saved jobs
    const res = await fetch('/api/jobs/saved');
    const data = await res.json();
    setSavedJobs(data.jobs || []);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">Jobs</h1>
          <div className="mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Suggested Jobs</h2>
              <ul>
                {suggestedJobs.map((job) => (
                  <li key={job.id} className="border-b py-4">
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-gray-600">{job.company} - {job.location}</p>
                    <p className="text-sm mt-2">{job.description}</p>
                    <div className="mt-2">
                      <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">View Job</a>
                      <button onClick={() => handleSaveJob(job)} className="ml-4 px-2 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Save</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Saved Jobs</h2>
              <ul>
                {savedJobs.map((job) => (
                  <li key={job.id} className="border-b py-4">
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-gray-600">{job.company} - {job.location}</p>
                    <p className="text-sm mt-2">{job.description}</p>
                    <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">View Job</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
