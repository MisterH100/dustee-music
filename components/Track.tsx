import Image from 'next/image';
import Clown from '@/assets/clown.png';
import { useGlobalContext } from '@/hooks/globalContext';
import { useRef, useState } from 'react';

interface ISong{
    id:number;
    name: string;
    file: string;
}

export const Track =({song}:{song:ISong})=>{
    const {playerRef,isPlaying,setIsPlaying,nowPlaying,setNowPlaying,playPause,widget} = useGlobalContext();
    const trackRef = useRef<HTMLAudioElement>(null);
    const [trackDuration, setTrackDuration] = useState("00:00")
    const playSong = (track:ISong) =>{
        setNowPlaying(track);
        setIsPlaying(!isPlaying);  
        if(widget){
            playPause()
        }
        else{
            playerRef.current?.showModal();
        }
    }
    const calculateTime = (secs:number) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    }

    const displayDuration =(seconds:number)=>{
        if(trackRef.current){
            setTrackDuration(calculateTime(seconds));   
        
        }
    }

  
    return(
        <div className='flex h-[100px] mt-4 bg-blue-500 rounded-lg overflow-hidden shadow'>
            <div className="relative w-[100px] min-w-[80px] h-full group">
                <Image
                    className='w-full h-full object-cover'
                    src={Clown}
                    alt='cover'
                    width={100}
                    height={100}
                />
                <span className="hidden group-hover:flex absolute w-full h-full top-0 left-0 justify-center items-center bg-stone-900 bg-opacity-50">
                    <button
                    onClick={()=>playSong(song)}
                    >
                        {nowPlaying.id == song.id?isPlaying?
                            <svg className="w-12  h-12 text-white" 
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                fill="currentColor" 
                                viewBox="0 0 12 16">
                                <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"/>
                            </svg>:
                        
                            <svg className="w-12 h-12 text-white" 
                                aria-hidden="true" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="#fff" 
                                viewBox="0 0 14 16">
                                <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z"
                                />
                            </svg>:
                            <svg className="w-12 h-12 text-white" 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="#fff" 
                            viewBox="0 0 14 16">
                            <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z"
                            />
                            </svg>

                        }
                    </button>
                </span>
            </div>
            <div className="flex flex-1 h-full px-4">
                <div className="w-1/2 flex flex-col justify-center">
                    <h3 className="text-white text-xl md:text-2xl font-normal">{song.name}</h3>
                    <h4 className="text-zinc-400 text-base md:text-xl font-normal">Dus-tee</h4>
                    <div className="flex items-center gap-2">
                        <svg 
                        className="w-[12px] h-[12px] text-gray-800 dark:text-white" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="#B2B2B2" 
                        viewBox="0 0 14 16">
                        <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z"
                        />
                        </svg>
                        <span className="text-zinc-400 text-sm font-normal">500</span>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end items-center gap-10">
                    <span className="text-white">{trackDuration}</span>
                    <audio 
                        ref={trackRef}
                        src={song.file} 
                        preload='metadata' 
                        onLoadedMetadata={()=>displayDuration(trackRef.current?trackRef.current?.duration:0)}
                    />
                    <button
                        onClick={()=>playSong(song)}
                    >
                        {nowPlaying.id == song.id?isPlaying?
                            <svg className="w-6 h-6 text-white" 
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                fill="currentColor" 
                                viewBox="0 0 12 16">
                                <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"/>
                            </svg>:
                        
                            <svg className="w-6 h-6 text-white" 
                                aria-hidden="true" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="#fff" 
                                viewBox="0 0 14 16">
                                <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z"
                                />
                            </svg>:
                                <svg className="w-6 h-6 text-white" 
                                aria-hidden="true" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="#fff" 
                                viewBox="0 0 14 16">
                                <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z"
                                />
                            </svg>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}