import { months } from '../utils/dateUtils';

const CalendarHeader = ({ currentMonth, currentYear, onPrev, onNext }) => {
    return (
        <div className="flex justify-between items-center bg-blue-500 text-white p-5 rounded-t-lg shadow-md">
            <button
                onClick={onPrev}
                className="text-2xl font-bold hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous Month"
            >
                &#10094;
            </button>

            <h2 className="text-xl md:text-3xl font-bold tracking-wide">
                {months[currentMonth]} {currentYear}
            </h2>

            <button
                onClick={onNext}
                className="text-2xl font-bold hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Next Month"
            >
                &#10095;
            </button>
        </div>
    );
};

export default CalendarHeader;
