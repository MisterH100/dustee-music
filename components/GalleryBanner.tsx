import Image from 'next/image';
import HomeBg from '@/assets/homebg.png';

export const GalleryBanner =()=>{
    return(
        <div className="w-full h-[200px] overflow-hidden rounded-xl">
            <Image
                className="w-full h-full object-cover"
                src={HomeBg}
                alt='gallery-image'
                width={350}
                height={350}
            />
        </div>
    )
}