'use client'
import { Album } from "@/components/Album"
import { useGlobalContext } from "@/hooks/globalContext";
import { motion, useInView } from "framer-motion"
import { useRef } from "react";


export const AlbumSection = ()=>{
    const {albums,setCursor} = useGlobalContext();
    const containerRef = useRef(null);
    const isInView = useInView(containerRef);
    
    return(
        <section className="relative w-full min-h-screen py-10 px-2 sm:px-4 md:px-10 flex flex-col-reverse md:flex-row" id="albums">
            <div className="w-full md:w-1/2 h-fit">
                <div 
                    onMouseEnter={()=>setCursor(true)}
                    onMouseLeave={()=>setCursor(false)}
                    className="w-full grid grid-cols-1 sm:grid-cols-2 place-items-center md:place-items-start gap-4 pt-10">
                    {albums.map((album,index)=>
                        <Album 
                            key={index}
                            album={album}
                        />
                    )}
                    
                </div>
            </div>
            <div className="w-full md:w-1/2 h-fit md:h-screen px-4 md:px-10">
                <div ref={containerRef} className="relative w-fit">
                    <motion.div
                            initial={{width:"100%"}}
                            animate={isInView?{width:0}:{width:"100%"}}
                            transition={{duration:0.5}}
                            className="absolute w-full h-full top-0 left-0 bg-white" 
                        >
                    </motion.div>
                    <h1 className="text-white text-5xl md:text-8xl font-bold">Albums</h1>
                </div>
                <h2 className="text-white text-lg font-bold mt-10">New Release</h2>
                <motion.div 
                    initial={{scale: 1,}}
                    whileHover={{scale:1.01}}
                    onMouseEnter={()=>setCursor(true)}
                    onMouseLeave={()=>setCursor(false)}
                    className="w-full flex justify-center items-center bg-blue-700 rounded-lg mt-4 py-10 hover:bg-blue-800 transition-all duration-300 ease-in-out">
                    <Album album={albums[0]}/>
                </motion.div>
            </div>

        </section>
    )
}