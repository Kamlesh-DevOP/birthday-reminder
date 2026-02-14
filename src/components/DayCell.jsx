import React from 'react';
import Tooltip from './Tooltip';
import { toSentenceCase } from '../utils/stringUtils';

const DayCell = ({ day, month, year, birthdays, isToday, isHighlighted, index }) => {
    const isDarkSquare = index % 2 !== 0; // Checkerboard logic

    return (
        <div
            className={`
                min-h-[80px] md:min-h-[100px] border border-slate-200 dark:border-slate-700 chess:border-stone-800 p-2 relative transition-all duration-300
                ${isToday ? 'bg-emerald-50 dark:bg-emerald-950/40 chess:bg-amber-100 chess:border-amber-600 border-emerald-500 dark:border-emerald-500/50 border-2' :
                    isDarkSquare ? 'bg-white dark:bg-slate-900 chess:bg-[#b58863] chess:text-white' : 'bg-white dark:bg-slate-900 chess:bg-[#f0d9b5] chess:text-black'}
                ${isHighlighted ? 'ring-4 ring-blue-400 dark:ring-blue-400 chess:ring-brown-400 ring-opacity-70 bg-blue-50 dark:bg-blue-900/30 chess:bg-brown-900/20' : ''}
                ${birthdays.length > 0 && !isToday && !isHighlighted ? 'bg-amber-50 dark:bg-teal-900/30' : ''}
                hover:shadow-md hover:z-10
            `}
            id={`day-${day}`} // ID for scrolling/focus if needed
        >
            <div className={`font-bold mb-1 ${isToday ? 'text-emerald-700 dark:text-emerald-400 chess:text-amber-900' : 'text-slate-700 dark:text-slate-300 chess:text-inherit'}`}>{day}</div>

            <div className="flex flex-col gap-1">
                {birthdays.map((person, idx) => (
                    <Tooltip key={idx} content={`${toSentenceCase(person.name)} (${person.date})`}>
                        <div
                            className={`
                                block text-xs text-slate-800 dark:text-slate-200 truncate px-1 rounded cursor-help
                                ${isHighlighted && person.isTarget ? 'bg-blue-200 dark:bg-blue-800 chess:bg-brown-200 chess:text-brown-900 font-bold' : ''}
                            `}
                        >
                            {toSentenceCase(person.name)}
                        </div>
                    </Tooltip>
                ))}
            </div>
        </div>
    );
};

export default DayCell;
