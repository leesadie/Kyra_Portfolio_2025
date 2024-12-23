'use client';

import { font_med } from "../fonts";
import Image from "next/image";

const PresentationsClient = () => {
    return (
        <div className="flex flex-col text-neutral-900 mx-40">
            <div className="mt-10 text-lg">
                RECENT
            </div>
            <div className={`${font_med.className} text-6xl mt-2`}>
                Presentations
            </div>
            <div className="mt-10">
                <div className={`${font_med.className} text-2xl`}>
                    American College of Sports Medicine Regional Conference (Northwest)
                </div>
                <div className="text-2xl">
                    Utilizing Lactate Threshold to Investigate the Effect of Heat on Lung Diffusing Capacity During Exercise
                </div>
                <div className="text-2xl pt-2">
                    Moscow, Idaho - February 2024
                </div>
                <div className="text-xl italic">
                    *Thematic (Poster) Presentation Award
                </div>
                <Image 
                    src='/images/presentations/acsm.svg'
                    alt="acsm"
                    height={100}
                    width={100}
                    className="object-cover w-96 pt-4 h-full min-h-0 justify-center items-center"
                />
            </div>
            <hr className="border-t border-neutral-300 mt-8"/>
            <div className="mt-8">
                <div className={`${font_med.className} text-2xl`}>
                    IEEE MIT Undergraduate Research Technology Conference
                </div>
                <div className="text-2xl">
                    Predictive Kinematic Modeling of Reaching Tasks Within a Spacesuit
                </div>
                <div className="text-2xl pt-2">
                    Cambridge, Massachusetts - October 2023
                </div>
                <Image 
                    src='/images/presentations/urtc.svg'
                    alt="urtc"
                    height={100}
                    width={100}
                    className="object-cover w-96 pt-4 h-full min-h-0 justify-center items-center"
                />
            </div>
            <hr className="border-t border-neutral-300 mt-8"/>
            <div className="mt-8">
                <div className={`${font_med.className} text-2xl`}>
                    American Society of Biomechanics Annual Conference
                </div>
                <div className="text-2xl">
                    Predictive Kinematic Modeling of Reaching Tasks Within a Spacesuit
                </div>
                <div className="text-2xl pt-2">
                    Knoxville, Tennessee - August 2023
                </div>
                <Image 
                    src='/images/presentations/asbm.svg'
                    alt="asbm"
                    height={100}
                    width={100}
                    className="object-cover w-96 pt-4 h-full min-h-0 justify-center items-center"
                />
            </div>
            <hr className="border-t border-neutral-300 mt-8"/>
            <div className="mt-8">
                <div className={`${font_med.className} text-2xl`}>
                    Arizona State University Summer Undergraduate Research Symposium
                </div>
                <div className="text-2xl">
                    A Human Knee Impedance Model for Lower-Limb Exoskeleton Control
                </div>
                <div className="text-2xl pt-2">
                    Tempe, Arizona - July 2022
                </div>
                <Image 
                    src='/images/presentations/asu.svg'
                    alt="asu"
                    height={100}
                    width={100}
                    className="object-cover w-96 pt-4 h-full min-h-0 justify-center items-center"
                />
            </div>
            <hr className="border-t border-neutral-300 mt-8"/>
            <div className="mt-8 pb-20">
                <div className={`${font_med.className} text-2xl`}>
                    Washington NASA Space Grant Undergraduate Research Symposium
                </div>
                <div className="text-2xl">
                    Investigating the Performance Characteristics of Auxetic Foams for Neuropathy Treatment Applications
                </div>
                <div className="text-2xl pt-2">
                    Virtual - August 2021
                </div>
                <Image 
                    src='/images/presentations/nasaspacegrant.svg'
                    alt="nasaspacegrant"
                    height={100}
                    width={100}
                    className="object-cover w-96 pt-4 h-full min-h-0 justify-center items-center"
                />
            </div>
        </div>
    );
}

export default PresentationsClient;