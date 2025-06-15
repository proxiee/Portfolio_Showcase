// src/components/PatternLayer.jsx

import React from 'react';

// The pattern and rotation definitions remain the same.
const svgPatterns = [
    "/patterns/pattern-20.svg", "/patterns/pattern-22.svg", "/patterns/pattern-24.svg",
    "/patterns/pattern-21.svg", "/patterns/pattern-23.svg", "/patterns/pattern-25.svg",
];
const fixedRotations = [15, -10, 30, -25, 5, -35];

const PatternLayer = ({ stairIndex }) => {
    return (
        <div className="w-full h-full grid grid-cols-2 grid-rows-3">
            {svgPatterns.map((_, patternIndex) => {
                const svgSrc = svgPatterns[(patternIndex + stairIndex) % svgPatterns.length];
                const rotation = fixedRotations[patternIndex] + (stairIndex * 20);
                const alignmentClass = patternIndex % 2 === 0 ? 'items-end pb-4' : 'items-start pt-4';

                return (
                    <div key={patternIndex} className={`w-full h-full flex justify-center ${alignmentClass}`}>
                        <div
                            // ✨ The only change is to the opacity.
                            // We use `opacity-100` to make the white SVG patterns fully visible.
                            className="bg-contain bg-no-repeat bg-center opacity-100"
                            style={{
                                width: '50%',
                                height: '50%',
                                backgroundImage: `url(${svgSrc})`,
                                transform: `rotate(${rotation}deg)`,
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default PatternLayer;