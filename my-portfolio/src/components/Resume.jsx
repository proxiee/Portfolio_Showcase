import React from 'react';
import { motion } from 'framer-motion';

// Animation for the page fade-in
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

const ResumePage = () => (
    <motion.div 
        className="p-4 md:p-8 max-w-4xl mx-auto w-full pointer-events-auto"
        variants={pageFadeIn}
        initial="initial"
        animate="animate"
    >
        <h2 className="text-4xl font-bold mb-8 text-center md:text-left">Resume</h2>

        <div className="relative bg-light-card-bg dark:bg-dark-card-bg backdrop-blur-md border border-light-text-primary/10 dark:border-dark-text-primary/10 rounded-2xl shadow-2xl overflow-hidden p-8 transition-colors duration-1000">
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent_35%)] pointer-events-none" />

            {/* Resume Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h3 className="text-3xl font-bold">Yashwanth Raj Tirupati </h3>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary transition-colors duration-1000">MS in Computer Science Graduate </p>
                </div>
                <a 
                    href="/resume.pdf" // This should point to your resume file in the /public folder
                    download 
                    className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 font-semibold text-light-text-primary dark:text-dark-text-primary bg-light-text-primary/5 dark:bg-dark-text-primary/10 border-2 border-light-text-primary/10 dark:border-dark-text-primary/20 rounded-lg hover:bg-light-text-primary/10 dark:hover:bg-dark-text-primary/20 transition-all duration-500"
                >
                    Download PDF
                </a>
            </div>

            {/* Experience Section */}
            <div className="mb-8">
                <h4 className="text-2xl font-bold border-b border-light-text-primary/10 dark:border-dark-text-primary/20 pb-2 mb-4 transition-colors duration-1000">Experience</h4>
                <div className="mb-6">
                    <h5 className="text-xl font-semibold">Software Developer - Cognizant Technology Solutions </h5>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-2 transition-colors duration-1000">March 2023 - Aug 2023 </p>
                    <ul className="list-disc list-inside text-light-text-secondary dark:text-dark-text-secondary space-y-1 transition-colors duration-1000">
                        <li>Developed performance-critical backend services in Java, increasing throughput by over 15% for key data processing jobs. </li>
                        <li>Profiled and optimized critical code paths, reducing memory consumption by 20%. </li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-xl font-semibold">Programmer Analyst Intern - Cognizant Technology Solutions </h5>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-2 transition-colors duration-1000">March 2022 - Sept 2022 </p>
                    <ul className="list-disc list-inside text-light-text-secondary dark:text-dark-text-secondary space-y-1 transition-colors duration-1000">
                        <li>Contributed to the full software development lifecycle by resolving over 40 bugs in enterprise applications. </li>
                        <li>Leveraged debugging tools and log analysis to reduce average resolution time for critical bugs by 25%. </li>
                    </ul>
                </div>
            </div>

            {/* Projects Section */}
            <div className="mb-8">
                <h4 className="text-2xl font-bold border-b border-light-text-primary/10 dark:border-dark-text-primary/20 pb-2 mb-4 transition-colors duration-1000">Projects</h4>
                <div className="mb-6">
                    <h5 className="text-xl font-semibold">Real-time System Metrics Dashboard with AR Overlay </h5>
                    <ul className="list-disc list-inside text-light-text-secondary dark:text-dark-text-secondary space-y-1 transition-colors duration-1000">
                        <li>Developed a real-time system metrics dashboard using a custom Linux kernel module (C) and full stack pipeline (Node.js, React, WebSocket), enabling &lt;5ms latency visualizations</li>
                        <li>Integrated AR overlays with Three.js and gesture controls via OpenCV, delivering an immersive, spatial UI for system performance monitoring.</li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h5 className="text-xl font-semibold">Autonomous AI Trading Bot </h5>
                    <ul className="list-disc list-inside text-light-text-secondary dark:text-dark-text-secondary space-y-1 transition-colors duration-1000">
                        <li>Developed an AI-powered trading bot using Python, TensorFlow, and Alpaca API, achieving 87% accuracy in predicting stock trends with Reinforcement Learning (RL) and LSTMs</li>
                        <li>Integrated real-time stock data and deployed on AWS Lambda, automating trade execution and improving backtesting returns by 12% over baseline strategies.</li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-xl font-semibold">Low-Level Network Packet Sniffer </h5>
                    <ul className="list-disc list-inside text-light-text-secondary dark:text-dark-text-secondary space-y-1 transition-colors duration-1000">
                        <li>Built a command-line network packet analyzer in C using libpcap with less than 5% CPU overhead. </li>
                        <li>Implemented parsing logic for Ethernet, IP, and TCP headers. </li>
                    </ul>
                </div>
            </div>

            {/* Education Section */}
            <div className="mb-8">
                <h4 className="text-2xl font-bold border-b border-light-text-primary/10 dark:border-dark-text-primary/20 pb-2 mb-4 transition-colors duration-1000">Education</h4>
                <div className="mb-6">
                    <h5 className="text-xl font-semibold">M.S. in Computer Science - University of Dayton </h5>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-2 transition-colors duration-1000">Aug 2023 - May 2025 </p>
                </div>
                <div>
                    <h5 className="text-xl font-semibold">B.Tech. in Computer Science & Engineering - Jawaharlal Nehru Technological University </h5>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-2 transition-colors duration-1000">June 2018 - July 2022 </p>
                </div>
            </div>

            {/* Skills Section */}
            <div>
                <h4 className="text-2xl font-bold border-b border-light-text-primary/10 dark:border-dark-text-primary/20 pb-2 mb-4 transition-colors duration-1000">Skills</h4>
                <div className="text-light-text-secondary dark:text-dark-text-secondary transition-colors duration-1000">
                    <p className="mb-2"><strong className="font-semibold text-light-text-primary dark:text-dark-text-primary">Core:</strong> Java, Python, Distributed Systems, Microservices, ML Model Serving (LLMs), Performance Tuning, AWS, GCP </p>
                    <p><strong className="font-semibold text-light-text-primary dark:text-dark-text-primary">Key Tech:</strong> Azure (App Service, Functions, Cosmos DB), AWS, GCP, Docker, Kubernetes, CI/CD (Jenkins, Azure Pipelines), Git </p>
                </div>
            </div>

        </div>
    </motion.div>
);

export default ResumePage;