// src/components/Stairs.jsx

import { motion } from 'framer-motion';
import PatternLayer from './PatternLayer';

// The animation logic remains the same.
const stairAnimation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: "0%" },
};

const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
        [...Array(6)].map((_, index) => (
            <motion.div
                key={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: reverseIndex(index) * 0.1,
                }}
                // ✨ 1. We apply the frosted glass effect classes here.
                // - `bg-black/30`: A semi-transparent black background.
                // - `backdrop-blur-md`: This is the key. It blurs whatever is behind the div.
                // - `border-r border-white/10`: A subtle border on the right edge to separate the panels.
                className="h-full w-full relative overflow-hidden bg-black/30 backdrop-blur-md border-r border-white/10"
            >
                <PatternLayer stairIndex={index} />
            </motion.div>
        ))
    );
};

export default Stairs;