// src/context/ThemeContext.js

import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Try to read from localStorage, else default to "dark"
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

useEffect(() => {
    const root = window.document.documentElement; // This is the <html> tag

    // 1. (THE FIX) Set the color-scheme property on the <html> tag.
    // This tells the browser to use its light or dark built-in styles.
    root.style.colorScheme = theme;

    // 2. Set the theme class for your Tailwind styles to use.
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    // 3. Save the user's preference.
    localStorage.setItem('theme', theme);
}, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
