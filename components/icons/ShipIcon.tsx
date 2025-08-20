
import React from 'react';

interface IconProps {
    className?: string;
}

export const ShipIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path d="M2 14.5A2.5 2.5 0 004.5 17H19.5A2.5 2.5 0 0022 14.5V12l-5.41-6.5A3 3 0 0014.28 4H9.72a3 3 0 00-2.31 1.5L2 12v2.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 17h20" />
    </svg>
);
