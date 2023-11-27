'use client'
import Image from 'next/image';
import HomeBg from '@/assets/homebg.png';
import { SocialLinks } from '@/components/SocialLinks';
import SwirlyArrow from '@/assets/swirly-arrow.svg';
import { Track } from '@/components/Track';
import { ISong, useGlobalContext } from '@/hooks/globalContext';
import { motion,useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';


export const HomeSection =()=>{
    const {albums} = useGlobalContext();
    const [todayPicks,setTodayPicks] = useState<ISong[]>([]);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef);

    useEffect(()=>{
        setTodayPicks([albums[0].songs[2],albums[0].songs[3]]);
    },[albums]);

    return(
        <section className="relative w-full min-h-screen" id="home">
            <div className="w-full h-screen flex">
                <div className="absolute md:relative top-0 left-0 w-full h-screen md:w-1/2">
                    <Image
                        className="w-full h-full object-cover"
                        src={HomeBg}
                        alt="home-bg"
                        style={{width: "auto", height:"100%"}}
                    />
                    <div className="absolute w-full h-full bottom-0 left-0 z-10 bg-gradient-to-t from-stone-900 to-60% bg-opacity-80">

                    </div>
                </div>
                <div className="absolute md:relative top-0 w-full h-screen md:w-1/2 bg-stone-900 bg-opacity-50 pt-40 px-4 md:px-10 z-50">
                    <div className="relative w-fit overflow-hidden" ref={containerRef}>
                        <motion.div
                            initial={{width:"100%"}}
                            animate={isInView?{width:0}:{width:"100%"}}
                            transition={{duration:0.5}}
                            className="absolute w-full h-full top-0 left-0 bg-white" 
                        >
                        </motion.div>
                        <h1
                            className="text-white text-5xl md:text-8xl font-bold">
                            Dus-tee
                        </h1>

                    </div>
                    <div
                        className="relative z-20 pt-4">
                        <h2 className="text-white text-lg font-bold">Today's picks
                        </h2>
                        { 
                            todayPicks.map((pick,index)=>
                                <Track 
                                    key={index} 
                                    song={pick}
                                />
                            )
                        }
                    </div>
                    <motion.div
                        animate={isInView?"enter":"exit"}
                        transition={{duration:0.5,type:"tween"}} 
                        className="relative z-20 pt-10">
                        <div className="w-full flex gap-2 items-center justify-center">
                            <h3 className="text-white text-base">follow</h3>
                            <Image
                                src={SwirlyArrow}
                                alt="arrow"
                                width={50}
                                height={50}
                            />
                        </div>
                        <SocialLinks/>
                    </motion.div>
                            
                    <div className="absolute w-full h-full bottom-0 left-0 z-10 bg-gradient-to-t from-stone-900 to-20% pointer-events-none">

                    </div>

                </div>
            </div>
        </section>
    )
}