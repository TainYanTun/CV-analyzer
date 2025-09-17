
'use client';

import { useState } from 'react';

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/analyze', {
      method: 'POST',
      body: formData,
    });

    const { analysis } = await res.json();
    setAnalysis(analysis);
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
        />
        <button
          type="submit"
          disabled={!file || loading}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </form>
      {analysis && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">AI Analysis</h2>
          <p className="text-gray-700 whitespace-pre-wrap">{analysis}</p>
        </div>
      )}
    </div>
  );
}
