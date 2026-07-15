
import Image from "next/image";
import about_image from "@/app/images/about-image.jpg";

export default function(){
    return(
        <>
        <div className="p-10 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-[#2B2B28]">about page</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
            <Image src={about_image} className="about-image p-10"  alt="beach image " loading="eager" ></Image>
        </div>
        </>
    );
}