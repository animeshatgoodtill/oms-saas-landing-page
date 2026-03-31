'use client';

import React from 'react';

const AnimatedGradientBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="gradient-animation absolute inset-0"></div>
            <style jsx>{`
                .gradient-animation {
                    background: linear-gradient(
                        -45deg,
                        #FED835,
                        #304fff,
                        #FF6B6B,
                        #4ECDC4,
                        #FED835
                    );
                    background-size: 400% 400%;
                    animation: gradientShift 15s ease infinite;
                    opacity: 0.15;
                }

                @keyframes gradientShift {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>
        </div>
    );
};

export default AnimatedGradientBackground;
