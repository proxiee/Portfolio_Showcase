// src/components/GlitchTransition.jsx

import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

// This component will create our glitchy, blocky transition effect.
const GlitchTransition = () => {
    const { theme } = useTheme(); // Get the current theme

    // --- Configuration ---
    // You can easily tweak these values to change the look and feel.
    const gridSize = {
        rows: 10,
        cols: 10,
    };
    // Updated blockColor to use CSS variables via theme
    const blockColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-glitch-block').trim();
    const animationDuration = 0.4; // How long each block takes to animate.
    const maxDelay = 0.8; // The maximum random delay, creating the scramble effect.

    const totalBlocks = gridSize.rows * gridSize.cols;

    // --- Animation Variants ---
    const blockVariants = {
        // State when the page is visible. Blocks are invisible.
        initial: {
            opacity: 0,
        },
        // State when we are covering the page. Blocks become visible.
        // We use a random delay for each block to create the "scramble" effect.
        exit: {
            opacity: 1,
            transition: {
                duration: animationDuration,
                delay: Math.random() * maxDelay,
            },
        },
        // State when we are revealing the new page. Blocks fade out again.
        animate: {
             opacity: 0,
             transition: {
                duration: animationDuration,
                delay: Math.random() * maxDelay,
            },
        }
    };

    // We need a useEffect to update blockColor when the theme changes,
    // because getComputedStyle won't re-evaluate automatically on theme change.
    // However, for this specific transition, it usually runs once and then it's done.
    // If the transition could be re-triggered while the app is live AND the theme could change
    // during that time, then a useEffect would be more critical.
    // For simplicity and typical usage of such a transition, direct usage is often fine.
    // If issues arise, a state variable for blockColor updated by useEffect would be the fix.

    return (
        // The main container for the grid. It's fixed to cover the entire screen.
        <div
            className="h-screen w-screen fixed top-0 left-0 grid pointer-events-none z-50"
            style={{
                gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
                gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
            }}
        >
            {/* Create the grid of blocks by mapping an array */}
            {[...Array(totalBlocks)].map((_, index) => (
                <motion.div
                    key={index}
                    className="w-full h-full"
                    style={{ backgroundColor: blockColor }} // blockColor is now theme-dependent
                    variants={blockVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                />
            ))}
        </div>
    );
};

export default GlitchTransition;