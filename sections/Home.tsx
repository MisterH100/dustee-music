import Image from 'next/image';
import HomeBg from '@/assets/homebg.png';
import Clown from '@/app/assets/clown.png';
import { Header } from '@/components/Header';
import { SocialLinks } from '@/components/SocialLinks';
import SwirlyArrow from '@/assets/swirly-arrow.svg';
import { Track } from '@/components/Track';


export const HomeSection =()=>{
    return(
        <section className="relative w-full min-h-screen flex" id="home">
            <div className='absolute top-0 left-0 md:relative w-full md:w-1/2 h-screen'>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-stone-900 to-80% bg-opacity-80">
                </div>
                <Image
                    className='w-full h-full object-cover'
                    src={HomeBg}
                    alt='homebg'
                />
            </div>
            <div className="absolute top-0 left-0 md:relative w-full md:w-1/2 h-screen md:h-full bg-stone-900 bg-opacity-50">
                <Header/>

                <div className="w-full py-4 px-2 sm:px-4 md:px-10">
                    <h1 className="text-white text-5xl md:text-8xl font-bold">Dus-tee</h1>
                    <div className="w-full h-0 border-2 border-white mt-4"></div>
                    <h2 className="text-white text-base md:text-xl font-normal pt-4">Today's picks</h2>
                    <Track/>
                    <Track/>
                </div>

                <div className="w-full pt-10 md:pt-0">    
                    <span 
                        className="text-white text-base font-normal w-full flex justify-center items-center">follow
                        <Image
                            src={SwirlyArrow}
                            alt='arrow'
                            width={50}
                            height={50}
                        />
                    </span>
                    <SocialLinks/>
                </div>
            </div>
        </section>
    )
}