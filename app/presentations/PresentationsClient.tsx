'use client';

import { font_med } from "../fonts";
import Image from "next/image";

const PresentationsClient = () => {
    return (
        <div className="flex flex-col text-neutral-900 md:mx-40 mx-8">
            <div className="mt-10 md:text-lg text-base">
                RECENT
            </div>
            <div className={`${font_med.className} md:text-6xl text-4xl mt-2`}>
                Presentations
            </div>
            <div className="mt-10">
                <div className={`${font_med.className} md:text-2xl text-lg`}>
                    American College of Sports Medicine Regional Conference (Northwest)
                </div>
                <div className="md:text-2xl text-lg">
                    Utilizing Lactate Threshold to Investigate the Effect of Heat on Lung Diffusing Capacity During Exercise
                </div>
                <div className="md:text-2xl text-lg pt-2">
                    Moscow, Idaho - February 2024
                </div>
                <div className="md:text-xl text-base italic">
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
            <div className="md:mt-8 mt-5">
                <div className={`${font_med.className} md:text-2xl text-lg`}>
                    IEEE MIT Undergraduate Research Technology Conference
                </div>
                <div className="md:text-2xl text-lg">
                    Predictive Kinematic Modeling of Reaching Tasks Within a Spacesuit
                </div>
                <div className="md:text-2xl text-lg pt-2">
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
            <div className="md:mt-8 mt-5">
                <div className={`${font_med.className} md:text-2xl text-lg`}>
                    American Society of Biomechanics Annual Conference
                </div>
                <div className="md:text-2xl text-lg">
                    Predictive Kinematic Modeling of Reaching Tasks Within a Spacesuit
                </div>
                <div className="md:text-2xl text-lg pt-2">
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
            <div className="md:mt-8 mt-5">
                <div className={`${font_med.className} md:text-2xl text-lg`}>
                    Arizona State University Summer Undergraduate Research Symposium
                </div>
                <div className="md:text-2xl text-lg">
                    A Human Knee Impedance Model for Lower-Limb Exoskeleton Control
                </div>
                <div className="md:text-2xl text-lg pt-2">
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
            <div className="md:mt-8 mt-5 pb-20">
                <div className={`${font_med.className} md:text-2xl text-lg`}>
                    Washington NASA Space Grant Undergraduate Research Symposium
                </div>
                <div className="md:text-2xl text-lg">
                    Investigating the Performance Characteristics of Auxetic Foams for Neuropathy Treatment Applications
                </div>
                <div className="md:text-2xl text-lg pt-2">
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