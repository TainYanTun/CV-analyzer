
import Header from '../components/Header';

export default function Dashboard() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Upload your CV</h2>
              {/* File upload component will go here */}
            </div>
          </div>
          <div className="mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">AI Analysis</h2>
              {/* AI analysis will be displayed here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
