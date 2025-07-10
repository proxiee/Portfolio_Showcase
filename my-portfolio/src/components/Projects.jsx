import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaGithub } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'framer-motion';


const ActionButton = ({ href, children, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full px-6 py-3 font-semibold text-black dark:text-white bg-black/5 dark:bg-white/10 border-2 border-black/10 dark:border-white/20 rounded-lg hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-500"
    >
        {icon}
        {children}
    </a>
);

const ProjectsPage = () => {
    const projects = [
        {
            title: "IOS Audio Transcription App",
            description: "A production-ready IOS application that records audio in 30-second segments, transcribes them using OpenAI Whisper API with local fallback, and manages everything with SwiftData. Built to handle real-world audio challenges including interruptions, background recording, and network failures.",
            tech: ["XCode", "Swift"],
            image: "https://crocoapps.com/upload/resize_cache/iblock/af8/1200_630_2/preview.jpg",
            sourceCodeUrl: "https://github.com/proxiee/Twinminds-project.git",
            liveLinkUrl: "https://bc25-198-85-230-105.ngrok-free.app",
        },
        {
            title: "ApplyWise",
            description: "Be it 50 applications or 500, all you have to be is lucky just once, and we have the opportunity to increase our luck by applying more. That's why I built ApplyWise. It's a tool designed to give you that power back. With ApplyWise, you can filter hundreds of recent jobs from different websites and instantly tailor the custom resumes and cover letters that get you noticed. It handles the volume and the quality, so you can focus on being ready. Login -> Provide your details -> Scrape jobs -> Get tailored Resume/CV -> Apply -> Track applications. Good Luck to us.",
            tech: ["Flask", "PostgreSQL"],
            image: "project_pics//apply_wise.png",
            sourceCodeUrl: "https://github.com/proxiee/ApplyWise.git",
            liveLinkUrl: "https://bc25-198-85-230-105.ngrok-free.app",
        },
        {
            title: "Resume Automation",
            description: "An intelligent résumé tailoring tool that analyzes job descriptions and dynamically generates customized résumés by prioritizing relevant skills, experiences, and keywords.",
            tech: ["React", "Node.js", "MongoDB"],
            image: "project_pics//create an image for .png",
            sourceCodeUrl: "https://github.com/proxiee/RESUME_CREATION.git",
            liveLinkUrl: "#",
        },
        {
            title: "3D Portfolio",
            description: "This is a 3D portfolio website that showcases projects in an interactive 3D environment, allowing users to navigate through a virtual gallery of work.",
            tech: ["Three.js", "React", "Framer Motion"],
            image: "project_pics//Screenshot 2025-06-14 233950.png",
            sourceCodeUrl: "https://github.com",
            liveLinkUrl: "#",
        },
        {
            title: "Data Dashboard",
            description: "A dashboard for visualizing complex datasets, featuring real-time updates and reports.",
            tech: ["Python", "Flask", "D3.js"],
            image: "project_pics//What-Is-AI-Text-to-Speech-and-How-Does-It-Work-.jpeg",
            sourceCodeUrl: "https://github.com",
            liveLinkUrl: "#",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const handleDragEnd = (event, info) => {
        const swipeThreshold = 30; 
        if (info.offset.x < -swipeThreshold) {
            handleNext();
        } else if (info.offset.x > swipeThreshold) {
            handlePrevious();
        }
    };

    const pageFadeIn = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut', delay: 0.8 } },
    };

    return (
        <motion.div 
            className="flex flex-col items-center justify-center h-full w-full p-4 relative overflow-hidden pointer-events-auto"
            variants={pageFadeIn}
            initial="initial"
            animate="animate"
        >
            <div className="relative w-full max-w-5xl h-[70vh] min-h-[500px]" style={{ perspective: '1000px' }}>
                <AnimatePresence>
                    {projects.map((project, index) => {
                        const relativeIndex = index - currentIndex;
                        const isVisible = Math.abs(relativeIndex) <= 1;
                        if (!isVisible) return null;

                        return (
                            <motion.div
                                key={index}
                                className="absolute w-full h-full p-4 cursor-grab active:cursor-grabbing"
                                style={{ transformStyle: 'preserve-3d' }}
                                initial={{
                                    transform: `translateX(${(relativeIndex) * 60}%) rotateY(${-relativeIndex * 50}deg) scale(0.7)`,
                                    opacity: 0, zIndex: 3 - Math.abs(relativeIndex)
                                }}
                                animate={{
                                    transform: `translateX(${relativeIndex * 35}%) rotateY(${-relativeIndex * 40}deg) scale(${1 - Math.abs(relativeIndex) * 0.2})`,
                                    opacity: 1, zIndex: 3 - Math.abs(relativeIndex)
                                }}
                                exit={{
                                    transform: `translateX(${(relativeIndex - Math.sign(relativeIndex)) * 60}%) rotateY(${-relativeIndex * 50}deg) scale(0.7)`,
                                    opacity: 0,
                                }}
                                transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={handleDragEnd}
                                dragElastic={0.1}
                            >
                                <div className="w-full h-full flex flex-col relative bg-white/60 dark:bg-black/40 backdrop-blur-sm border border-black/10 dark:border-white/20 rounded-2xl shadow-2xl overflow-hidden transition-colors duration-1000">
                                    {/* ✨ The card content is now fully restored inside this div ✨ */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent_35%)] pointer-events-none" />
                                    <div className="w-full h-1/2 overflow-hidden">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col p-6 h-1/2">
                                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech) => (
                                                <span key={tech} className="bg-black/5 dark:bg-white/10 text-xs px-2 py-1 rounded-full transition-colors duration-1000">{tech}</span>
                                            ))}
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow transition-colors duration-1000">{project.description}</p>
                                        <div className="flex gap-4 mt-auto">
                                            <ActionButton href={project.sourceCodeUrl} icon={<FaGithub />}>Source</ActionButton>
                                            {/* <ActionButton href={project.liveLinkUrl} icon={<FiExternalLink />}>Live</ActionButton> */}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
            
            <div className="flex items-center gap-8 mt-8">
                <button onClick={handlePrevious} className="p-3 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/20 transition-colors duration-500">
                    <FaArrowLeft />
                </button>
                <div className="text-lg font-mono">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </div>
                <button onClick={handleNext} className="p-3 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/20 transition-colors duration-500">
                    <FaArrowRight />
                </button>
            </div>
        </motion.div>
    );
};

export default ProjectsPage;
