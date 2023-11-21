import Link from "next/link"
import { Drawer } from "./Drawer"




export const Header = ()=>{
    return(
        <header className="relative w-full h-[120px]">
            <nav className="w-full h-full flex ">
                <ul className="hidden w-full h-full md:flex items-center px-10 gap-10">
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
                <div className="w-full h-full flex md:hidden justify-end items-center px-2 sm:px-4">
                    <Link href={"/"} className="text-white text-xl font-medium">@the_everlasting_storm</Link>
                    <Drawer/>
                </div>
            </nav>
        </header>
    )
} 