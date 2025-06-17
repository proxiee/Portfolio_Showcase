import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { motion } from 'framer-motion';

// Using a consistent fade-in animation across all pages
const pageFadeIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
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

const ContactPage = () => (
    <motion.div
        className="p-8 text-center pointer-events-auto"
        variants={pageFadeIn}
        initial="initial"
        animate="animate"
    >
        {/* This h2 will correctly inherit its theme color */}
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>

        {/* ✨ 1. Updated paragraph text color for both themes */}
        <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8 max-w-2xl mx-auto transition-colors duration-1000">
            I'm currently available for freelance work and open to new opportunities. Feel free to reach out.
        </p>

        {/* ✨ 2. Updated email link hover color for both themes */}
        <a 
            href="mailto:yashwanthgudisena@gmail.com" 
            className="text-2xl font-bold text-light-accent dark:text-dark-accent hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-500"
        >
            tyashwanth99@gmail.com
        </a>

        <div className="flex justify-center space-x-6 mt-8 pointer-events-auto">
            {/* ✨ 3. Updated social icon colors and hover effects for both themes */}
            <a 
                href="https://github.com/proxiee" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-500"
            >
                <FaGithub size={30} />
            </a>
            <a 
                href="https://linkedin.com/in/yashwanthtirupati" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-500"
            >
                <FaLinkedin size={30} />
            </a>
            <a 
                href="mailto:tyashwanth99@gmail.com" 
                className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-500"
            >
                <FaEnvelope size={30} />
            </a>
        </div>
    </motion.div>
);

export default ContactPage;