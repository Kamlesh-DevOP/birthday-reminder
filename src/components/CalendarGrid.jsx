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
        <div className="bg-white dark:bg-slate-900 rounded-b-lg shadow-lg overflow-hidden transition-colors duration-300">
            {/* Weekdays Header */}
            <div className="grid grid-cols-7 bg-slate-100 dark:bg-slate-800 chess:bg-[#dabb9c] border-b border-slate-200 dark:border-slate-700 chess:border-[#b58863]">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="py-3 text-center font-bold text-slate-600 dark:text-slate-300 chess:text-[#4a332a] uppercase text-xs tracking-wider">
                        {day}
                    </div>
                ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 border-l border-t border-slate-200 dark:border-slate-800 chess:border-[#b58863]">
                {/* Blank days before start of month */}
                {blanks.map((_, i) => (
                    <div key={`blank-${i}`} className="min-h-[100px] border-r border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 chess:bg-[#f0d9b5] chess:border-transparent opacity-50"></div>
                ))}

                {/* Actual days */}
                {days.map((day, i) => {
                    const dateStr = formatDate(currentMonth, day); // MM-DD
                    const gridIndex = blanks.length + i; // Continuous index including blanks

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
                            index={gridIndex}
                        />
                    );
                })}

                {/* Blank days after end of month */}
                {endBlanks.map((_, i) => (
                    <div key={`end-blank-${i}`} className="min-h-[100px] border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 chess:bg-[#b58863] chess:border-transparent opacity-50"></div>
                ))}
            </div>
        </div>
    );
};

export default CalendarGrid;
