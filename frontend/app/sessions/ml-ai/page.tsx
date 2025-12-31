import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function MLAIPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">ML/AI Sessions</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Machine Learning & Artificial Intelligence
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Our ML/AI sessions cover a comprehensive range of topics from fundamentals to advanced 
                implementations. Whether you're just starting out or looking to deepen your expertise, 
                we have sessions tailored for every skill level.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Topics Covered
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span>Introduction to Machine Learning and Neural Networks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span>Deep Learning with TensorFlow and PyTorch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span>Natural Language Processing (NLP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span>Computer Vision and Image Recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span>Model Training, Evaluation, and Optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span>Deploying ML Models to Production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span>AI Ethics and Responsible AI Development</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/reservation"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
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

