// src/components/Home.jsx

import React from 'react';
import { motion } from 'framer-motion';

const pageFadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      delay: 0.8,
    },
  },
};

const HomePage = () => {
    return (
        <motion.div 
            className="text-center p-4 pointer-events-auto"
            variants={pageFadeIn}
            initial="initial"
            animate="animate"
        >
            <div className="relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">Yashwanth .</h1>
                {/* This paragraph has theme-aware text colors and a smooth transition */}
                <p className="text-xl md:text-2xl text-light-text-secondary dark:text-dark-text-secondary transition-colors duration-1000">
                    AI and Full Stack Developer with a focus on AR, building intelligent,
                    <br /> real-time systems from front-end to deep learning back-end.
                </p>
            </div>
        </motion.div>
    );
};

export default HomePage;