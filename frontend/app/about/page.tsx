import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">About Us</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">Our Mission</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                We are dedicated to providing high-quality live development sessions for both frontend/backend 
                development and AI/ML technologies. Our goal is to help developers and learners enhance their 
                skills through interactive, hands-on sessions with experienced instructors.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">What We Offer</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-3 sm:pl-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Frontend/Backend Development Sessions
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Learn modern web development practices, frameworks, and best practices for building 
                    scalable applications. Our sessions cover everything from React and Next.js to Node.js 
                    and database management.
                  </p>
                </div>
                <div className="border-l-4 border-purple-600 pl-3 sm:pl-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    AI/ML Sessions
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Dive into the world of artificial intelligence and machine learning. From fundamentals 
                    to advanced topics, learn how to build and deploy ML models, work with neural networks, 
                    and apply AI solutions to real-world problems.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">Why Choose Us</h2>
              <ul className="space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Live, interactive sessions with real-time Q&A</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Experienced instructors with industry expertise</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Flexible scheduling to fit your needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Hands-on projects and practical examples</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Recordings available for review</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">Get Started</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                Ready to enhance your skills? Browse our available sessions and reserve your spot today!
              </p>
              <a
                href="/reservation"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md transition-colors font-medium text-sm sm:text-base"
              >
                Make a Reservation
              </a>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

