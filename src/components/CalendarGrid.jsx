import { getDaysInMonth, getFirstDayOfMonth, formatDate, isToday } from '../utils/dateUtils';
import DayCell from './DayCell';

const CalendarGrid = ({ currentMonth, currentYear, birthdaysData, highlightedPerson }) => {
    const totalDays = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfWeek = getFirstDayOfMonth(currentMonth, currentYear);

    // Create empty slots for days before the 1st
    const blanks = Array.from({ length: firstDayOfWeek });

    // Create current month days
    const days = Array.from({ length: totalDays }, (_, i) => i + 1);

    // Fill remaining slots to make a complete grid (optional, better UI)
    const totalSlots = firstDayOfWeek + totalDays;
    const remainingSlots = totalSlots <= 35 ? 35 - totalSlots : 42 - totalSlots; // Min 5 rows (35), Max 6 rows (42)
    const endBlanks = Array.from({ length: Math.max(0, remainingSlots) });

    return (
        <div className="bg-white rounded-b-lg shadow-lg overflow-hidden">
            {/* Weekdays Header */}
            <div className="grid grid-cols-7 bg-gray-100 border-b border-gray-200">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="py-3 text-center font-bold text-gray-600 uppercase text-xs tracking-wider">
                        {day}
                    </div>
                ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7">
                {/* Blank days before start of month */}
                {blanks.map((_, i) => (
                    <div key={`blank-${i}`} className="min-h-[100px] border border-gray-100 bg-gray-50 opacity-50"></div>
                ))}

                {/* Actual days */}
                {days.map(day => {
                    const dateStr = formatDate(currentMonth, day); // MM-DD

                    // Filter birthdays for this day
                    let daysBirthdays = birthdaysData.filter(b => b.date === dateStr);

                    // Check if this day should be highlighted due to search
                    const isHighlighted = highlightedPerson &&
                        highlightedPerson.date === dateStr &&
                        parseInt(highlightedPerson.date.split('-')[1]) === day;

                    // If highlighted person is in the list, mark them as target
                    if (highlightedPerson) {
                        daysBirthdays = daysBirthdays.map(b => ({
                            ...b,
                            isTarget: b.name === highlightedPerson.name
                        }));
                    }

                    return (
                        <DayCell
                            key={day}
                            day={day}
                            month={currentMonth}
                            year={currentYear}
                            birthdays={daysBirthdays}
                            isToday={isToday(day, currentMonth, currentYear)}
                            isHighlighted={isHighlighted}
                        />
                    );
                })}

                {/* Blank days after end of month */}
                {endBlanks.map((_, i) => (
                    <div key={`end-blank-${i}`} className="min-h-[100px] border border-gray-100 bg-gray-50 opacity-50"></div>
                ))}
            </div>
        </div>
    );
};

export default CalendarGrid;
