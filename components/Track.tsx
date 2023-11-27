'use client'
import Image from 'next/image';
import { ISong, useGlobalContext } from '@/hooks/globalContext';
import { useEffect, useRef, useState } from 'react';
import { motion,} from 'framer-motion';


export const Track =({song,}:{song:ISong})=>{
    const {isPlaying,nowPlaying,playSong,albums,setCursor} = useGlobalContext();
    const trackRef = useRef<HTMLAudioElement>(null);
    const [loadingTrackDuration,setLoadingTrackDuration] = useState(true);
    const [source,setSource] = useState("");
    
    const calculateTime = (secs:number) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    }

    const displayDuration =(seconds:number)=>{
        if(trackRef.current){
            return calculateTime(seconds);   
        
        }
    }


    useEffect(()=>{
        setTimeout(()=>{
            setLoadingTrackDuration(false)
        },5000)
        
        albums.map((album)=>{
            if(album.songs.find((song)=>song.id == song.id))
            setSource(album.cover)
        })
    },[albums])

    return(
        <motion.div
            onClick={()=>playSong(song)}
            onMouseEnter={()=>setCursor(true)}
            onMouseLeave={()=>setCursor(false)}
            initial={{scaleX: 1,opacity:0}}
            whileHover={{scaleX:1.01}}
            whileInView={{opacity:1}}
            transition={{type:"spring"}}
            className='relative flex h-[100px] mt-4 bg-blue-700 rounded-lg overflow-hidden shadow hover:bg-blue-800 transition-all duration-300 ease-in-out group z-50'>

            <div className="relative min-w-[100px] w-[100px] h-full z-10 group">
                {source?  
                    <Image
                        className='w-full h-full object-cover'
                        priority
                        src={source}
                        alt='cover'
                        width={100}
                        height={100}
                    />:
                    <div className="w-full h-full skeleton">

                    </div>
                }
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
            <div className="w-full flex flex-1 h-full px-4">
                <div className="w-full  md:w-52 flex flex-col justify-center">
                    <div className="w-80% overflow-hidden ">
                        <h3 className="text-white text-lg md:text-xl font-normal w-fit whitespace-nowrap">{song.title}</h3>
                        <h4 className="text-zinc-300 text-base md:text-xl font-normal w-fit whitespace-nowrap">{song.artist}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg 
                        className="w-[12px] h-[12px] text-white" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="#B2B2B2" 
                        viewBox="0 0 14 16">
                        <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z"
                        />
                        </svg>
                        <span className="text-zinc-300 text-sm font-normal">500</span>
                    </div>
                </div>
                <div className="hidden  md:flex flex-1 justify-end items-center gap-10">
                    <span className="text-white">
                        {loadingTrackDuration?
                            <span className="loading loading-ring loading-xs"></span>:
                            displayDuration(trackRef.current?.duration?trackRef.current?.duration:0)
                        }    
                    </span>
                    <audio 
                        ref={trackRef}
                        src={song.file} 
                        preload='metadata' 
                    />
                    <button
                        onClick={()=>playSong(song)}
                        className="scale-1 hover:scale-125 group-hover:scale-125 transition-all duration-300"
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
        </motion.div>
    )
}