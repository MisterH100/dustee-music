import { useGlobalContext } from "@/hooks/globalContext";
import Image from "next/image";
import audioWave from '@/assets/audio-wave.gif';
import { motion } from "framer-motion";


export const SquareWidget =()=>{
    const {playerRef,isPlaying,nowPlaying,setWidget,widgetDuration,setCursor} = useGlobalContext();

    return(
        <motion.button 
            onMouseEnter={()=>setCursor(true)}
            onMouseLeave={()=>setCursor(false)}
            className="w-[200px] h-[200px] flex flex-col items-center justify-center gap-4 bg-orange-500 hover:bg-orange-600 rounded-lg transition-all duration-300 ease-in-out shadow-md"
            initial={{scaleX:1}}
            whileHover={{scaleX:1.01}}
            onClick={()=>{
                setWidget(false)
                playerRef.current?.showModal();
            }}
        
        >
            <div className="w-12 h-12 overflow-hidden rounded-lg p-2 bg-white flex items-center">
                {isPlaying?
                    <Image
                        src={audioWave}
                        alt="adio-wave"
                        width={50}
                        height={50}
                        className="w-full h-full object-cover" 
                    />:
                    <span className="block w-full h-1 bg-black rounded-full">
                        
                    </span>

                }
            </div>
            <div className="w-full flex flex-col items-center text-white">
                <div className="flex flex-col text-left">
                    <span className="text-sm text-bold">Now Playing</span>
                    <span className="text-xs">{nowPlaying.title}</span>
                    <span className="text-xs">{nowPlaying.artist}</span>
                </div>
                <div className="w-full text-center">
                    <span className="text-base">{widgetDuration}</span>
                </div>
            </div>
        </motion.button>
    )
}