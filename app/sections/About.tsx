'use client'
import Image from "next/image"
import AboutBg from '@/assets/aboutbg.jpg';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const AboutSection =()=>{
    const containerRef = useRef(null);
    const isInView = useInView(containerRef);
    return(
        <section className="relative w-full min-h-screen flex items-center" id="about">
            <div className="absolute w-full h-full top-0 left-0 z-10 bg-gradient-to-b from-stone-900 to-60% bg-opacity-80">
            </div>
            <div className="relative w-full md:w-1/2 h-full flex items-center">
                <div className="relative z-20 py-10 px-2 sm:px-4 md:px-10">
                    <div ref={containerRef} className="relative w-fit">
                        <motion.div
                            initial={{width:"100%"}}
                            animate={isInView?{width:0}:{width:"100%"}}
                            transition={{duration:0.5}}
                            className="absolute w-full h-full top-0 right-0 bg-white" 
                        >
                        </motion.div>
                        <h1 className="text-white text-5xl md:text-8xl font-bold">About<span className="text-white text-xl md:text-2xl font-bold ml-4">Dus-tee</span></h1>
                    </div>
                    <p className="text-white text-base md:text-2xl font-bold max-w-xl pt-4">
                        my name is Joy, but you can call me Dustee. I'm an artist who has huge love for music.
                    </p>
                    <p className="text-white text-base max-w-xl pt-4 md:pt-10">
                        Follow me on Instagram at <Link className="link" href="https://instagram.com/the_everlasting_storm" target="_blank">@the_everlasting_storm</Link> and listen to my music on <Link className="link" href="https://soundcloud.com/user-565416632" target="_blank">SoundCloud</Link> and <Link className="link" href="https://www.youtube.com/@dus-tee1886" target="_blank">YouTube</Link>.

                    </p>
                    <div className="pt-4">
                        <span className="text-base text-orange-500">Latest music videos out now!!</span>
                        <div className="flex gap-10 pt-4">
                            <motion.div 
                                whileHover={{width:150,height:150}}
                                className="w-20 h-20 skeleton">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rT3mn8QF7ao" title="DoLoR, Dus-tee &amp; Quadro beats (Official Music Video)" frame-border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                <span className="w-full text-base text-white text-center">DoLoR</span>
                            </motion.div>
                            <motion.div 
                                whileHover={{width:150,height:150}}
                                className="w-20 h-20 skeleton">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/I50N-g4uRok" title="Alone" frame-border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                <span className="w-full text-base text-white text-center">Alone</span>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="absolute md:relative md:w-1/2 h-full">
                <Image
                    className='w-full h-full object-cover md:object-contain'
                    src={AboutBg}
                    alt='aboutbg'
                    style={{width:"auto",height:"100%"}}
                />
            </div>
            <div className="absolute w-full h-full bottom-0 left-0 z-10 bg-gradient-to-t from-stone-900 to-80% bg-opacity-80">

            </div>

        </section>
    )
}