'use client';

import { font_med } from "@/app/fonts";
import { useState } from "react";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavButton: React.FC<ButtonProps> = ({
    label,
    onClick,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false)

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            className={`
                transition
                ${isHovered ? 'opacity-50' : ''} 
                ${isFocused ? 'font-bold' : ''}
                text-neutral-900
                py-2
                px-4
                ease-out 
                duration-300
                cursor-pointer`}
        >
            {label}
        </button>
    );
}

export default NavButton;