import Image from 'next/image';
import HomeBg from '@/assets/homebg.png';
import AboutBg from '@/assets/aboutbg.jpg';
import DTMAlbum from '@/assets/albumcover.jpg';

export const Carousel =()=>{
    return(
        <div className="w-full carousel gap-5">
            <div className="carousel-item w-[300px] md:w-[600px] h-[350px]">
                <Image
                    className="object-cover"
                    src={HomeBg}
                    alt='gallery-image'
                    width={600}
                    height={350}
                />
            </div> 
            <div className="carousel-item w-[300px] md:w-[600px] h-[350px]">
                <Image
                    className="object-cover"
                    src={AboutBg}
                    alt='gallery-image'
                    width={600}
                    height={350}
                />
            </div> 
            <div className="carousel-item w-[300px] md:w-[600px] h-[350px]">
                <Image
                    className="object-cover"
                    src={DTMAlbum}
                    alt='gallery-image'
                    width={600}
                    height={350}
                />
            </div> 
        </div>
    )
}