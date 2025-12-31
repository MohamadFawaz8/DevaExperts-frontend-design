import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function FrontendBackendPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Frontend/Backend Sessions</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Web Development & Backend Services
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Master the full stack with our comprehensive sessions covering both frontend and backend 
                development. Learn modern frameworks, best practices, and build production-ready applications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Frontend Topics
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>React and Next.js Fundamentals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>State Management (Redux, Zustand, Context API)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>TypeScript for Frontend Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>CSS Frameworks and Styling (Tailwind, CSS Modules)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Performance Optimization and Best Practices</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Backend Topics
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Node.js and Express.js</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>RESTful API Design and Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Database Design (SQL and NoSQL)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Authentication and Authorization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>API Security and Best Practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Deployment and DevOps Basics</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/reservation"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
              >
                Reserve Your Spot
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

