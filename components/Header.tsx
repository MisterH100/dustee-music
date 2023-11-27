'use client'
import Link from "next/link"
import { Drawer } from "./Drawer"
import { useGlobalContext } from "@/hooks/globalContext"
import { useEffect, useRef, useState } from "react";
import { Widget } from "./Widget";
import { motion,AnimatePresence } from "framer-motion";



export const Header = ()=>{
    const {widget,cursor,setCursor} = useGlobalContext();
    const [isScrolled, setIsScrolled] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    
    const navLinks =[
        {link: "Home",href:"#home"},
        {link: "About",href:"#about"},
        {link: "Albums",href:"#albums"},
        {link: "Gallery",href:"#gallery"},
        
    ]
    
    useEffect(()=>{
        if(typeof window !== 'undefined'){
            window.addEventListener("scroll",()=>{
                if(window.scrollY > 100){
                    setIsScrolled(true);
                }else{
                    setIsScrolled(false);
                }
            });
            
        }
    },[isScrolled])

    return(
        <header ref={headerRef}
            className="fixed top-0 left-0 w-full h-[120px] z-[100] overflow-hidden">
            <div className="block md:hidden absolute w-full h-full top-0 left-0 bg-gradient-to-b from-stone-900 to-80% bg-opacity-80">

            </div>

            <nav className={`relative w-full h-full flex z-20`}>
                <AnimatePresence>
                    {isScrolled?
                        <motion.div
                            key="full-backdrop"
                            initial={{y:-50,opacity:0}}
                            animate={{y:[-50,0],opacity:[0,1]}}
                            exit={{y:[0,-50],opacity:[1,0] }}
                            transition={{duration:0.5,type:"tween"}}
                            className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-stone-900 to-90% bg-opacity-50 -z-10">

                        </motion.div>: null
                    }
                </AnimatePresence>
                <div className="relative w-1/2 text-white flex items-center flex-1 flex-shrink">     
                    <AnimatePresence>
                        {widget?
                            <motion.div
                                key="widget"
                                initial={{scaleX:0.8}}
                                animate={{scaleX:1}}
                                exit={{scale:0.8}}
                                className="w-full"
                            >
                                <Widget/>
                            </motion.div>: 
                            <Link href={"/"} className="block md:hidden text-white text-xl font-medium px-4">@the_everlasting_storm</Link>
                        }
                    </AnimatePresence>
                </div>

                <ul 
                    onMouseEnter={()=>setCursor(true)}
                    onMouseLeave={()=>setCursor(false)}
                    className="relative hidden w-full md:w-1/2 h-full md:flex md:justify-start items-center px-10 gap-10 z-20">
                    
                    {navLinks.map((link,index)=>      
                        <li
                            key={index}>
                            <Link href={link.href} className="text-white text-xl font-medium">{link.link}</Link>
                        </li>
                    )}
                </ul>
                
                <div className="relative w-fit sm:w-1/2 h-full flex md:hidden justify-end items-center px-4 z-[999]">
                    <Drawer/>
                </div>
                
            </nav>
        </header>
    )
}
