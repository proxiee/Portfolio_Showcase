// src/components/ThemeToggle.jsx

import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-light-text-primary/5 border border-light-text-primary/10 hover:bg-light-text-primary/10 dark:bg-dark-text-primary/5 dark:border-dark-text-primary/10 dark:hover:bg-dark-text-primary/10 transition-colors duration-500"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === 'dark' ? <FaSun className="text-dark-text-primary"/> : <FaMoon className="text-light-text-primary"/>}
                </motion.div>
            </AnimatePresence>
        </button>
    );
};

export default ThemeToggle;