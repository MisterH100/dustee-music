import Image from 'next/image';
import DTMAlbum from '@/assets/albumcover.jpg';


export const Album =()=>{
    return(
        <div className="w-[200px] md:w-[200px]">
            <div className="w-full h-[200px] overflow-hidden">
                <Image
                    src={DTMAlbum}
                    alt='album-cover'
                    width={300}
                    height={300}
                />
            </div>
            <div className="w-full text-center">
                <h2 className="w-full text-white text-xl font-bold truncate">DTM</h2>
                <span className="block text-zinc-400 text-lg font-bold">Songs • 8</span>
                <span className="block text-zinc-400 text-lg font-bold">Release • 2023</span>
            </div>
        </div>
    )
}