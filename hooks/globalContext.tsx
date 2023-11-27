'use client'

import {useContext,createContext, useRef, useState, SetStateAction, useEffect} from 'react';

export interface IAlbum{
    id:number;
    artist: string;
    genre: string;
    title: string;
    cover: string;
    release_date: Date;
    soundCloudLink:string;
    songs:ISong[]

}
export interface ISong{
    id:number;
    title: string;
    artist: string;
    file: string;
    duration: number,
    album: string
}

interface IPosition{
    x:number;
    y:number
}

interface IGlobalContext{
    playerRef: (React.RefObject<HTMLDialogElement>);
    audioRef: (React.RefObject<HTMLAudioElement>);
    isPlaying: boolean;
    setIsPlaying: (React.Dispatch<SetStateAction<boolean>>);
    nowPlaying: ISong;
    setNowPlaying: (React.Dispatch<SetStateAction<ISong>>);
    playPause: ()=> void;
    playSong:(track:ISong) =>void
    widget: boolean;
    setWidget: (React.Dispatch<SetStateAction<boolean>>);
    widgetDuration: string;
    setWidgetDuration: (React.Dispatch<SetStateAction<string>>);
    cursorPosition: IPosition;
    setCursorPosition: (React.Dispatch<SetStateAction<IPosition>>);
    cursor: boolean;
    setCursor: (React.Dispatch<SetStateAction<boolean>>);
    songs: ISong[]; 
    setSongs: (React.Dispatch<SetStateAction<ISong[]>>);
    albums: IAlbum[];
    setAlbums: (React.Dispatch<SetStateAction<IAlbum[]>>)

}
const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

export const GlobalContextProvider = ({children}:{children: React.ReactNode})=>{
    const playerRef = useRef<HTMLDialogElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const audio = audioRef.current;
    const [isPlaying, setIsPlaying] = useState(false);
    const [nowPlaying, setNowPlaying] = useState({} as ISong);
    const [widget, setWidget] = useState(false);
    const [widgetDuration, setWidgetDuration] = useState("00:00");
    const [cursorPosition,setCursorPosition] = useState({x:0,y:0});
    const [cursor,setCursor] = useState(false);
    const [albums,setAlbums] = useState([
        {
            id: 1,
            artist: "Dus-tee",
            genre: "hip-hop",
            title:"DTM: EP",
            cover:"/DTM/albumcover.jpg",
            release_date: new Date(2023,6,9,17,31),
            soundCloudLink:"https://soundcloud.com/user-565416632/sets/dedication-through-misery",
            songs:[
                {
                    id:1,
                    title:"LoST MySeLf (feat. Shots)",
                    artist: "Dus-tee",
                    file:"/DTM/1.LoStMySeLf(feat.Shots).mp3",
                    duration: 0,
                    album: "DTM: EP"
                },
                {
                    id:2,
                    title:"ALONE",
                    artist: "Dus-tee",
                    file:"/DTM/2.ALONE.mp3",
                    duration: 0,
                    album: "DTM: EP"
                },
                {
                    id:3,
                    title:"DoLoR (feat. Quadro)",
                    artist: "Dus-tee",
                    file:"/DTM/3.DoLoR(feat.Quadro).mp3",
                    duration: 0,
                    album: "DTM: EP"
                },
                {
                    id:4,
                    title:"DTM (feat tk_kome & Lecture Brown)",
                    artist: "Dus-tee",
                    file:"/DTM/4.DTM(feat.tk_kome,LectureBrown).mp3",
                    duration: 0,
                    album: "DTM: EP"
                },
                {
                    id:5,
                    title:"We ju$t Wanna Live (feat. SwizzyYungLxrd, Blue29 & tk_kome)",
                    artist: "Dus-tee",
                    file:"/DTM/5.WejustWannaLive(feat.SwizzyYungLxrd,Blue29&tk_kome).mp3",
                    duration: 0,
                    album: "DTM: EP"
                },
                {
                    id:6,
                    title:"tHe Recipe (feat. Quadro)",
                    artist: "Dus-tee",
                    file:"/DTM/6.tHeRecipe(feat.Quadro).mp3",
                    duration: 0,
                    album: "DTM: EP"
                },
            ]
        }
    ]);
    const [songs, setSongs] = useState<ISong[]>([]);

    const playSong = (track:ISong) =>{
        setNowPlaying(track);
        setIsPlaying(!isPlaying);  
        if(widget){
            playPause()
        }
        else{
            playerRef.current?.showModal();
        }
    }

    const playPause=()=>{
        if(!isPlaying){
            audio?.play();
            setIsPlaying(true);
        }else{
            audio?.pause();
            setIsPlaying(false);
        }
    }

    
    
    useEffect(()=>{
        if(audio){
            audio.play();
            setIsPlaying(true);
        }
    },[nowPlaying]);
    
    useEffect(()=>{
        if(typeof window !== 'undefined'){
            window.addEventListener("mousemove",(e)=>{
                setCursorPosition({x:e.clientX,y:e.clientY})
            })
            
        }
    },[cursorPosition])

    return(
        <GlobalContext.Provider value={
            {
                playerRef,
                audioRef,
                isPlaying,setIsPlaying,
                nowPlaying,setNowPlaying,
                widget,setWidget,
                widgetDuration,setWidgetDuration,
                cursorPosition,setCursorPosition,
                cursor,setCursor,
                songs,setSongs,
                albums,setAlbums,
                playPause,
                playSong,
            }
            }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)