
import Header from '../components/Header';

export default function Jobs() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">Jobs</h1>
          <div className="mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Suggested Jobs</h2>
              {/* Suggested jobs will be displayed here */}
            </div>
          </div>
          <div className="mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Saved Jobs</h2>
              {/* Saved jobs will be displayed here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
