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
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-[#2B2B28 ]">Beach</h1>
      </section>
      
      <div className="image-container mb-8 md:mb-16">
        <Image alt="Cover Image for Dynamic Routing and Static Generation" loading="eager" src={beach} decoding="async">
        </Image>
      </div>

      <div className=" md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <div>
            <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
              <Link href="/" > Discover the World's Most Beautiful Beaches</Link>
            </h3>
            <div className="mb-4 md:mb-0 text-lg">
              <time >March	16, 2020</time>
            </div>
          </div>
          <div>
            <p className="pl-15 text-lg leading-8 mb-4 text-justify ">Discover stunning coastlines, crystal-clear waters, and unforgettable seaside experiences that inspire relaxation and adventure alike.
              From peaceful sunrise walks along golden sandy beaches to thrilling water sports and breathtaking ocean views, every destination offers something unique.
               Whether you're planning a family vacation, a romantic escape, or a solo journey to reconnect with nature, you'll find the perfect place to unwind and create lasting memories.
               </p>
          </div>
      </div>


      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-[#2B2B28 ]">Island</h1>
      </section>
       <div className="image-container">
        <Image alt="Cover Image for Dynamic Routing and Static Generation" loading="eager" src={image} decoding="async"></Image>
      </div>

       <div className=" md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <div>
            <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
              <Link href="/" > Discover the World's Most Beautiful Beaches</Link>
            </h3>
            <div className="mb-4 md:mb-0 text-lg">
              <time >May	10, 2022</time>
            </div>
          </div>
          <div>
            <p className="pl-15 text-lg leading-8 mb-4 text-justify ">Discover stunning coastlines, crystal-clear waters, and unforgettable seaside experiences that inspire relaxation and adventure alike.
              From peaceful sunrise walks along golden sandy beaches to thrilling water sports and breathtaking ocean views, every destination offers something unique.
               Whether you're planning a family vacation, a romantic escape, or a solo journey to reconnect with nature, you'll find the perfect place to unwind and create lasting memories.
               </p>
          </div>
      </div>


      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-[#2B2B28 ]">Ocean</h1>
      </section>
       <div className="image-container">
          <Image alt="Cover Image for Dynamic Routing and Static Generation" loading="eager" src={beach2} decoding="async"></Image>

      </div>


       <div className="p-7 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <div>
            <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
              <Link href="/" > Discover the World's Most Beautiful Beaches</Link>
            </h3>
            <div className="mb-4 md:mb-0 text-lg">
              <time >March	16, 2020</time>
            </div>
          </div>
          <div>
            <p className="pl-15 text-lg leading-8 mb-4 text-justify ">Discover stunning coastlines, crystal-clear waters, and unforgettable seaside experiences that inspire relaxation and adventure alike.
              From peaceful sunrise walks along golden sandy beaches to thrilling water sports and breathtaking ocean views, every destination offers something unique.
               Whether you're planning a family vacation, a romantic escape, or a solo journey to reconnect with nature, you'll find the perfect place to unwind and create lasting memories.
               </p>
          </div>
      </div>  

    </div>
    </main>
    </>
  )
}