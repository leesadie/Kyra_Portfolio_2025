'use client';

import { font_med, font_reg } from "@/app/fonts";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";

const HeroSm = () => {
    return (
        <div className="flex flex-col mt-10 mx-8">
            <div className="text-xl">
                Hi, I’m Kyra. I’m currently a Fulbright Scholar in Australia and will be at the MIT Lincoln Laboratory in 2026.
            </div>
            <div className="mt-10 text-base">
                SELECTED
            </div>
            <div className={`${font_med.className} text-4xl mt-2`}>
                Work
            </div>
            <div className="mt-5">
                <a target="_blank" rel="noopener noreferrer" href="files/LungCapacity_UPS_Poster.pdf">
                    <Image 
                        src='/images/lung2.svg'
                        alt="lung"
                        width={100}
                        height={100}
                        className="object-cover w-full md:h-full h-64 min-h-0 justify-center items-center hover:opacity-80 cursor-pointer transition"
                    />
                </a>
            </div>
            <div className={` ${font_med.className} text-lg mt-2`}>
                Lung Diffusing Capacity in Extreme Environments (2023-2024)
                <div className="flex flex-row gap-2">
                    <div className={`${font_reg.className} text-base italic`}>
                        University of Puget Sound
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="files/LungCapacity_UPS_Poster.pdf">
                        <div className="text-neutral-900 text-2xl hover:translate-x-2 hover:opacity-50 cursor-pointer transition">
                            <IoIosArrowDropright />
                        </div>
                    </a>
                </div>
            </div>
            <div className="mt-5">
                <a target="_blank" rel="noopener noreferrer" href="files/NASA_JSC_2022_Posters.pdf">
                    <Image 
                        src='/images/astronaut2.svg'
                        alt="lung"
                        width={100}
                        height={100}
                        className="object-cover w-full md:h-full h-64 min-h-0 justify-center items-center hover:opacity-80 cursor-pointer transition"
                    />
                </a>
            </div>
            <div className={` ${font_med.className} text-lg mt-2`}>
                Mathematical Modeling for NASA’s Spacesuit Motion Database (2022)
                <div className="flex flex-row gap-2">
                    <div className={`${font_reg.className} text-base italic`}>
                        NASA JSC
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="files/NASA_JSC_2022_Posters.pdf">
                        <div className="text-neutral-900 text-2xl hover:translate-x-2 hover:opacity-50 cursor-pointer transition">
                            <IoIosArrowDropright />
                        </div>
                    </a>
                </div>
            </div>
            <div className="mt-5">
                <a target="_blank" rel="noopener noreferrer" href="files/ASU_SURI_2022_Poster.pdf">
                    <Image 
                        src='/images/shoe2.svg'
                        alt="lung"
                        width={100}
                        height={100}
                        className="object-cover w-full md:h-full h-64 min-h-0 justify-center items-center hover:opacity-80 cursor-pointer transition"
                    />
                </a>
            </div>
            <div className={` ${font_med.className} text-lg mt-2`}>
                Lower-Limb Exoskeleton Control with Smart Shoes (2022)
                <div className="flex flex-row gap-2">
                    <div className={`${font_reg.className} text-base italic`}>
                        Arizona State University
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="files/ASU_SURI_2022_Poster.pdf">
                        <div className="text-neutral-900 text-2xl hover:translate-x-2 hover:opacity-50 cursor-pointer transition">
                            <IoIosArrowDropright />
                        </div>
                    </a>
                </div>
            </div>
            <div className="mt-5">
                <a target="_blank" rel="noopener noreferrer" href="files/GaitAnalysis_UPS_Paper.pdf">
                    <Image 
                        src='/images/gait2.svg'
                        alt="lung"
                        width={100}
                        height={100}
                        className="object-cover w-full md:h-full h-64 min-h-0 justify-center items-center hover:opacity-80 cursor-pointer transition"
                    />
                </a>
            </div>
            <div className={` ${font_med.className} text-lg mt-2`}>
                Bio-Mechanical Analysis of Gait (2021-2023)
                <div className="flex flex-row gap-2">
                    <div className={`${font_reg.className} text-base italic`}>
                        University of Puget Sound
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="files/GaitAnalysis_UPS_Paper.pdf">
                        <div className="text-neutral-900 text-2xl hover:translate-x-2 hover:opacity-50 cursor-pointer transition">
                            <IoIosArrowDropright />
                        </div>
                    </a>
                </div>
            </div>
            <div className="mt-5">
                <a target="_blank" rel="noopener noreferrer" href="files/NASA_MSFC_2021_Presentation.pdf">
                    <Image 
                        src='/images/auxetic2.svg'
                        alt="lung"
                        width={100}
                        height={100}
                        className="object-cover w-full md:h-full h-64 min-h-0 justify-center items-center hover:opacity-80 cursor-pointer transition"
                    />
                </a>
            </div>
            <div className={` ${font_med.className} text-lg mt-2 pb-20`}>
                Auxetic Foams for Peripheral Neuropathy (2021)
                <div className="flex flex-row gap-2">
                    <div className={`${font_reg.className} text-base italic`}>
                        NASA MSFC
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="files/NASA_MSFC_2021_Presentation.pdf">
                        <div className="text-neutral-900 text-2xl hover:translate-x-2 hover:opacity-50 cursor-pointer transition">
                            <IoIosArrowDropright />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeroSm;