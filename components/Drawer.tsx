'use client'
import { useRouter} from "next/navigation";
import { SocialLinks } from "./SocialLinks"
import { useGlobalContext } from "@/hooks/globalContext"
import Link from "next/link";




export const Drawer =()=>{
    const router= useRouter();
    const {setCursor} = useGlobalContext();
    let hash: string
    if(typeof window !== 'undefined'){
        hash = window.location.hash
    }

    const navLinks =[
        {link: "Home",href:"#home"},
        {link: "About",href:"#about"},
        {link: "Albums",href:"#albums"},
        {link: "Gallery",href:"#gallery"},

    ]

    return(
        <div className="drawer drawer-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex justify-end">
                <label 
                    htmlFor="my-drawer"
                    className="cursor-pointer"
                    >
                    <svg 
                        className="w-[25px] h-[25px] text-white" aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </label>
            </div> 
            <div className="drawer-side">
                <label 
                htmlFor="my-drawer" 
                aria-label="close sidebar" 
                className="drawer-overlay">
                </label>
                <ul className="p-10 w-80 min-h-full bg-stone-900 text-white">
                    <li>
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay w-6 h-6 cursor-pointer">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="w-[25px] h-[25px] text-white" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor">
                                    <path strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" d="M6 18L18 6M6 6l12 12" 
                                    />
                            </svg>
                        
                        </label>
                    </li>
                    <div
                        onMouseEnter={()=>setCursor(true)}
                        onMouseLeave={()=>setCursor(false)}
                        className="pt-10 flex flex-col gap-4">
                        {navLinks.map((link,index)=>       
                            <li 
                                key={index}
                                onClick={()=>router.push(link.href)}>
                                <label 
                                    htmlFor="my-drawer" 
                                    aria-label="close sidebar" 
                                    className={`text-white font-medium drawer-overlay w-fit cursor-pointer ${hash == link.href?"text-4xl":"text-xl"}`}     
                                    >
                                    {link.link}
                                </label>
                            </li>
                        )}    
                    </div>
                    <div className="pt-10">
                        <SocialLinks/>
                    </div>
                    <div className="w-full pt-10">
                        <Link 
                            className="link link-info w-full text-center"
                            href="https://thehandsomedev.com/#contact" target="_blank">{">"}report problems/bugs
                        </Link>
                    </div>
                </ul>
            </div>
        </div>
    )
}