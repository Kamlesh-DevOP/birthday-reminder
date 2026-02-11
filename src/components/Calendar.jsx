import { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import SearchBar from './SearchBar';
import birthdaysData from '../data/birthdays.json';

const Calendar = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [highlightedPerson, setHighlightedPerson] = useState(null);

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleSearchSelect = (person) => {
        // Person.date is "MM-DD"
        const [m, d] = person.date.split('-');
        const targetMonth = parseInt(m) - 1;

        // Use current year
        setCurrentMonth(targetMonth);
        setHighlightedPerson(person);

        // Optional: clear highlight after some time? 
        // For now, let's keep it until month changes or new search.
    };

    // Clear highlight when month changes manually, unless we want to keep it?
    // Better to clear it to avoid confusion if user navigates away.
    const onMonthChange = (action) => {
        setHighlightedPerson(null);
        action();
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <SearchBar onSelect={handleSearchSelect} />

            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
                <CalendarHeader
                    currentMonth={currentMonth}
                    currentYear={currentYear}
                    onPrev={() => onMonthChange(handlePrevMonth)}
                    onNext={() => onMonthChange(handleNextMonth)}
                />

                <CalendarGrid
                    currentMonth={currentMonth}
                    currentYear={currentYear}
                    birthdaysData={birthdaysData}
                    highlightedPerson={highlightedPerson}
                />
            </div>
        </div>
    );
};

export default Calendar;
