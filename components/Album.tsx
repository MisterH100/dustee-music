import Image from 'next/image';
import { IAlbum } from '@/hooks/globalContext';
import Link from 'next/link';


export const Album =({album}:{album:IAlbum})=>{
    const cleanString =(string:string)=>{
        return string.replace(/\s/g,"").toLowerCase();
    }


    return(
        <Link href={`/album/${album.id}?album=${cleanString(album.title)}`} className="w-[200px] md:w-[200px]">
            <div className="w-full h-[200px] overflow-hidden">
                {album?        
                    <Image
                        priority
                        src={album.cover}
                        alt='album-cover'
                        width={200}
                        height={200}
                    />:null
                }
            </div>
            <div className="w-full text-center">
                <h2 className="w-full text-white text-xl font-bold truncate">{album.title}</h2>
                <span className="block text-zinc-300 text-lg font-bold">Songs • {album.songs.length}</span>
                <span className="block text-zinc-300 text-lg font-bold">Release • {new Date(album.release_date).getFullYear()}</span>
                
            </div>
        </Link>
    )
}