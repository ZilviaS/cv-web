"use client";

import Image from "next/image"
import Draggable from "react-draggable";
import { useEffect, useRef, useState } from "react";
import { KoHo } from "next/font/google";

const KoHoFont = KoHo({
  subsets: ["latin"],
  weight: ["400", "700"]
});

interface Props {
  onClose: () => void;
}


export default function AboutWindow({ onClose }: Props){
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
        <div ref={nodeRef} className="absolute top-40 md:w-150 w-full title-bar bg-white border-2 border-gray-300 rounded md:cursor-move">
            <div className="bg-blue-400 flex items-center h-5 relative">
            <button onClick={onClose} className="absolute left-1 w-4 h-4 bg-gray-200 border border-gray-500 text-black text-xs leading-none flex items-center justify-center hover:bg-gray-300">x</button>
            <p className="w-full text-center chicago text-white text-sm">
                About Me
            </p>
        </div>
        <div className="flex gap-5 mt-4 md:ml-10 ml-5">
        <div className="w-15 h-15 md:w-30 sm:w-20 md:h-30 sm:h-20 relative">
            <Image className="rounded-full" fill src="/profilePicture.jpg" alt="" />
        </div>
        <div className="flex flex-col justify-center sm:w-auto w-[60%] ">
            <p className={`${KoHoFont.className} md:text-3xl text-xl font-bold`}>Prepat Jarundechakorn</p>
            <p className={`${KoHoFont.className} text-sm pl-1`}>Full Stack Developer, Web Developer, and Game Developer</p>
        </div>
        </div>
            <div className="w-full h-0.5 mt-5 bg-gray-200"></div>
            <div className={`${KoHoFont.className} px-8 h-50 pt-4 overflow-y-scroll`}>
                <p className="text-sm ">hi I&apos;m Pete, a Full Stack Developer, Web Developer. I...</p>
                <div className="mt-4">
                  <p className="text-sm">• create <a className="underline text-blue-700" href="https://github.com/ZilviaS/car-rental-system">car-rental-web-application</a> (React/Node.js/PostgreSQL)</p>
                  <p className="text-sm">• create <a className="underline text-blue-700" href="https://github.com/ZilviaS/LeeDonTen">musician-donation-platform</a> (React/ASP.NET/Node.js/PostgreSQL)</p>
                  <p className="text-sm">• build <a className="underline text-blue-700" href="https://github.com/ZilviaS/Remote-Virtual-Relistic-Driving-Simulation">vehicle-simulation-on-RC-Car</a> <br />(Raspberry Pi/Arduino/Unity/Python Flask/WebRTC)</p>
                  <p className="text-sm">• create <a className="underline text-blue-700" href="">OverSteer - A Time Attack Racing Game</a> (Unity/C#)</p>
                </div>
                <p className="text-sm mt-4">interested in working with me? send me an email at <a className="underline text-blue-700" href="mailto:prepatjarundechakorn@gmail.com">prepatjarundechakorn@gmail.com</a></p>
                <p className="text-xl font-bold my-4">Education</p>
                <div className="flex gap-2">
                  <div className="h-10 w-0.5 bg-gray-300"></div>
                  <div>
                    <p className="text-sm font-medium">King Mongkut&apos;s Institute of Technology Ladkrabang <span className="text-sm">(2022 - 2026)</span></p>
                    <p className="text-xs">bachelor degree in Computer Sciance</p>
                  </div>
                </div>
                <p className="text-xl font-bold mt-5 mb-4">Interested in</p>
                <div>
                  <p className="text-sm">• Classic Car and Motorcycle</p>
                  <p className="text-sm">• Music Sing, Guitar, Bass, and Piano</p>
                  <p className="text-sm">• Audiophile (Headphone & Speakers)</p>
                  <p className="text-sm">• Vintage Technology (Vinyl, Cassette, IBM Keyboard etc.)</p>
                </div>
                <p className="text-xl font-bold mt-5 mb-4">Language Proficiency</p>
                <div className="flex gap-2 pb-5">
                  <div className="h-10 w-0.5 bg-gray-300"></div>
                  <div>
                    <p className="font-medium">I can speak <span className="text-amber-600">English(TOEIC 885)</span> and <span className="text-amber-600">Thai (Native)</span></p>
                    <p className="text-xs text-gray-500">and Japanese (just a hair)</p>
                  </div>
                </div>
                
            </div>
        </div>
      </Draggable>
    )
    
}