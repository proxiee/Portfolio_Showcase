// src/components/StairTransition.jsx

import Stairs from './Stairs';

// This component just holds our Stairs animation.
// AnimatePresence in App.js will handle the rest.
const StairTransition = () => {
    return (
        <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-50 flex'>
            <Stairs />
        </div>
    );
};

export default StairTransition;