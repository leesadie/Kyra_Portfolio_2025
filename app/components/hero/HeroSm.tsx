'use client';

import { font_med, font_reg } from "@/app/fonts";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";

const HeroSm = () => {
    return (
        <div className="flex flex-col mt-10 mx-8">
            <div className="text-xl">
                Hi, I’m Kyra. I’m currently a Fulbright Scholar in Australia and will be at MIT Lincoln Laboratory in 2026.
            </div>
            <div className="mt-10 text-base">
                SELECTED
            </div>
            <div className={`${font_med.className} text-4xl mt-2`}>
                Work
            </div>
            <div className="mt-5">
                <Image 
                    src='/images/lung2.svg'
                    alt="lung"
                    width={100}
                    height={100}
                    className="object-cover w-full md:h-full h-64 min-h-0 justify-center items-center hover:opacity-80 cursor-pointer transition"
                />
            </div>
            <div className={` ${font_med.className} text-lg mt-2`}>
                Lung Diffusing Capacity in Extreme Environments (2023-2024)
                <div className="flex flex-row gap-2">
                    <div className={`${font_reg.className} text-base italic`}>
                        University of Puget Sound
                    </div>
                    <div className="text-neutral-900 text-2xl hover:translate-x-2 hover:opacity-50 cursor-pointer transition">
                        <IoIosArrowDropright />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <Image 
                    src='/images/astronaut2.svg'
                    alt="lung"
                    width={100}
                    height={100}
                    className="object-cover w-full md:h-full h-64 min-h-0 justify-center items-center hover:opacity-80 cursor-pointer transition"
                />
            </div>
            <div className={` ${font_med.className} text-lg mt-2`}>
                Mathematical Modeling for NASA’s Spacesuit Motion Database (2022)
                <div className="flex flex-row gap-2">
                    <div className={`${font_reg.className} text-base italic`}>
                        NASA JSC
                    </div>
                    <div className="text-neutral-900 text-2xl hover:translate-x-2 hover:opacity-50 cursor-pointer transition">
                        <IoIosArrowDropright />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <Image 
                    src='/images/shoe2.svg'
                    alt="lung"
                    width={100}
                    height={100}
                    className="object-cover w-full md:h-full h-64 min-h-0 justify-center items-center hover:opacity-80 cursor-pointer transition"
                />
            </div>
            <div className={` ${font_med.className} text-lg mt-2`}>
                Lower-Limb Exoskeleton Control with Smart Shoes (2022)
                <div className="flex flex-row gap-2">
                    <div className={`${font_reg.className} text-base italic`}>
                        Arizona State University
                    </div>
                    <div className="text-neutral-900 text-2xl hover:translate-x-2 hover:opacity-50 cursor-pointer transition">
                        <IoIosArrowDropright />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <Image 
                    src='/images/gait2.svg'
                    alt="lung"
                    width={100}
                    height={100}
                    className="object-cover w-full md:h-full h-64 min-h-0 justify-center items-center hover:opacity-80 cursor-pointer transition"
                />
            </div>
            <div className={` ${font_med.className} text-lg mt-2`}>
                Bio-Mechanical Analysis of Gait (2021-2023)
                <div className="flex flex-row gap-2">
                    <div className={`${font_reg.className} text-base italic`}>
                        University of Puget Sound
                    </div>
                    <div className="text-neutral-900 text-2xl hover:translate-x-2 hover:opacity-50 cursor-pointer transition">
                        <IoIosArrowDropright />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <Image 
                    src='/images/auxetic2.svg'
                    alt="lung"
                    width={100}
                    height={100}
                    className="object-cover w-full md:h-full h-64 min-h-0 justify-center items-center hover:opacity-80 cursor-pointer transition"
                />
            </div>
            <div className={` ${font_med.className} text-lg mt-2 pb-20`}>
                Auxetic Foams for Peripheral Neuropathy (2021)
                <div className="flex flex-row gap-2">
                    <div className={`${font_reg.className} text-base italic`}>
                        NASA MSFC
                    </div>
                    <div className="text-neutral-900 text-2xl hover:translate-x-2 hover:opacity-50 cursor-pointer transition">
                        <IoIosArrowDropright />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSm;