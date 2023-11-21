import { Roboto } from 'next/font/google';
import { HomeSection } from '@/sections/Home';
import { AboutSection } from '@/sections/About';
import { AlbumSection } from '@/sections/Albums';
import { GallerySection } from '@/sections/Gallery';
import { Footer } from '@/components/Footer';
 
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={`relative w-full min-h-screen bg-stone-900 ${roboto.className}`}>
      <HomeSection/>
      <AboutSection/>
      <AlbumSection/>
      <GallerySection/>
      <Footer/>
    </main>
  )
}
