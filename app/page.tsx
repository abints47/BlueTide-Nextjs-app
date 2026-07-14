import "./globals.css"
import Image from "next/image"
import image from "./images/wallphoto.jpg";
import beach from "./images/beach.jpg";
import beach2 from "./images/beach1.jpg";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <main>
    <div className="container mx-auto px-5">
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">Beach</h1>
      </section>
      
      <div className="image-container">
      <Image alt="Cover Image for Dynamic Routing and Static Generation" loading="eager" src={beach} decoding="async">
      
       
      </Image>
      </div>
       <div className="image-container">
      <Image alt="Cover Image for Dynamic Routing and Static Generation" loading="eager" src={image} decoding="async"></Image>
      </div>
       <div className="image-container">
      <Image alt="Cover Image for Dynamic Routing and Static Generation" loading="eager" src={beach2} decoding="async"></Image>
      </div>  
    </div>
    </main>
    </>
  )
}