import Image from 'next/image';
import Clown from '@/assets/clown.png';


export const Track =()=>{
    return(
        <div className='flex h-[100px] mt-4 bg-blue-500 rounded-lg overflow-hidden'>
            <div className="relative w-[100px] min-w-[80px] h-full group">
                <Image
                className='w-full h-full object-cover'
                src={Clown}
                alt='cover'
                width={100}
                height={100}
                />
                <span className="hidden group-hover:flex absolute w-full h-full top-0 left-0 justify-center items-center bg-stone-900 bg-opacity-50">
                    <button>
                        <svg className="w-[50px] h-[50px] text-white" 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="#fff" 
                            viewBox="0 0 14 16">
                            <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z"
                            />
                        </svg>
                    </button>
                </span>
            </div>
            <div className="flex flex-1 h-full px-4">
                <div className="w-1/2 flex flex-col justify-center">
                    <h3 className="text-white text-xl md:text-2xl font-normal">Change</h3>
                    <h4 className="text-zinc-400 text-base md:text-xl font-normal">Dus-tee</h4>
                    <div className="flex items-center gap-2">
                        <svg 
                        className="w-[12px] h-[12px] text-gray-800 dark:text-white" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="#B2B2B2" 
                        viewBox="0 0 14 16">
                        <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z"
                        />
                        </svg>
                        <span className="text-zinc-400 text-sm font-normal">500</span>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end items-center gap-10">
                    <span>3:38</span>
                    <button>
                        <svg className="w-[25px] h-[25px] text-white" 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="#fff" 
                            viewBox="0 0 14 16">
                            <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}