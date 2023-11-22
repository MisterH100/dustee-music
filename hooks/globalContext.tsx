'use client'

import {useContext,createContext, useRef, useState, SetStateAction, useEffect} from 'react';


interface ISong{
    id:number;
    name: string;
    file: string;
}

interface IGlobalContext{
    playerRef: (React.RefObject<HTMLDialogElement>);
    audioRef: (React.RefObject<HTMLAudioElement>);
    isPlaying: boolean;
    setIsPlaying: (React.Dispatch<SetStateAction<boolean>>);
    nowPlaying: ISong;
    setNowPlaying: (React.Dispatch<SetStateAction<ISong>>);
    playPause: ()=> void;
    widget: boolean;
    setWidget: (React.Dispatch<SetStateAction<boolean>>);
    widgetDuration: string;
    setWidgetDuration: (React.Dispatch<SetStateAction<string>>);
    songs: ISong[]; 
    setSongs: (React.Dispatch<SetStateAction<ISong[]>>)

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
    const [songs, setSongs] = useState([
        {id:2,name: "track01",file:"/track01.mp3"},
        {id:3,name: "track02",file:"/track02.mp3"},
    ])

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
    },[nowPlaying])

    return(
        <GlobalContext.Provider value={
            {
                playerRef,
                audioRef,
                isPlaying,setIsPlaying,
                nowPlaying,setNowPlaying,
                widget,setWidget,
                widgetDuration,setWidgetDuration,
                songs,setSongs,
                playPause
            }
            }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)