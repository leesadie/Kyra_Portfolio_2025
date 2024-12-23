'use client';

import { font_med } from "../fonts";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";
import Carousel from "../components/about/Carousel";

const AboutClient = () => {
    return (
        <div className="flex flex-row mt-10 mx-40 gap-20 text-neutral-900 justify-between">
            <div className="flex flex-col w-1/2">
                <div className="mt-10 text-lg">
                    ABOUT ME
                </div>
                <div className={`${font_med.className} text-6xl mt-2`}>
                    Kyra Lee
                </div>
                <div className="pt-5">
                    I’m currently a Fulbright Scholar in Australia studying Neuromorphic Engineering and after will be at MIT Lincoln Laboratory in the Space Systems Division.
                </div>
                <div className="pt-4">
                    I’ve previously worked at NASA (JSC & MSFC), and conducted research at Arizona State University and the University of Puget Sound. 
                    My research has focused on human performance in extreme environments, and I’m particularly interested in understanding how emerging technology can be integrated.
                </div>
                <div className="pt-4">
                    Outside of work and school, you can usually find me skateboarding, surfing, rock climbing, and traveling. 
                    One of the greatest experiences I’ve had is working in Juneau, AK for a helicopter tour company the summer after I completed my undergrad!
                </div>
                <div className="pt-5">
                    Feel free to get in touch!
                </div>
                <div className="flex flex-row gap-2 group">
                    <div className="pt-1 underline underline-offset-2 -mt-1 transition">
                        Email:
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:kyralee29@gmail.com">
                        <div className="group-hover:opacity-50 transition cursor-pointer">
                            kyralee29@gmail.com
                        </div>
                    </a>
                </div>
                <div className="flex flex-row gap-2 group">
                    <div className="pt-1 underline underline-offset-2 -mt-1 transition">
                        LinkedIn:
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lee-kyra/">
                        <div className="group-hover:opacity-50 transition cursor-pointer">
                            @lee-kyra
                        </div>
                    </a>
                </div>
                <div className="hover:opacity-50 transition cursor-pointer pt-2 flex flex-row gap-1">
                    <a target="_blank" rel="noopener noreferrer" href="https://kyralee29.substack.com/?utm_source=substack&utm_medium=web&utm_campaign=substack_profile">
                        Follow along with my Fulbright journey here!
                    </a>
                    <div className="text-neutral-900 hover:translate-x-2 transition">
                        <IoIosArrowDropright size={24}/>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <Carousel />
            </div>
        </div>
    );
}

export default AboutClient;