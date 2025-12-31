'use client';

import { useState, useEffect } from 'react';

interface CalendarProps {
  onDateSelect?: (dates: Date[]) => void;
  selectedDates?: Date[];
}

export default function Calendar({ onDateSelect, selectedDates = [] }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selected, setSelected] = useState<Date[]>(selectedDates);

  useEffect(() => {
    setSelected(selectedDates);
  }, [selectedDates]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const isDateSelected = (date: Date | null) => {
    if (!date) return false;
    return selected.some(
      (selectedDate) =>
        selectedDate.getDate() === date.getDate() &&
        selectedDate.getMonth() === date.getMonth() &&
        selectedDate.getFullYear() === date.getFullYear()
    );
  };

  const isDatePast = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleDateClick = (date: Date | null) => {
    if (!date || isDatePast(date)) return;

    const newSelected = [...selected];
    const index = newSelected.findIndex(
      (d) =>
        d.getDate() === date.getDate() &&
        d.getMonth() === date.getMonth() &&
        d.getFullYear() === date.getFullYear()
    );

    if (index > -1) {
      newSelected.splice(index, 1);
    } else {
      newSelected.push(date);
    }

    setSelected(newSelected);
    if (onDateSelect) {
      onDateSelect(newSelected);
    }
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 sm:p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <button
          onClick={goToPreviousMonth}
          className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 px-2 text-center">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button
          onClick={goToNextMonth}
          className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 py-1 sm:py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {days.map((date, index) => {
          const isSelected = isDateSelected(date);
          const isPast = isDatePast(date);

          return (
            <button
              key={index}
              onClick={() => handleDateClick(date)}
              disabled={!date || isPast}
              className={`
                aspect-square p-1 sm:p-2 rounded-md transition-all text-xs sm:text-sm md:text-base
                ${!date ? 'cursor-default' : ''}
                ${isPast ? 'opacity-40 cursor-not-allowed bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'}
                ${isSelected ? 'bg-blue-600 text-white hover:bg-blue-700 font-semibold' : 'text-gray-700 dark:text-gray-300'}
                ${date && !isPast && !isSelected ? 'hover:bg-blue-50 dark:hover:bg-blue-900/20' : ''}
              `}
            >
              {date ? date.getDate() : ''}
            </button>
          );
        })}
      </div>

      {selected.length > 0 && (
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">Selected dates:</p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {selected.map((date, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs sm:text-sm"
              >
                {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

