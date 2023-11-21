import Link from "next/link"
import { SocialLinks } from "./SocialLinks"



export const Drawer =()=>{
    return(
        <div className="drawer z-50 drawer-end">
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
                    <div className="pt-10 flex flex-col gap-4">
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
                    </div>
                    <div className="pt-10">
                        <SocialLinks/>
                    </div>
                </ul>
            </div>
        </div>
    )
}