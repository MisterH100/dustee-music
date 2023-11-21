import Image from 'next/image';
import DTMAlbum from '@/assets/albumcover.jpg';


export const Album =()=>{
    return(
        <div className="w-[250px] md:w-[300px]">
            <div className="w-full h-[300px] overflow-hidden">
                <Image
                    src={DTMAlbum}
                    alt='album-cover'
                    width={300}
                    height={300}
                />
            </div>
            <div className="w-full text-center">
                <h2 className="w-full text-white text-2xl font-bold truncate">DTM</h2>
                <span className="block text-zinc-400 text-xl font-bold">Songs • 8</span>
                <span className="block text-zinc-400 text-xl font-bold">Release • 2023</span>
            </div>
        </div>
    )
}