'use client';

import { font_med, font_reg } from "@/app/fonts";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";

font_med

const Hero = () => {
    return (
        <div className="flex flex-col mt-20 mx-48">
            <div className="text-4xl">
                Hi, I’m Kyra. I’m currently a Fulbright Scholar in Australia and will be at MIT Lincoln Laboratory in 2026.
            </div>
            <div className="mt-10 text-lg">
                SELECTED
            </div>
            <div className={`${font_med.className} text-7xl mt-2`}>
                Work
            </div>
            <div className="grid grid-cols-2 grid-rows-5 mt-10 pb-20">
                <div>
                    <Image 
                        src='/images/lung2.svg'
                        alt="lung"
                        width={100}
                        height={100}
                        className="object-cover w-full h-full min-h-0 justify-center items-center hover:opacity-80 cursor-pointer transition"
                    />
                </div>
                <div className={` ${font_med.className} text-2xl mx-5`}>
                    Lung Diffusing Capacity in Extreme Environments (2023-2024)
                    <div className="flex flex-row gap-3 pt-2">
                        <div className={`${font_reg.className} italic pt-1`}>
                            University of Puget Sound
                        </div>
                        <div className="text-neutral-900 hover:translate-x-2 hover:opacity-50 cursor-pointer transition">
                            <IoIosArrowDropright size={36}/>
                        </div>
                    </div>
                </div>
                <div className={`${font_med.className} text-2xl mr-5 mt-5`}>
                    Mathematical Modeling for NASA’s Spacesuit Motion Database (2022)
                    <div className="flex flex-row gap-3 pt-2">
                        <div className={`${font_reg.className} italic pt-1`}>
                            NASA JSC
                        </div>
                        <div className="text-neutral-900 hover:translate-x-2 hover:opacity-50 cursor-pointer transition">
                            <IoIosArrowDropright size={36}/>
                        </div>
                    </div>
                </div>
                <div>
                    <Image 
                        src='/images/astronaut2.svg'
                        alt="lung"
                        width={100}
                        height={100}
                        className="object-cover w-full h-full min-h-0 justify-center items-center hover:opacity-80 cursor-pointer transition"
                    />
                </div>
                <div>
                    <Image 
                        src='/images/shoe2.svg'
                        alt="lung"
                        width={100}
                        height={100}
                        className="object-cover w-full h-full min-h-0 justify-center items-center hover:opacity-80 cursor-pointer transition"
                    />
                </div>
                <div className={`${font_med.className} text-2xl mx-5 mt-5`}>
                    Lower-Limb Exoskeleton Control with Smart Shoes (2022)
                    <div className="flex flex-row gap-3 pt-2">
                        <div className={`${font_reg.className} italic pt-1`}>
                            Arizona State University
                        </div>
                        <div className="text-neutral-900 hover:translate-x-2 hover:opacity-50 cursor-pointer transition">
                            <IoIosArrowDropright size={36}/>
                        </div>
                    </div>
                </div>
                <div className={`${font_med.className} text-2xl mr-5 mt-5`}>
                    Bio-Mechanical Analysis of Gait (2021-2023)
                    <div className="flex flex-row gap-3 pt-2">
                        <div className={`${font_reg.className} italic pt-1`}>
                            University of Puget Sound
                        </div>
                        <div className="text-neutral-900 hover:translate-x-2 hover:opacity-50 cursor-pointer transition">
                            <IoIosArrowDropright size={36}/>
                        </div>
                    </div>
                </div>
                <div>
                    <Image 
                        src='/images/gait2.svg'
                        alt="lung"
                        width={100}
                        height={100}
                        className="object-cover w-full h-full min-h-0 justify-center items-center hover:opacity-80 cursor-pointer transition"
                    />
                </div>
                <div>
                    <Image 
                        src='/images/auxetic2.svg'
                        alt="lung"
                        width={100}
                        height={100}
                        className="object-cover w-full h-full min-h-0 justify-center items-center hover:opacity-80 cursor-pointer transition"
                    />
                </div>
                <div className={`${font_med.className} text-2xl mx-5 mt-5`}>
                    Auxetic Foams for Peripheral Neuropathy (2021)
                    <div className="flex flex-row gap-3 pt-2">
                        <div className={`${font_reg.className} italic pt-1`}>
                            NASA MSFC
                        </div>
                        <div className="text-neutral-900 hover:translate-x-2 hover:opacity-50 cursor-pointer transition">
                            <IoIosArrowDropright size={36}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;