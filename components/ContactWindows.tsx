"use client";

import Image from "next/image"
import Draggable from "react-draggable";
import { useEffect, useRef, useState } from "react";
import { KoHo } from "next/font/google";

const KoHoFont = KoHo({
    subsets: ["latin"],
    weight: ["400", "700"]
});

interface Props{
    onClose: ()=> void
}

export default function ContactWindows({ onClose }: Props){

    const nodeRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const check = () => setIsMobile(window.innerWidth < 768);

      check();
      window.addEventListener("resize", check);

      return () => window.removeEventListener("resize", check);
    }, []);
    
    return(
        <Draggable nodeRef={nodeRef} disabled={isMobile} handle=".title-bar">
            <div ref={nodeRef} className="absolute top-40 md:left-40 md:w-200 w-full title-bar bg-white border-2 border-gray-300 rounded md:cursor-move">
                <div className="bg-blue-400 flex items-center h-5 relative title-bar cursor-move">
                <button onClick={onClose} className="absolute left-1 w-4 h-4 bg-gray-200 border border-gray-500 text-black text-xs leading-none flex items-center justify-center hover:bg-gray-300">x</button>
                <p className="w-full text-center chicago text-white text-sm">
                    Contact
                </p>
            </div>
            <div className={`p-7 ${KoHoFont.className} h-100` }>
                <p className="w-full text-center text-3xl font-medium">EMAIL ! <span className="text-sm"></span></p>
                <div className="w-full flex justify-center mt-5">
                    <p className="text-center md:text-md text-sm">you can call me via Email, All of my social media account is actually private <br />and not interesting (trust me), so please Email me instead</p>
                </div>
                <div className="w-full flex justify-center my-5">
                    <div className="md:w-25 w-10 h-10 md:h-25 relative">
                        <Image fill src="email.svg" alt=""></Image>
                    </div>
                </div>
                <div>
                    <p className="w-full text-center">email me at : <span className="underline text-amber-500">prepatjarundechakorn@gmail.com</span> or...</p>
                    <div className="w-full flex justify-center mt-3">
                        <a className="p-3 bg-amber-400 rounded text-white font-bold" href="mailto:prepatjarundechakorn@gmail.com">Email me now!</a>
                    </div>
                    
                </div>
                
            </div>
                
            </div>
        </Draggable>
    )
}