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

  const [time, setTime] = useState(new Date())

  const [ music, setMusic ] = useState(true)

  const [windows, setWindows] = useState({
    about: false,
    works: false,
    contact: false,
    faq: false,
  });

  const [isMute, setIsMute] = useState(false)

  useEffect(() => {
    open.current = new Audio("/effect/open.mp3");
    close.current = new Audio("/effect/close.mp3");

    open.current.volume = 0.4;
    close.current.volume = 0.4;
  }, []);

  useEffect(()=>{

    const timer = setInterval(()=>{
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer);
  },[])

  const playOpen = () => {
      open.current?.play();
  }

  const playClose = () => {
      close.current?.play();
  }

  const Mute = () =>{
    setIsMute(true)
    if (open.current) open.current.volume = 0;
    if (close.current) close.current.volume = 0;
  }
  const unMute = () =>{
    setIsMute(false)
    if (open.current) open.current.volume = 0.4;
    if (close.current) close.current.volume = 0.4;
  }

  const handleClear = ()=>{
    setWindows({
      about: false,
      works: false,
      contact: false,
      faq: false,
    })
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
        <div className="absolute top-0 left-0 w-full bg-gray-200 h-6 flex justify-between chicago items-center border-b-2 border-gray-400">
          <div className="text-sm px-1 flex">
            <button className="windows-button px-1 text-xs" onClick={handleClear}>clear</button>
            <div className="h-5 w-[1px] mx-0.5 bg-gray-500"></div>
          </div>
          <div className="text-sm px-1 flex gap-2">
            <p className="s">{time.toLocaleTimeString("en-GB",{
              hour : "numeric",
              minute : "2-digit",
              hour12: true
            })}</p>
            <button className="w-5 h-5 pb-1 flex justify-center items-center windows-button" onClick={()=>{
              if (music){
                Mute()
              }else{
                unMute()
              }
              setMusic(!music)
              }}>
              <Image className="mt-1" src={`${music ? "speaker.svg" : "speaker-close.svg"}`} width={20} height={20} alt=""></Image>
            </button>
          </div>
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
            }}
            mute={isMute}/>
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
