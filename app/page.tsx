"use client";

import Image from "next/image";
import { KoHo } from "next/font/google"
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import AboutWindow from "@/components/AboutWindows";
import WorksWindow from "@/components/WorksWindows";
import FaqWindows from "@/components/FaqWindows";
import ContactWindows from "@/components/ContactWindows";



const KoHoFont = KoHo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
})


export default function Home() {

  const open = useRef<HTMLAudioElement | null>(null);
  const close = useRef<HTMLAudioElement | null>(null);

  const router = useRouter()

  const [ music, setMusic ] = useState(true)

  const [windows, setWindows] = useState({
    about: false,
    works: false,
    contact: false,
    faq: false,
  });

  useEffect(() => {
    open.current = new Audio("/effect/open.mp3");
    close.current = new Audio("/effect/close.mp3");

    open.current.volume = 0.4;
    close.current.volume = 0.4;
  }, []);

  const playOpen = () => {
      open.current?.play();
  }

  const playClose = () => {
      close.current?.play();
  }

  const Mute = () =>{
    if (open.current) open.current.volume = 0;
    if (close.current) close.current.volume = 0;
  }
  const unMute = () =>{
    if (open.current) open.current.volume = 0.4;
    if (close.current) close.current.volume = 0.4;
  }

  return (
    <>
      <div className="relative w-full h-screen bg-[#3586ff]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </div>
        
        <div className="absolute top-5 left-5">
          <button className="w-8 h-8 pb-1 rounded cursor-pointer" onClick={()=>{
            if (music){
              Mute()
            }else{
              unMute()
            }
            setMusic(!music)
            }}>
            <Image src={`${music ? "speaker.svg" : "speaker-close.svg"}`} fill alt=""></Image>
          </button>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="md:w-200 w-full h-100">
            <div className="w-full h-6 bg-blue-400 items-center rounded-t border-t-2 border-l-2 border-r-2 border-gray-300">
              <p className="chicago pl-1 w-full text-center text-white text-sm items-baseline pt-0.5">Home</p>
            </div>
            <div className="h-full w-full flex items-center justify-center bg-white rounded-b border-2 border-gray-300">
              <div className="mt-7">
                <p className={` ${KoHoFont.className} text-4xl w-full text-center`}>Hi! <span className="text-5xl text-blue-600">i&apos;m Peter</span></p>
                <p className={`text-sm ${KoHoFont.className} w-full text-center`}>Full Stack Developer, Web Developer, and Game Developer</p>
                <div className="flex justify-center md:gap-10 gap-5 mt-10">
                  <div onClick={()=>{
                    if(!windows.about){
                      playOpen()
                    }else{
                      playClose()
                    }
                    setWindows(prev => ({...prev, about : !prev.about}))
                    }} className="hover:cursor-pointer hover:underline">
                    <Image className="transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-xl" width={50} height={50} src="/about.svg" alt="" />
                    <p className="chicago text-xs w-full text-center pt-2">about</p>
                  </div>
                  <div onClick={()=>{router.push('https://github.com/ZilviaS')}}  className="hover:cursor-pointer hover:underline">
                    <Image className="transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-xl" width={50} height={50} src="/github_logo.png" alt="" />
                    <p className="chicago text-xs w-full text-center pt-2">github</p>
                  </div>
                  <div onClick={()=>{
                    if(!windows.works){
                      playOpen()
                    }else{
                      playClose()
                    }
                    setWindows({...windows, works : !windows.works})}}  className="hover:cursor-pointer hover:underline">
                    <Image className="transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-xl" width={50} height={50} src="/project.svg" alt="" />
                    <p className="chicago text-xs w-full text-center pt-2">works</p>
                  </div>
                  <div onClick={()=>{
                    if(!windows.faq){
                      playOpen()
                    }else{
                      playClose()
                    }
                    setWindows({...windows, faq : !windows.faq})}}  className="hover:cursor-pointer hover:underline">
                    <Image className="transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-xl" width={50} height={50} src="/feq.svg" alt="" />
                    <p className="chicago text-xs w-full text-center pt-2">faq</p>
                  </div>
                  <div onClick={()=>{
                    if(!windows.contact){
                      playOpen()
                    }else{
                      playClose()
                    }
                    setWindows({...windows, contact : !windows.contact})}}  className="hover:cursor-pointer hover:underline">
                    <Image className="transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-xl" width={50} height={50} src="/contact.svg" alt="" />
                    <p className="chicago text-xs w-full text-center pt-2">contact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {windows.about && (
          <AboutWindow
            onClose={() =>{
              setWindows(prev => ({
                ...prev,
                about:false
              }))
              playClose()
            }
              
            }
          />
        )}
        {windows.works && (
          <WorksWindow
            onClose={()=>{
              setWindows(prev=>({
                ...prev,
                works:false
              }))
              playClose()
            }}/>
        )}
        {
          windows.faq && (
            <FaqWindows
              onClose={()=>{
                setWindows(prev=>({
                  ...prev,
                  faq:false
                }))
                playClose()
              }}/>
          )
        }
        {
          windows.contact && (
            <ContactWindows
              onClose={()=>{
                setWindows(prev=>({
                  ...prev,
                  contact:false
                }))
                playClose()
              }}/>
          )
        }
      </div>
    </>
  );
}
