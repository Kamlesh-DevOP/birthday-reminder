import React from 'react';

const Tooltip = ({ children, content }) => {
    return (
        <div className="relative group/tooltip inline-block max-w-full">
            {children}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 whitespace-nowrap z-50 shadow-lg pointer-events-none">
                {content}
                {/* Arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
        </div>
    );
};

export default Tooltip;
