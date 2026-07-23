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


export default function WorksWindow({ onClose }: Props){
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
                Works
            </p>
        </div>
        <div className={`p-7 ${KoHoFont.className} h-100 overflow-y-scroll` }>
          <div className="bg-amber-100 p-4">
            <p className="font-medium">Accepting work offers via my <a className="text-yellow-500 underline" href="">work email!</a></p>
            <p className="text-sm">I do Full Stack Development, Web Application, Game Development and English Translator/Scipt Writer</p>
          </div>
          <div className="flex md:flex-row flex-col md:justify-center mt-5 gap-10">
            <div className="md:w-[50%] w-full">
              <p className="text-2xl font-medium">Tools</p>
              <div className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">Visual Studio Code</div>
                  <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">Unity 2D/3D</div>
                </div>
                <div className="flex gap-2">
                  <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">Arduino IDE</div>
                  <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">Raspberry PI</div>
                </div>
                <div className="flex gap-2">
                  <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">Canva</div>
                  <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">Adobe Premiere Pro</div>
                </div>
                <div className="flex gap-2">
                  <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">Adobe Photoshop</div>
                  <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">Cakewalk</div>
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <p className="text-2xl font-medium">Development</p>
              <div className="flex gap-2">
                <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">C</div>
                <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">C#</div>
                <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">Python</div>
                <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">JavaScript</div>
                <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1 hidden md:grid">HTML/CSS</div>
              </div>
              <div className="flex gap-2 mt-1">
                <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">React</div>
                <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">TailwindCSS</div>
                <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">Python</div>
                <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">Node.js</div>
              </div>
              <div className="flex gap-2 mt-1">
                <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">Next.js</div>
                <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1">ASP.NET</div>
                <div className="p-2 text-center cursor-default rounded-xl border-1 border-b-4 border-gray-200 hover:translate-y-1 md:hidden grid">HTML/CSS</div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] my-6 bg-gray-200"></div>
          <div className="md:flex gap-5">
            <div className="w-80 h-50 relative">
              <Image src="/car_rental.png" fill className="rounded" alt=""></Image>
            </div>
            <div className="md:mt-0 mt-3">
              <p className="text-2xl font-medium mt-1">Speed Rental <span className="text-sm">(car-rental-system)</span></p>
              <p className="text-xs">(React/Node.js/PostgreSQL)</p>
              <p className="text-sm mt-4">I have a passion for car and full stack web development so <br /> I decided to build a car rental web application for car Enthusiast</p>
              <p className="text-sm mt-4">you can check it out <a className="text-amber-500 underline" href="https://github.com/ZilviaS/car-rental-system">here</a>  ( demo : <a className="text-amber-500 underline" href="https://car-rental-system-omega-lemon.vercel.app/">here</a> )</p>
            </div>
          </div>

          <div className="w-full h-[1px] my-6 bg-gray-200"></div>
          <div className="md:flex gap-5">
            <div className="w-80 h-50 relative">
              <Image src="/LeeDonTen.png" fill className="rounded" alt=""></Image>
            </div>
            <div className="md:mt-0 mt-3">
              <p className="text-2xl font-medium">LeeDonTen <span className="text-sm">(Musician Donation Platform)</span></p>
              <p className="text-xs">(React/ASP.NET/Node.js/PostgreSQL)</p>
              <p className="text-sm mt-4">This project started because of I wonder <br />why we dont have a donation platform for musician</p>
              <p className="text-sm mt-4">Windows 95 aesthetic is just ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</p>
              <p className="text-sm mt-4">you can check it out <a className="text-amber-500 underline" href="https://github.com/ZilviaS/LeeDonTen">here</a> ( demo : <a className="text-amber-500 underline" href="https://lee-don-ten.vercel.app/">here</a> )</p>
            </div>
          </div>

          <div className="w-full h-[1px] my-6 bg-gray-200"></div>
          <div className="md:flex gap-5">
            <div className="w-80 h-50 relative">
              <Image src="/RCCar.jpg" fill className="rounded" alt=""></Image>
            </div>
            <div className="md:mt-0 mt-3">
              <p className="text-xl font-medium">Remote Driving Simulation using RC car</p>
              <p className="text-xs">(Unity/Python/Flask/WebRTC/Arduino/Raspberry Pi)</p>
              <p className="text-sm mt-4">I want to build a RC car that can controlled using Racing Sim <br />so I done it, I also impliment the vehicle simulation <br />and Video Stream from front and rear views</p>
              <p className="text-sm mt-4">It&apos;s nearly bankrupt me (╥ ᴗ ╥) ✧</p>
              <p className="text-sm mt-4">you can check it out <a className="text-amber-500 underline" href="https://github.com/ZilviaS/Remote-Virtual-Relistic-Driving-Simulation">here</a></p>
            </div>
          </div>

          <div className="w-full h-[1px] my-6 bg-gray-200"></div>
          <div className="md:flex gap-5">
            <div className="w-80 h-50 relative">
              <Image src="/oversteer.png" fill className="rounded" alt=""></Image>
            </div>
            <div className="md:mt-0 mt-3">
              <p className="text-xl font-medium">OverSteer</p>
              <p className="text-xs">(Unity)</p>
              <p className="text-sm mt-4">My first big project, A Time Attack Racing Game that impliment <br /> vehicle simulation and sim racing wheel controlled</p>
              <p className="text-sm mt-4">It give me <span className="text-amber-600">2025 KMITL&apos;s Senior Project award</span>  ✧｡٩(ˊᗜˋ )و✧*｡</p>
              <p className="text-sm mt-4">Everything in this project (beside the 3D assets) are done by me</p>
              <p className="text-sm mt-4">you can check it out <a className="text-amber-500 underline" href="https://github.com/ZilviaS/OverSteer">here</a></p>
            </div>
          </div>
          
        </div>
            
        </div>
      </Draggable>
    )
    
}