// ScrollButton.js
import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline'; // Use Heroicons for the arrow icon

const ScrollButton = () => {
    return (
        <div className="z-10 fixed bottom-5 right-5 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300 animate-bounce-slow">
            <ArrowDownIcon className="w-6 h-6 text-white" />
        </div>
    );
};

export default ScrollButton;

