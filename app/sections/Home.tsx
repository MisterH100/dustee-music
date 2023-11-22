'use client'
import Image from 'next/image';
import HomeBg from '@/assets/homebg.png';
import { SocialLinks } from '@/components/SocialLinks';
import SwirlyArrow from '@/assets/swirly-arrow.svg';
import { Track } from '@/components/Track';
import { useGlobalContext } from '@/hooks/globalContext';



export const HomeSection =()=>{
    const {songs} = useGlobalContext();
    
    return(
        <section className="relative w-full min-h-screen" id="home">
            <div className="w-full h-screen flex">
                <div className="absolute md:relative top-0 left-0 w-full h-screen md:w-1/2">
                    <Image
                        className="w-full h-full object-cover"
                        src={HomeBg}
                        alt="home-bg"
                    />
                    <div className="absolute w-full h-full bottom-0 left-0 z-10 bg-gradient-to-t from-stone-900 to-60% bg-opacity-80">

                    </div>
                </div>
                <div className="absolute md:relative top-0 w-full h-screen md:w-1/2 bg-stone-900 bg-opacity-50 md:bg-blue-500 pt-40 px-4 md:px-10 z-[100]">
                    <div>
                        <h1 className="text-white text-5xl font-bold">Dus-tee</h1>

                    </div>
                    <div className="realtive z-20 pt-4">
                        <h2 className="text-white text-base">Today's picks
                        </h2>
                        {songs.map((song)=>
                            <Track song={song}/>
                        )}
                    </div>
                    <div className="relative z-20 pt-10">
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
                    </div>
                    <div className="absolute w-full h-full bottom-0 left-0 z-10 bg-gradient-to-t from-stone-900 to-20% pointer-events-none">

                    </div>

                </div>
            </div>
        </section>
    )
}