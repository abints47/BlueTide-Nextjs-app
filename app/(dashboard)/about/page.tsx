
import Image from "next/image";
import about_image from "@/app/images/about-image.jpg";
import about_image1 from "@/app/images/about-image1.jpg"

export default function(){
    return(
        <>
        <div className="pt-10 px-10 pb-4 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-10 md:mb-14">
          <h1 className="text-6xl md:text-5xl font-bold text-center tracking-tighter leading-tight md:pr-8 text-[#2B2B28]">
            about page
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
            className="object-cover rounded-xl shadow-md"
            sizes="(max-w-7xl) 100vw, 50vw"
            priority
          />
        </div>  

        {/* Image 2 Container (Landscape) */}
        <div className="relative w-full h-180 md:h-600px">
          <Image
            src={about_image1}
            alt="Landscape image"
            fill
            className="object-cover rounded-xl shadow-md"
            sizes="(max-w-7xl) 100vw, 50vw"
          />
        </div>

      </div>
    </div>


    <div>

        <p className=" p-30 pl-50 pr-50 text-justify font-serif text-xl leading-relaxed ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley,
            the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.
             It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently
              with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
             The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
              making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
               and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like).
        </p>

    </div>

           
        </>
    );
}