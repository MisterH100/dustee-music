import Link from "next/link";
import Image from "next/image";
import SoundCloud from '@/assets/sound-cloud.svg';
import Instagram from '@/assets/Instagram.svg';
import Youtube from '@/assets/YouTube-Icon.svg';


export const SocialLinks =()=>{
    const links =[
        {url:"", name: "SoundCloud",logo: SoundCloud},
        {url:"", name: "Instagram",logo: Instagram},
        {url:"", name: "YouTube",logo: Youtube}
    ];

    return(
        <div className="w-full flex justify-evenly pt-4 bg-transparent">
            {links.map((link,index)=>
                <Link
                    key={index}
                    href={link.url}
                    className="flex flex-col items-center gap-2"
                    >
                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                        <Image
                            src={link.logo}
                            alt="logo"
                            width={40}
                            height={40}
                        />
                    </div>
                    <span className="text-white text-sm sm:text-base font-bold">{link.name}</span>
                    
                </Link>
            )}
        </div>
    )
}