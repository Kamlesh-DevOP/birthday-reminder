import { useState, useEffect, useRef } from 'react';
import birthdaysData from '../data/birthdays.json';

const SearchBar = ({ onSelect }) => {
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
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search for a name..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => { if (query) setIsOpen(true); }}
                />
                {query && (
                    <button
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={() => { setQuery(''); setResults([]); setIsOpen(false); }}
                    >
                        ✕
                    </button>
                )}
            </div>

            {isOpen && results.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {results.map((person, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-blue-50 cursor-pointer border-b last:border-b-0"
                            onClick={() => handleSelect(person)}
                        >
                            <div className="font-medium text-gray-800">{person.name}</div>
                            <div className="text-xs text-gray-500">Birthday: {person.date}</div>
                        </li>
                    ))}
                </ul>
            )}

            {isOpen && results.length === 0 && query !== '' && (
                <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg p-3 text-center text-gray-500">
                    No results found
                </div>
            )}
        </div>
    );
};

export default SearchBar;
