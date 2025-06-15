import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Import ThemeProvider and the useTheme hook
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Import all your components
import HomePage from './components/Home';
import ProjectsPage from './components/Projects';
import ResumePage from './components/Resume';
import ContactPage from './components/Contact';
import StairTransition from './components/StairTransition';
import BackgroundEffects from './components/BackgroundEffects';

// We create this sub-component so it can access the `useTheme` hook
// because it's inside the ThemeProvider.
const AppContent = () => {
    const location = useLocation();
    const { toggleTheme } = useTheme(); // Get the toggle function from the context
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close the menu when the route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const NavLink = ({ to, children }) => (
        <RouterNavLink
            to={to}
            className={({ isActive }) =>
                `w-full text-left p-4 text-lg font-semibold transition-colors duration-500 ${
                    isActive
                        ? 'text-black dark:text-white'
                        : 'text-gray-500 hover:text-black dark:hover:text-white'
                }`
            }
        >
            {children}
        </RouterNavLink>
    );

    return (
        // This main div has theme-aware background and text colors
        <div className="bg-gray-100 text-black dark:bg-black dark:text-white transition-colors duration-1000 min-h-screen font-sans flex flex-col md:flex-row">
            <BackgroundEffects />
            <AnimatePresence mode="wait">
                <StairTransition key={location.pathname} />
            </AnimatePresence>

            {/* Header for mobile */}
            <header className="md:hidden flex justify-between items-center p-4 relative z-30 border-b border-black/10 dark:border-white/10">
                <button onClick={toggleTheme} className="text-2xl font-bold" aria-label="Toggle theme">
                    <h1>☻</h1>
                </button>
                <button onClick={toggleMenu} className="z-40" aria-label="Toggle menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>
            </header>

            {/* Sidebar for desktop */}
            <aside className="hidden md:flex flex-col w-64 p-8 relative z-20 border-r border-black/10 dark:border-white/10 transition-colors duration-1000">
                <button onClick={toggleTheme} className="text-2xl font-bold mb-12 text-left" aria-label="Toggle theme">
                    <h1>☻</h1>
                </button>
                <nav className="flex flex-col space-y-4">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/resume">Resume</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </aside>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-0 left-0 w-full h-full bg-gray-100 dark:bg-black z-20"
                    >
                        <nav className="flex flex-col items-center justify-center h-full space-y-4 pt-16">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/projects">Projects</NavLink>
                            <NavLink to="/resume">Resume</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <main className="flex-1 overflow-y-auto relative z-10 flex items-center justify-center pointer-events-none">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/resume" element={<ResumePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </main>
        </div>
    );
}

// The main App component wraps everything in the ThemeProvider
export default function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}
