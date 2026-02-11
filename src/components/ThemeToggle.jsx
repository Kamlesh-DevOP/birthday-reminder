import React from 'react';

const ThemeToggle = ({ theme, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 chess:hover:bg-amber-100/20 chess:text-white transition-colors group relative overflow-hidden z-50"
            aria-label="Toggle Theme"
            title={theme === 'chess' ? 'Exit Chess Mode' : `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        >
            <div className={`relative w-6 h-6 flex items-center justify-center transition-transform duration-500 ease-in-out ${theme !== 'chess' ? 'group-hover:rotate-180' : ''}`}>
                {theme === 'light' && <span className="text-xl">☀️</span>}
                {theme === 'dark' && <span className="text-xl">🌙</span>}
                {theme === 'chess' && <span className="text-xl">♟️</span>}
            </div>
        </button>
    );
};

export default ThemeToggle;
