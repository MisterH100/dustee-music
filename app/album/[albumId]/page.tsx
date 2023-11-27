'use client'
import Image from 'next/image';
import { useParams} from 'next/navigation';
import { IAlbum, useGlobalContext } from '@/hooks/globalContext';
import { useEffect, useState } from 'react';
import { Track } from '@/components/Track';
import { Player } from '@/components/Player';
import { SquareWidget } from '@/components/SquareWidget';
import { Widget} from '@/components/Widget';
import { motion,AnimatePresence } from 'framer-motion';
import Link from 'next/link';


export default function AlbumPage() {
    const [album,setAlbum] = useState<IAlbum>()
    const {albumId} = useParams();
    const {albums,widget,playSong,isPlaying,setSongs,songs,playPause} = useGlobalContext();
    const [shuffle, setShuffle] = useState(false);

    const getRandomSong = (max:number)=> {
        return Math.floor(Math.random() * max);
    }
    const playAll =()=>{     
        if(isPlaying){
            playPause();
        }else{

            if(shuffle){
                if(album){
                    setSongs(album.songs);
                    const randomSong = getRandomSong(album.songs.length);
                    playSong(songs[randomSong]);
                }
            }
            else{
                if(album){
                    playSong(songs[0]);
                }
            }
        }
    }

    useEffect(()=>{
        setAlbum(albums.find((album)=>album.id.toString() == albumId));
        if(album){
            setSongs(album.songs)
        }
    },[album,albumId]);

    return(
        <main className="relative w-full min-h-screen bg-stone-900 p-4 md:p-10">
            <Player/>
            <AnimatePresence>
                {widget?  
                    <motion.div 
                    key="widget"
                        initial={{scaleX:0.8}}
                        animate={{scaleX:1}}
                        exit={{scale:0.8}}
                        className="md:hidden sticky w-full top-0 left-0 z-[999] bg-gradient-to-b from-stone-900 to-90% bg-opacity-80">
                        <Widget/>
                    </motion.div>:null
                }
            </AnimatePresence>
            <div className="w-full bg-orange-500 rounded-lg p-4 md:p-10">
                <Link href="/#albums" className="w-fit flex items-center gap-2 text-base text-white py-2">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                    </svg>
                    back
                </Link>
                <div className="w-full flex">
                    <div className="flex flex-1">
                        <div className="w-[200px] h-[200px] overflow-hidden">
                        {album?  
                            <Image
                                priority
                                src={album?album.cover:""}
                                alt='album-cover'
                                width={200}
                                height={200}
                            />:null
                        } 
                        </div>
                        <div className="pl-4">
                            {album? 
                                <>
                                    <h1 className="text-white text-2xl font-bold">{album?.title}</h1>
                                    <h2 className="text-white text-xl font-bold flex-1">{album?.artist}</h2>
                                    <h3 className="text-white text-base font-bold">{new Date(album?.release_date||Date.now()).getFullYear()}</h3>
                                </>:null
                            }
                            <div>
                                <Link 
                                    className="text-base text-white"
                                    href="https://soundcloud.com/user-565416632/sets/dedication-through-misery" target="_blank">Stream {album?.title} on SoundCloud
                                </Link>
                            </div>
                        </div>
                    </div>
                    <AnimatePresence>
                        {widget?
                            <motion.div 
                                key="square-widget"
                                initial={{scaleX:0.8}}
                                animate={{scaleX:1}}
                                exit={{scale:0.8}}
                                className="hidden md:block">
                                <SquareWidget/>
                            </motion.div>:null
                        }
                    </AnimatePresence>
                </div>
            </div>
            <div className="w-full h-40 flex justify-end items-center gap-10">
                <h4 className="text-white text-sm md:text-xl  flex-1">Songs • {album?.songs.length}</h4>
                <button 
                    onClick={()=>setShuffle(!shuffle)}
                    className="btn btn-circle btn-ghost">
                    <svg className={`w-6 h-6 ${shuffle?"text-orange-500":"text-white"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.484 6.166 13 4h6m0 0-3-3m3 3-3 3M1 14h5l1.577-2.253M1 4h5l7 10h6m0 0-3 3m3-3-3-3"/>
                    </svg>
                </button>
                <button 
                    onClick={playAll}
                    className="btn w-20 h-20 rounded-full flex justify-center items-center bg-blue-700 hover:bg-blue-800 transition-all duration-300 ease-in-out scale-75 md:scale-100 ">
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
            </div>
            {album?.songs.map((song,index)=>
                <Track key={index} song={song}/>
            )}
        </main>
    )
}