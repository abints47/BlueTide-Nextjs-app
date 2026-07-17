import Link from "next/link";
import Image from "next/image";
import heroimage from "@/app/images/ocean.jpg"

export default function Home() {
  return (
    <div className="relative w-full h-screen">

      <Image
        src={heroimage}
        alt="Bluetide"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      {/* Centered text on top of the image */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="w-full max-w-xl text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-white/80 mb-4">
            Welcome to
          </p>
          <h1 className="text-6xl font-bold tracking-tighter text-white mb-6">
            Bluetide
          </h1>
          <p className="text-white/90 leading-relaxed mb-10">
            Stories from the shoreline — hidden beaches, slow mornings, and the
            small rituals that make everyday life feel a little more like a
            getaway.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="/blog"
              className="bg-white text-[#2B2B28] rounded-lg px-6 py-2.5 font-medium hover:opacity-90 transition-opacity"
            >
              Read the Blog
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white rounded-lg px-6 py-2.5 font-medium hover:bg-white/10 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}