import { Album } from "@/components/Album"


export const AlbumSection = ()=>{
    return(
        <section className="w-full min-h-screen py-10 px-2 sm:px-4 md:px-10" id="albums">
            <h1 className="text-white text-5xl md:text-8xl font-bold">Albums</h1>
            <div className="w-full grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-10 pt-10">
                <Album/>
                <Album/>
                <Album/>
            </div>

        </section>
    )
}