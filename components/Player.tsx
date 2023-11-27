'use client'
import { useGlobalContext } from "@/hooks/globalContext"
import Image from 'next/image';
import SoundCloud from '@/assets/sound-cloud.svg';
import { ChangeEvent, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Player =()=>{
    const {playerRef,audioRef,nowPlaying,setNowPlaying,setWidget,setWidgetDuration,isPlaying,playPause,songs,setSongs,albums} = useGlobalContext();
    const [audioCurrentTime, setAudioCurrentTime] = useState<number>(0);
    const [audioDuration, setAudioDuration] = useState<number>(0);
    const [trackIndex, setTrackIndex] = useState(0);
    const [source,setSource] = useState("");
    const [soundCloud,setSoundClound] = useState("");
    const audio = audioRef.current;
    const pathname = usePathname();

    const calculateTime = (secs:number) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    }

    const displayDuration =(seconds:number)=>{
        if(audio){
            return calculateTime(seconds);   
        
        }
    }

    const updateCurrentTime =()=>{
        if(audio){
            setAudioCurrentTime(audio.currentTime);
            setWidgetDuration(calculateTime(audio.currentTime))
        }
    }

    const updateDuration =()=>{
        if(audio){
            setAudioDuration(audio.duration);
        }
    }
    const seekAudio = (e:ChangeEvent<HTMLInputElement>)=>{
        if(audio){
            audio.currentTime = Number(e.target.value);
            setAudioCurrentTime(Number(e.target.value));
        }
    }

    const nextSong = ()=>{
        if (trackIndex >= songs.length - 1) {
            setTrackIndex(0);
            setNowPlaying(songs[0]);
          } else {
            setTrackIndex((prev) => prev + 1);
            setNowPlaying(songs[trackIndex + 1]);
          }
    }

    const prevSong =()=>{
        if(trackIndex == 0){
            const lastTrackIndex = songs.length-1;
            setTrackIndex(lastTrackIndex);
            setNowPlaying(songs[lastTrackIndex]);
        }else{
            setTrackIndex((prev) => prev - 1);
            setNowPlaying(songs[trackIndex - 1]);
        }
    }

    useEffect(()=>{
        albums.map((album)=>{
            if(album.songs.find((s)=>s.id == nowPlaying.id))
            setSource(album.cover);
            setSoundClound(album.soundCloudLink);
            
        });
        setSongs(albums[0].songs);
    },[songs,nowPlaying]);
    
    return(
        <dialog 
            ref={playerRef} 
            className={pathname =='/'?"modal modal-top w-full min-h-screen md:w-1/2":"modal modal-bottom sm:modal-middle w-full min-h-screen"}>
            <div className="modal-box min-h-[350px] md:fit bg-orange-500 md:p-0 md:pt-4">

                <div className="md:relative w-full md:w-fit mx-auto  bg-orange-500 md:p-4 md:rounded-lg scale-95 sm:scale-100">
                    <div className="absolute w-full flex top-0 right-0 items-center justify-end px-4 md:px-8 pb-4 md:py-4">
                        <form method="dialog" className="w-fit flex items-center">
                            <button 
                            onClick={()=>setWidget(true)}
                            className="text-white btn btn-sm btn-circle btn-ghost">
                                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div className="w-full px-4 pt-10">
                        <h1 className="text-left text-white text-3xl font-bold">Now Playing</h1>
                    </div>
                    <div className="w-full p-4">
                        <div className="w-full h-60 mx-auto bg-white rounded-lg overflow-hidden skeleton">
                            {source?
                                <Image
                                    className='w-full h-full object-cover'
                                    priority
                                    src={source}
                                    alt='cover'
                                    width={200}
                                    height={200}
                                />:null
                            }
                        </div>
                        <div className="pt-4">
                            <div className="text-white">
                                <div className="flex items-center">
                                    <h2 className="flex-1 text-2xl font-bold">{nowPlaying.title}</h2>
                                    <Link href={soundCloud} target="_blank" title="listen on SoundClound">
                                        <Image
                                        src={SoundCloud}
                                        alt="logo"
                                        width={20}
                                        height={20}              
                                        />
                                    </Link>
                                </div>
                                <h3 className="text-base font-bold">{nowPlaying.artist}</h3>
                            </div>
                            <div className="pt-4">
                                <div className="flex items-center gap-4 text-white">
                                    <span>
                                        {audioCurrentTime == 0?"00:00":displayDuration(audioCurrentTime)}
                                    </span>
                                    <audio
                                        ref={audioRef}
                                        src={nowPlaying.file}
                                        preload="metadata"
                                        onTimeUpdate={updateCurrentTime}
                                        onLoadedMetadata={updateDuration}
                                        onEnded={nextSong}
                                    />
                                    <input 
                                        id="audio-seeker"
                                        type="range"
                                        value={Math.floor(audioCurrentTime)}
                                        max={Math.floor(audioDuration)}
                                        onChange={seekAudio}
                                        className="range range-xs range-primary"
                                    />
                                    <span>
                                    {audioDuration == 0?"00:00":displayDuration(audioDuration)}
                                    </span>
                                </div>
                            </div>
                            <div className="w-full flex justify-center items-center gap-10 md:gap-20 pt-4">
                                <button 
                                    className="btn btn-ghost btn-circle w-20 h-20 border-none scale-90 md:scale-100"
                                    onClick={prevSong}>
                                    <svg className="w-12 h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 16">
                                    <path d="M10.819.4a1.974 1.974 0 0 0-2.147.33l-6.5 5.773A2.014 2.014 0 0 0 2 6.7V1a1 1 0 0 0-2 0v14a1 1 0 1 0 2 0V9.3c.055.068.114.133.177.194l6.5 5.773a1.982 1.982 0 0 0 2.147.33A1.977 1.977 0 0 0 12 13.773V2.227A1.977 1.977 0 0 0 10.819.4Z"/>
                                    </svg>
                                </button>
                                <button
                                    className="btn btn-circle w-20 h-20 border-none bg-blue-700 hover:bg-blue-800 scale-90 md:scale-100"
                                    onClick={playPause}
                                >
                                    {isPlaying?
                                        <svg className="w-12  h-12 text-white" 
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                        fill="currentColor" 
                                        viewBox="0 0 12 16">
                                        <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"/>
                                        </svg>:
                                    
                                        <svg className="ml-2 w-12 h-12 text-white" 
                                            aria-hidden="true" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            fill="#fff" 
                                            viewBox="0 0 14 16">
                                            <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z"
                                            />
                                        </svg>
                                    
                                    }
                                </button>
                                <button 
                                    className="btn btn-ghost btn-circle w-20 h-20 border-none scale-90 md:scale-100"
                                    onClick={nextSong}>
                                    <svg className="w-12 h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 16">
                                    <path d="M11 0a1 1 0 0 0-1 1v5.7a2.028 2.028 0 0 0-.177-.194L3.33.732A2 2 0 0 0 0 2.227v11.546A1.977 1.977 0 0 0 1.181 15.6a1.982 1.982 0 0 0 2.147-.33l6.5-5.773A1.88 1.88 0 0 0 10 9.3V15a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </dialog>
    )
}