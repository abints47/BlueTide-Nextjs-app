
import Image from "next/image";
import about_image from "@/app/images/about-image.jpg";
import about_image1 from "@/app/images/about-image1.jpg"
import Faqs from "@/app/components/Accordion";

export default function(){
    return(
        <>
        <div className="pt-10 px-10 pb-4 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-10 md:mb-14">
          <h1 className="text-6xl md:text-5xl font-bold text-center  tracking-tighter leading-tight md:pr-8 text-[#2B2B28]">
            About page
          </h1>
        </div>




        <div className="w-full max-w-7xl mx-auto p-4">
      {/* Grid wrapper with a large center gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        
        {/* Image 1 Container (Portrait) */}
        <div className="relative w-full h-180 md:h-600px">
          <Image
            src={about_image}
            alt="Portrait image"
            fill
            className="object-cover  shadow-md relative w-full h-600 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(56,189,248,0.5)]"
            sizes="(max-w-7xl) 100vw, 50vw"
            priority
          />
        </div>  

        {/* Image 2 Container (Landscape) */}
        <div className="relative w-full h-180 md:h-600px ">
          <Image
            src={about_image1}
            alt="Landscape image"
            fill
            className="object-cover  shadow-md relative w-full h-600 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(56,189,248,0.5)]"
            sizes="(max-w-7xl) 100vw, 50vw"
          />
        </div>

      </div>
    </div>


    <div>

        <p className="max-w-7xl mx-auto py-30 px-20 font-sans text-lg md:text-xl text-slate-600/95 leading-relaxed tracking-wide antialiased text-justify">  &emsp; &emsp;&emsp; Welcome to blueTide, a digital sanctuary designed for ocean lovers, beach seekers, and coastal wanderers. We believe that the sea has a
          
           unique way of clearing the mind, sparking adventure, and restoring the spirit. This platform was born out of a deep love for the shoreline, created to bring the calming, restorative energy of the ocean straight to your 
           
           screen no matter how far from the coast you might be. At the heart of blueTide is our passion for storytelling. Through our curated blogs, we dive deep beneath the surface to explore the mysteries of the deep blue, the 
           
           scientific peace of the "Blue Mind" effect, and the vital conservation efforts protecting our marine ecosystems. We write for those who find solace in the sound of crashing waves and who look at the endless horizon with a 
           
           sense of wonder. Beyond the written word, blueTide serves as your compass to the world's most beautiful shores. We curate exceptional beach destinations and travel options to help you plan your next escape. Whether you are
           
           searching for a hidden, untouched cove for a quiet retreat, a vibrant tropical paradise for water sports, or the ultimate spot to watch a golden sunset, we are here to help you find the tide that calls to you.
        
        <br/> <br/>
          &emsp;&emsp;&emsp; Our platform bridges the gap between digital inspiration and real-world exploration. Through carefully researched guides, firsthand travel insights, and stunning photography, we highlight coastal destinations that offer something truly special.
          
           From secluded, rocky cliffs in the north to sun-drenched, white-sand bays in the tropics, we handpick beach options that cater to every type of traveler. Whether you are looking 
          
          for a high-energy surf haven or a quiet, off-the-grid escape to read a book by the shore, we map out the details so you can focus on the journey.
          
          You cannot love the ocean without wanting to protect it. At blueTide, environmental consciousness is woven into everything we write. We recognize that these beautiful coastal ecosystems are fragile and require our respect and stewardship.
          
           That is why our blog features dedicated stories on marine conservation, sustainable travel tips, and spotlights on local communities working to keep our oceans clean and vibrant. We strive to inspire "leave no trace" tourism, ensuring that the breathtaking
            
            shores we celebrate today remain pristine for the generations of travelers who will follow in our footsteps.
          
          </p>
        
        

        <Faqs/>

    </div>
    

           
        </>
    );
}