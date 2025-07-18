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
            className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 dark:bg-black/10 dark:border-black/20 dark:hover:bg-black/20 transition-colors duration-500"
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
                    {theme === 'dark' ? <FaSun className="text-white"/> : <FaMoon className="text-black"/>}
                </motion.div>
            </AnimatePresence>
        </button>
    );
};

export default ThemeToggle;