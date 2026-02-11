import { useState, useEffect, useRef } from 'react';
import birthdaysData from '../data/birthdays.json';

const SearchBar = ({ onSelect, onEasterEgg }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            setIsOpen(false);
            return;
        }

        if (query.toLowerCase() === 'chess') {
            if (onEasterEgg) onEasterEgg();
            setQuery(''); // Clear search bar
            setResults([]); // Clear results
            setIsOpen(false); // Close dropdown
            return;
        }

        const filtered = birthdaysData.filter(person =>
            person.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setIsOpen(true);
    }, [query]);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const handleSelect = (person) => {
        setQuery(person.name);
        onSelect(person);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full max-w-md mx-auto mb-6" ref={wrapperRef}>
            <div className="relative">
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 dark:border-slate-600 dark:text-white dark:placeholder-slate-400 transition-colors"
                    placeholder="Search for a name..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => { if (query) setIsOpen(true); }}
                />
                {query && (
                    <button
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        onClick={() => { setQuery(''); setResults([]); setIsOpen(false); }}
                    >
                        ✕
                    </button>
                )}
            </div>

            {isOpen && results.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {results.map((person, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer border-b dark:border-slate-700 last:border-b-0"
                            onClick={() => handleSelect(person)}
                        >
                            <div className="font-medium text-slate-800 dark:text-slate-200">{person.name}</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">Birthday: {person.date}</div>
                        </li>
                    ))}
                </ul>
            )}

            {isOpen && results.length === 0 && query !== '' && (
                <div className="absolute z-10 w-full mt-1 bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-lg shadow-lg p-3 text-center text-slate-500 dark:text-slate-400">
                    No results found
                </div>
            )}
        </div>
    );
};

export default SearchBar;
