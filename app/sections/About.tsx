import Image from "next/image"
import AboutBg from '@/assets/aboutbg.jpg';

export const AboutSection =()=>{
    return(
        <section className="w-full min-h-screen flex items-center" id="about">
            <div className="relative w-full h-[500px] flex items-end">
                <div className="absolute w-full h-full top-0 left-0 z-10 bg-gradient-to-b from-stone-900 to-60% bg-opacity-80">

                </div>
                <Image
                    className='absolute top-0 left-0 z-0 w-full h-full object-cover'
                    src={AboutBg}
                    alt='aboutbg'
                    height={500}
                />
                <div className="relative z-20 py-10 px-2 sm:px-4 md:px-10">
                    <h1 className="text-white text-5xl md:text-8xl font-bold">About<span className="text-white text-2xl md:text-5xl font-bold ml-4 md:ml-10">Dus-tee</span></h1>
                    <p className="text-white text-base md:text-2xl font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet hic alias, illum dolorem non in ducimus tenetur atque natus magni maiores quisquam voluptatibus expedita labore aliquam, odit quidem eos nulla?</p>
                    <div className="absolute w-full h-full bottom-0 left-0 -z-10 bg-gradient-to-t from-stone-900 to-60% bg-opacity-80">

                    </div>
                </div>
            </div>

        </section>
    )
}