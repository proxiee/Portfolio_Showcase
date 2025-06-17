// src/components/CircleTransition.jsx

import { motion } from 'framer-motion';

// Define the animation variants for the circle
const circleVariants = {
    // Initial state (new page entering): Circle is fully expanded, covering the screen
    initial: {
        clipPath: 'circle(120% at 50% 50%)',
    },
    // Animate state (page is visible): Circle shrinks to nothing
    animate: {
        clipPath: 'circle(0% at 50% 50%)',
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1], // A nice cubic-bezier for a snappy feel
            delay: 0.2,
        }
    },
    // Exit state (old page leaving): Circle expands from the center to cover the screen
    exit: {
        clipPath: 'circle(120% at 50% 50%)',
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
        }
    }
}

const CircleTransition = () => {
  return (
    // The transition layer itself. It's a fixed div that will sit on top of everything (z-50).
    <motion.div
        className="h-screen w-screen fixed top-0 left-0 bg-light-transition-bg dark:bg-dark-transition-bg pointer-events-none z-50"
        variants={circleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
    </motion.div>
  )
}

export default CircleTransition;