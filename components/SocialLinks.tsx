import Link from "next/link";
import Image from "next/image";
import SoundCloud from '@/assets/sound-cloud.svg';
import Instagram from '@/assets/Instagram.svg';
import Youtube from '@/assets/YouTube-Icon.svg';


export const SocialLinks =()=>{
    const links =[
        {url:"#", name: "SoundCloud",logo: SoundCloud},
        {url:"https://instagram.com/the_everlasting_storm", name: "Instagram",logo: Instagram},
        {url:"#", name: "YouTube",logo: Youtube}
    ];

    return(
        <div className="w-full flex justify-evenly pt-4 bg-transparent">
            {links.map((link,index)=>
                <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    className="flex flex-col items-center gap-2"
                    >
                    <div className="w-[20px] h-[20px] flex justify-center items-center overflow-hidden">
                        <Image
                            src={link.logo}
                            alt="logo"
                            width={20}
                            height={20}
                        />
                    </div>
                    <span className="text-white text-sm font-bold">{link.name}</span>
                    
                </Link>
            )}
        </div>
    )
}