import { useState, useEffect } from 'react';
import Calendar from './components/Calendar';
import ThemeToggle from './components/ThemeToggle';
import chessBg from './assets/chess-bg.jpg';

function App() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') ||
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark', 'chess');

        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            root.classList.add(systemTheme);
        } else {
            root.classList.add(theme);
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        if (theme === 'light') setTheme('dark');
        else setTheme('light'); // If dark or chess, go to light/toggle standard modes. 
        // Logic: if in chess mode, clicking toggle exits to light (or should it be previous? simple is better)
    };

    const triggerEasterEgg = () => {
        setTheme('chess');
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 chess:bg-transparent transition-colors duration-300 flex flex-col items-center py-10 relative isolate">
            {/* Chess Background Layer */}
            <div
                className="fixed inset-0 -z-20 hidden chess:block bg-cover bg-center pointer-events-none transition-opacity duration-500"
                style={{ backgroundImage: `url(${chessBg})` }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <header className="mb-8 text-center relative w-full max-w-4xl px-4">
                <div className="absolute right-4 top-0">
                    <ThemeToggle theme={theme} onToggle={toggleTheme} />
                </div>
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 chess:text-amber-50 chess:bg-none mb-2 drop-shadow-md">
                    Birthday Reminder
                </h1>
                <p className="text-slate-500 dark:text-slate-400 chess:text-amber-100/80">Never miss a birthday again!</p>
            </header>

            <main className="w-full px-4">
                <Calendar onEasterEgg={triggerEasterEgg} />
            </main>

            <footer className="mt-12 text-slate-400 dark:text-slate-600 chess:text-green-800/80 text-sm font-medium">
                © {new Date().getFullYear()} Birthday Reminder App
            </footer>
        </div>
    )
}

export default App
