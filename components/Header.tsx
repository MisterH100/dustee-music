'use client'
import Link from "next/link"
import { Drawer } from "./Drawer"
import { useGlobalContext } from "@/hooks/globalContext"
import { useState } from "react";
import { Widget } from "./Widget";




export const Header = ()=>{
    const {widget} = useGlobalContext();
    const [isScrolled, setIsScrolled] = useState(false);

    window.addEventListener("scroll",()=>{
        if(window.scrollY > 100){
            setIsScrolled(true);
        }else{
            setIsScrolled(false);
        }
    });

    return(
        <header className="fixed top-0 left-0 w-full h-[120px] z-[999]">
            <div className="block md:hidden absolute w-full h-full top-0 left-0 bg-gradient-to-b from-stone-900 to-80% bg-opacity-80">

            </div>
            <nav className={`relative w-full h-full flex z-20`}>
                {isScrolled?
                    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-blue-900 to-90% bg-opacity-50 -z-10">

                    </div>: null
                }
                <div className="relative w-1/2 text-white flex items-center flex-1 flex-shrink">
                    {widget?  
                        <Widget/>:
                        <Link href={"/"} className="block md:hidden text-white text-xl font-medium px-4">@the_everlasting_storm</Link>
                    }
                </div>

                <ul className="relative hidden w-full md:w-1/2 h-full md:flex md:justify-start items-center px-10 gap-10 z-20">
                    {isScrolled?null:
                        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-blue-900 to-90% bg-opacity-50 -z-10">

                        </div>
                    }
                    <li>
                        <Link href={"#home"} className="text-white text-xl font-medium">Home</Link>
                    </li>
                    <li>
                        <Link href={"#about"} className="text-white text-xl font-medium">About</Link>
                    </li>
                    <li>
                        <Link href={"#albums"} className="text-white text-xl font-medium">Albums</Link>
                    </li>
                    <li>
                        <Link href={"#gallery"} className="text-white text-xl font-medium">Gallery</Link>
                    </li>
                </ul>
                
                <div className="w-fit sm:w-1/2 h-full flex md:hidden justify-end items-center px-4">
                    <Drawer/>
                </div>
                
            </nav>
        </header>
    )
}
