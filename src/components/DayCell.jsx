import React from 'react';

const DayCell = ({ day, month, year, birthdays, isToday, isHighlighted }) => {
    return (
        <div
            className={`
                min-h-[80px] md:min-h-[100px] border border-gray-200 p-2 relative overflow-hidden transition-all duration-300
                ${isToday ? 'bg-green-100 border-green-500 border-2' : 'bg-white'}
                ${isHighlighted ? 'ring-4 ring-pink-400 ring-opacity-70 bg-pink-50' : ''}
                ${birthdays.length > 0 ? 'bg-yellow-50' : ''}
                hover:shadow-md
            `}
            id={`day-${day}`} // ID for scrolling/focus if needed
        >
            <div className="font-bold text-gray-700 mb-1">{day}</div>

            <div className="flex flex-col gap-1">
                {birthdays.map((person, idx) => (
                    <small
                        key={idx}
                        className={`
                            block text-xs text-gray-800 truncate px-1 rounded
                            ${isHighlighted && person.isTarget ? 'bg-pink-200 font-bold' : ''}
                        `}
                        title={person.name}
                    >
                        {person.name}
                    </small>
                ))}
            </div>
        </div>
    );
};

export default DayCell;
