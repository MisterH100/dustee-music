import Image from 'next/image';
import HomeBg from '@/assets/homebg.png';
import AboutBg from '@/assets/aboutbg.jpg';
import DTMAlbum from '@/assets/albumcover.jpg';
import { motion, useInView } from 'framer-motion';
import { useGlobalContext } from '@/hooks/globalContext';
import { useRef, useState } from 'react';

export const Carousel =()=>{
    const {setCursor} = useGlobalContext();
    const containerRef = useRef(null);
    const isInView = useInView(containerRef);

    const images = [HomeBg,AboutBg,DTMAlbum];
    return(
        <div
            ref={containerRef}
            onMouseEnter={()=>setCursor(true)}
            onMouseLeave={()=>setCursor(false)}
            className="relative w-full carousel">
            <motion.div 
                initial={{x:0}}
                animate={isInView?{x:[-300,-200,-100,0]}:{x:0}}
                transition={{duration:1}}
                className="w-fit flex gap-5">
                {images.map((image,index)=>  
                    <div
                        key={index}
                        className="carousel-item w-[300px] md:w-[600px] h-[350px]">
                        <Image
                            className="object-cover"
                            src={image}
                            alt='gallery-image'
                            width={600}
                            height={350}
                        />
                    </div> 
                )}
            </motion.div>
        </div>
    )
}