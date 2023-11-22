import Image from "next/image";
import audioWave from '@/assets/audio-wave.gif';
import { useGlobalContext } from "@/hooks/globalContext";

export const Widget =()=>{
    const {playerRef,isPlaying,nowPlaying,setWidget,widgetDuration} = useGlobalContext();
    return(
        <div className="relative w-full h-full flex items-center p-2 md:p-10">
            <button
                onClick={()=>{
                    setWidget(false)
                    playerRef.current?.showModal();
                }} 
                className="w-full h-fit flex items-center p-2 bg-orange-500 rounded-lg">
        
                <div className="flex-1 flex items-center gap-4">
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
                    <div className="flex flex-col text-left">
                        <span className="text-sm text-bold">Now Playing</span>
                        <span className="text-xs">{nowPlaying.name}</span>
                        <span className="text-xs">Dus-tee</span>
                    </div>
                </div>
                <span className="text-base pr-4">{widgetDuration}</span>
            </button>
        </div>
    )
}