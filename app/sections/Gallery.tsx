'use client'
import { Carousel } from "@/components/Carousel"
import { GalleryBanner } from "@/components/GalleryBanner"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"


export const GallerySection =()=>{
    const containerRef = useRef(null);
    const isInView = useInView(containerRef);

    return(
        <section className="w-full min-h-screen py-10 px-2 sm:px-4 md:px-10" id="gallery">
            <div ref={containerRef} className="relative w-fit">
                <motion.div
                    initial={{width:"100%"}}
                    animate={isInView?{width:0}:{width:"100%"}}
                    transition={{duration:0.5}}
                    className="absolute w-full h-full top-0 right-0 bg-white" 
                    >
                </motion.div>
                <h1 className="text-white text-5xl md:text-8xl font-bold">Gallery</h1>
            </div>
            <div className="w-full pt-10">
                <Carousel/>
            </div>
            <div className="w-full pt-10">
                <GalleryBanner/>
            </div>
        </section>
    )
}