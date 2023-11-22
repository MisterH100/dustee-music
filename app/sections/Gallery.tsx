import { Carousel } from "@/components/Carousel"
import { GalleryBanner } from "@/components/GalleryBanner"


export const GallerySection =()=>{
    return(
        <section className="w-full min-h-screen py-10 px-2 sm:px-4 md:px-10" id="gallery">
            <h1 className="text-white text-5xl md:text-8xl font-bold">Gallery</h1>
            <div className="w-full pt-10">
                <Carousel/>
            </div>
            <div className="w-full pt-10">
                <GalleryBanner/>
            </div>
        </section>
    )
}