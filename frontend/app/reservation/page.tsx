'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Calendar from '@/components/Calendar';

export default function ReservationPage() {
  const [selectedSessionType, setSelectedSessionType] = useState<string>('');
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [timeSlot, setTimeSlot] = useState<string>('');

  const sessionTypes = [
    { id: 'ml-ai', name: 'ML/AI Session', description: 'Machine Learning and Artificial Intelligence' },
    { id: 'frontend-backend', name: 'Frontend/Backend Session', description: 'Web Development and Backend Services' },
  ];

  const timeSlots = [
    '9:00 AM - 11:00 AM',
    '11:00 AM - 1:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM',
    '6:00 PM - 8:00 PM',
  ];

  const handleDateSelect = (dates: Date[]) => {
    setSelectedDates(dates);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSessionType || selectedDates.length === 0 || !timeSlot) {
      alert('Please fill in all fields');
      return;
    }
    alert('Reservation submitted successfully! We will contact you soon.');
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-6 sm:py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">Make a Reservation</h1>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Select Available Dates
              </h2>
              <Calendar onDateSelect={handleDateSelect} selectedDates={selectedDates} />
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Session Details
              </h2>
              <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Session Type *
                  </label>
                  <select
                    value={selectedSessionType}
                    onChange={(e) => setSelectedSessionType(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a session type</option>
                    {sessionTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                  {selectedSessionType && (
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {sessionTypes.find((t) => t.id === selectedSessionType)?.description}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Time Slot *
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any special requirements or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
                >
                  Submit Reservation
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

