import { useGlobalContext } from "@/hooks/globalContext";
import { motion } from "framer-motion";
import { useRef, useState } from "react";


export const Navigator = ()=>{
    const {cursor,cursorPosition} = useGlobalContext()
    const cursorRef = useRef<HTMLDivElement | any>(null);

    return(
        <motion.div 
            variants={{
                enter: {
                    scale:1,
                    width:20, 
                    height: 20,
                },
                exit: {
                    scale:0,
                    opacity:0
                },
                move:{
                    x:cursorPosition.x,
                    y:cursorPosition.y,
                }
            }}
            initial={false}
            animate={cursor?["enter","move"]:["exit","move"]}
            exit="exit"
            ref={cursorRef}
            className={`pointer-events-none fixed z-[9999] w-10 h-10 rounded-full bg-white -translate-x-[50%] -translate-y-[50%] origin-center flex justify-center items-center overflow-hidden`}
            >
        </motion.div>
    )
}