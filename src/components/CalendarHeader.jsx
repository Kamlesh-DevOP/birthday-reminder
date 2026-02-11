import { months } from '../utils/dateUtils';

const CalendarHeader = ({ currentMonth, currentYear, onPrev, onNext, onJumpToToday }) => {
    return (
        <div className="flex justify-between items-center bg-indigo-600 dark:bg-slate-800 chess:bg-[#5c4033] text-white p-5 rounded-t-lg shadow-md transition-colors duration-300 border-b border-indigo-700 dark:border-slate-700 chess:border-[#3e2b22]">
            <button
                onClick={onPrev}
                className="text-2xl font-bold hover:bg-indigo-700 dark:hover:bg-slate-700 chess:hover:bg-[#4a332a] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous Month"
            >
                &#10094;
            </button>

            <div className="flex flex-col items-center">
                <h2 className="text-xl md:text-3xl font-bold tracking-wide">
                    {months[currentMonth]} {currentYear}
                </h2>
                <button
                    onClick={onJumpToToday}
                    className="text-xs bg-indigo-500 hover:bg-indigo-400 text-white px-2 py-1 rounded mt-1 transition-colors dark:bg-slate-700 dark:hover:bg-slate-600 chess:bg-[#8b5a2b] chess:hover:bg-[#a67c52] border border-indigo-400 dark:border-slate-600 chess:border-[#5c4033]"
                >
                    Jump to Today
                </button>
            </div>

            <button
                onClick={onNext}
                className="text-2xl font-bold hover:bg-indigo-700 dark:hover:bg-slate-700 chess:hover:bg-[#4a332a] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Next Month"
            >
                &#10095;
            </button>
        </div>
    );
};

export default CalendarHeader;
