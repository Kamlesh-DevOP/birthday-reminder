import Calendar from './components/Calendar';

function App() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                    Birthday Reminder
                </h1>
                <p className="text-gray-500">Never miss a birthday again!</p>
            </header>

            <main className="w-full px-4">
                <Calendar />
            </main>

            <footer className="mt-12 text-gray-400 text-sm">
                © {new Date().getFullYear()} Birthday Reminder App
            </footer>
        </div>
    )
}

export default App
