
import { Header } from '@/components/Header';
import { AboutSection } from '@/app/sections/About';
import { HomeSection } from '@/app/sections/Home';
import { GallerySection } from './sections/Gallery';
import { AlbumSection } from './sections/Albums';
import { Footer } from '@/components/Footer';
import { Player } from '@/components/Player';



export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-stone-900">
      <Header/>
      <Player/>
      <HomeSection/>
      <AboutSection/>
      <AlbumSection/>
      <GallerySection/>
      <Footer/>
    </main>
  )
}
