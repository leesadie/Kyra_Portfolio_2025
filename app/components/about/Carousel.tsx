'use client';

import { useState, useEffect, JSX } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import nasa from '@/public/images/about/nasa.svg'
import juneau from '@/public/images/about/alaska.svg'
import hiking from '@/public/images/about/hiking.svg'
import tofino from '@/public/images/about/tofino.svg'
import yosemite from '@/public/images/about/yosemite.svg'
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

interface ImageData {
    src: StaticImageData;
}

const images: ImageData[] = [
    { src: nasa },
    { src: juneau },
    { src: hiking },
    { src: tofino },
    { src: yosemite },
];

export default function Carousel(): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const prevSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isHovered]);

    return (
        <div
            className="relative w-full max-w-screen-lg mx-auto"
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative h-[500px] w-[600px] overflow-hidden">
                <Image
                    src={images[currentIndex].src}
                    alt={`Slider Image ${currentIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out"
                />
            </div>

            {/* Previous Button */}
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-black"
                onClick={prevSlide}
            >
                <IoIosArrowDropleft size={40} />
            </button>

            {/* Next Button */}
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-black"
                onClick={nextSlide}
            >
                <IoIosArrowDropright size={40} />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-10 rounded-md transition-all ${
                            index === currentIndex ? "bg-cyan-700" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}