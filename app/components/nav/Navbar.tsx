'use client';

import { font_med } from "../../fonts";
import { font_reg } from "../../fonts";
import Container from "../Container";
import { useRouter } from "next/navigation";
import NavButton from "./NavButton";

const Navbar = () => {
    const router = useRouter(); 

    return (
        <div className="w-full">
            <div className="py-4 border-b-[1px] border-neutral-300">
                <Container>
                    <div
                        className="
                            flex
                            flex-row
                            items-center
                            justify-end
                            text-neutral-900
                            mx-5
                            md:mx-0
                        "
                    >
                        <div>
                            <NavButton 
                                label="Work"
                                onClick={() => router.push('/')}
                            />
                            <NavButton 
                                label="About"
                                onClick={() => router.push('/about')}
                            />
                            <NavButton 
                                label="Presentations"
                                onClick={() => router.push('/presentations')}
                            />
                            <NavButton 
                                label="Resume"
                                onClick={() => {}}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;