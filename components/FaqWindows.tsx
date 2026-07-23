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
    onClose: () => void
}

export default function FaqWindows({ onClose }: Props){

    const [ pageState, setPageState ] = useState({
        first : false,
        second : false,
        third : false,
        forth : false
    })

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
            <div ref={nodeRef} className="absolute top-40 md:w-200 w-full title-bar bg-white border-2 border-gray-300 rounded md:cursor-move">
                <div className="bg-blue-400 flex items-center h-5 relative title-bar cursor-move">
                <button onClick={onClose} className="absolute left-1 w-4 h-4 bg-gray-200 border border-gray-500 text-black text-xs leading-none flex items-center justify-center hover:bg-gray-300">x</button>
                <p className="w-full text-center chicago text-white text-sm">
                    Faq
                </p>
            </div>
            <div className={`p-7 ${KoHoFont.className} h-100 overflow-y-scroll` }>
                <div>
                    <div onClick={()=>{setPageState(prev =>({...prev, first: !prev.first}))}} className="w-full text-xl font-medium p-4 border-1 border-amber-200 bg-amber-200/50 flex justify-between items-center hover:cursor-pointer">
                        <p>What software do you use?</p>
                        <div className={`w-3 h-3 relative hover:-translate-y-0.5 transition-transform duration-500 ${pageState.first ? "rotate-180" : ""}`}>
                            <Image fill src="/arrow.png" alt="" />
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 border-x-1 border-b-1 border-gray-100 text-sm ${pageState.first ? "max-h-96" : "max-h-0"}`}>
                        <div className="p-5">
                            <p>• Web Development : <span className="font-medium">Visual Studio Code</span> ( usually )</p>
                            <p>• Game Development: <span className="font-medium">Unity</span></p>
                            <p>• Video Editing: <span className="font-medium">Adobe Premiere Pro</span></p>
                            <p>• Photoshoping: <span className="font-medium">Adobe Photoshop</span> ( it&apos;s in the name ( ദ്ദി ˙ᗜ˙ ) )</p>
                            <p>• Audio Recording: <span className="font-medium">Cakewalk Sonar / Audacity</span></p>
                            <p>• Script Writing: <span className="font-medium">Notepad </span>( surprising? anything to be honest..)</p>
                        </div>
                        
                    </div>
                </div>
                
                <div>
                    <div onClick={()=>{setPageState(prev =>({...prev, second: !prev.second}))}} className="w-full mt-5 text-xl font-medium p-4 border-1 border-amber-200 bg-amber-200/50 flex justify-between items-center hover:cursor-pointer">
                        <p>What&apos;s my setup</p>
                        <div className={`w-3 h-3 relative hover:-translate-y-0.5 transition-transform duration-500 ${pageState.second ? "rotate-180" : ""}`}>
                            <Image fill src="/arrow.png" alt="" />
                        </div>
                    </div>
                    <div className={`md:overflow-hidden overflow-y-scroll transition-all duration-500 border-x-1 border-b-1 border-gray-100 text-sm ${pageState.second ? "max-h-136" : "max-h-0"}`}>
                        <div className="p-5">
                            <p className="mb-3">Ahh.. I gonna talk some nerd thing here, lol</p>
                            <p>• A decent 2024 Asus Tuf Dash Gaming Laptop for everything</p>
                            <p>• IBM Model M and QK65 R2 for Keyboard</p>
                            <p className="mt-3">Instruments :</p>
                            <div className="pl-3">
                                <p>• Fender Player Stratocaster <span className="text-xs">( Guitar )</span></p>
                                <p>• Grote AS335 <span className="text-xs">( Guitar )</span></p>
                                <p>• Vintage Maya <span className="text-xs">( Acoustic Guitar )</span></p>
                                <p>• Gusta GJB4-3 <span className="text-xs">( Bass )</span></p>
                                <p>• M Vave SMK 35 Elite <span className="text-xs">( Midi Keyboard )</span></p>
                                <p>• NUX MG-30 <span className="text-xs">( Multi Effect )</span></p>
                            </div>
                            <p className="mt-3">Audio related :</p>
                            <div className="pl-3">
                                <p>• Fosi Audio ZH3 <span className="text-xs">( DAC/AMP )</span></p>
                                <p>• Onix Alpha XI1 <span className="text-xs">( Portable DAC/AMP )</span></p>
                                <p>• Behringer U-Phoria UMC22 <span className="text-xs">( Audio Interface )</span></p>
                                <p>• Audio Technica AT2020 <span className="text-xs">( MIC )</span></p>
                                <p>• Sennheiser HD600 <span className="text-xs">( Open-back Headphone )</span></p>
                                <p>• Hifiman Sundara 2021 <span className="text-xs">( Open-back Headphone )</span></p>
                                <p>• Sony MDR M1 <span className="text-xs">( Closed-back Headphone )</span></p>
                                <p>• AKG K240 Sextett 1978 <span className="text-xs">( Closed-back Headphone )</span></p>
                                <p>• Ziigaat odyssey <span className="text-xs">( IEM )</span></p>
                                <p>• Truthear Hola <span className="text-xs">( IEM )</span></p>
                                <p>• Edifier MR3 <span className="text-xs">( Speaker )</span></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div>
                    <div onClick={()=>{setPageState(prev =>({...prev, third: !prev.third}))}} className="w-full mt-5 text-xl font-medium p-4 border-1 border-amber-200 bg-amber-200/50 flex justify-between items-center hover:cursor-pointer">
                        <p>How far I can go to work</p>
                        <div className={`w-3 h-3 relative hover:-translate-y-0.5 transition-transform duration-500 ${pageState.third ? "rotate-180" : ""}`}>
                            <Image fill src="/arrow.png" alt="" />
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 border-x-1 border-b-1 border-gray-100 text-sm ${pageState.third ? "max-h-96" : "max-h-0"}`}>
                        <div className="p-5">
                            <p>Anywhere in the <span className="font-medium underline">Bangkok Metropolitan Region</span></p>
                            <p className="mt-5">I live in <span className="font-medium underline">Phutthamonthon</span> area and I went to the University (which is in Ladkrabang) everyday back then, so I think distance is not my problem (¯\_(ツ)_/¯)</p>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <div onClick={()=>{setPageState(prev =>({...prev, forth: !prev.forth}))}} className="w-full mt-5 text-xl font-medium p-4 border-1 border-amber-200 bg-amber-200/50 flex justify-between items-center hover:cursor-pointer">
                        <p>Is this website my design?</p>
                        <div className={`w-3 h-3 relative hover:-translate-y-0.5 transition-transform duration-500 ${pageState.forth ? "rotate-180" : ""}`}>
                            <Image fill src="/arrow.png" alt="" />
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 border-x-1 border-b-1 border-gray-100 text-sm ${pageState.forth ? "max-h-96" : "max-h-0"}`}>
                        <div className="p-5">
                            <p>No, but... yes?</p>
                            <p className="mt-3">This website is inspired by <a className="underline text-amber-500" href="https://www.sharyap.com/">Shar</a>, but I like the design of an old OS. so, I change it a bit</p>
                        </div>
                    </div>
                </div>
                
            
            </div>
                
            </div>
        </Draggable>
    )

}