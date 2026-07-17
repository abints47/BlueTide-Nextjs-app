import "@/app/globals.css"
import Image from "next/image"
import Link from "next/link";

// 1. Import your images
import image from "@/app/images/wallphoto.jpg";
import beach from "@/app/images/beach.jpg";
import beach2 from "@/app/images/beach1.jpg";

// 2. Setup standard dynamic array
const homepageData = [
  {
    category: "Beach",
    imageSrc: beach,
    imageAlt: "Cover Image for Dynamic Routing and Static Generation",
    linkTitle: "Discover the World's Most Beautiful Beaches",
    linkUrl: "/",
    date: "July 16, 2026",
    description: "Discover stunning coastlines, crystal-clear waters, and unforgettable seaside experiences that inspire relaxation and adventure alike. From peaceful sunrise walks along golden sandy beaches to thrilling water sports and breathtaking ocean views, every destination offers something unique. Whether you're planning a family vacation, a romantic escape, or a solo journey to reconnect with nature, you'll find the perfect place to unwind and create lasting memories."
  },
  {
    category: "Island",
    imageSrc: image,
    imageAlt: "Cover Image for Dynamic Routing and Static Generation",
    linkTitle: "Island Culture & Rich Heritage",
    linkUrl: "/",
    date: "May 10, 2026",
    description: "To truly understand an island, you must look past the luxury resorts and immerse yourself in its living culture. Island heritage is a rich tapestry woven from centuries of migration, maritime history, and deep-rooted traditions. From the vibrant rhythm of local music echoing down cobblestone streets to the aromatic smoke rising from beachside food stalls, every corner tells a story. Island cuisine is a masterclass in fresh simplicity, marrying daily ocean catches with tropical spices and earth-grown ingredients. Engaging with local artisans, sharing stories with fishermen, and tasting traditional dishes is the ultimate way to discover the true, beating heart of any island paradise."
  },
  {
    category: "Ocean",
    imageSrc: beach2,
    imageAlt: "Cover Image for Dynamic Routing and Static Generation",
    linkTitle: "The Atlantic Ocean: Currents of the Global Conveyor Eco-Tourism & Science",
    linkUrl: "/",
    date: "March 16, 2024",
    description: "Beyond its breath-taking beauty, the Atlantic Ocean functions as the literal engine of our planet's climate, driving massive currents like the Gulf Stream that distribute warmth across the globe. Generating over half of the coastal oxygen supply and supporting rich fishing grounds from the icy north to the tropical south, this colossal body of water sustains vast networks of marine and terrestrial life. However, the Atlantic is currently facing unprecedented challenges from warming waters and changing currents, threatening the delicate ecosystems that keep our biosphere balanced. Protecting these waters is a necessity for our survival, proving that when we nurse the Atlantic back to health, we safeguard our global future."
  }
];

export default function Homepage() {
  return (
    <>
      <main>
        <div className="container mx-auto px-5 font-sans text-lg md:text-xl leading-relaxed tracking-wide antialiased">
          {homepageData.map((item, index) => {
            // Respect the original padding logic
            const gridContainerClass = index === 2 
              ? "p-7 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28" 
              : "md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28";

            // Added "rounded-md overflow-hidden" to the wrapper so corners never overflow/leak out
            const imageWrapperClass = index === 0 
              ? "image-container rounded-md overflow-hidden mb-8 md:mb-16" 
              : "image-container rounded-md overflow-hidden";

            return (
              <div key={index}>
                {/* Category Header */}
                <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
                  <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-[#2B2B28]">
                    {item.category}
                  </h1>
                </section>

                {/* Image Wrapper (Now controls the rounding strictly) */}
                <div className={imageWrapperClass}>
                  <Image 
                    alt={item.imageAlt} 
                    loading="eager" 
                    className="rounded-md object-cover w-full h-auto" // Added w-full h-auto for proper sizing
                    src={item.imageSrc} 
                    decoding="async"
                  />
                </div>

                {/* Content Grid */}
                <div className={gridContainerClass}>
                  <div>
                    <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                      <Link href={item.linkUrl}>{item.linkTitle}</Link>
                    </h3>
                    <div className="mb-4 md:mb-0 text-lg">
                      <time>{item.date}</time>
                    </div>
                  </div>
                  <div>
                    <p className="pl-15 text-lg leading-8 mb-4 text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}