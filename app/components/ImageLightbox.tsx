"use client";

import { useState, useCallback, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { X } from "lucide-react";

interface ImageLightboxProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  fill?: boolean;
  priority?: boolean;
}

export default function ImageLightbox({
  src,
  alt,
  className,
  sizes,
  fill,
  priority,
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (open) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          className={className}
          sizes={sizes}
          fill={fill}
          priority={priority}
        />
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close lightbox"
            className="absolute top-6 right-6 size-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="size-5" />
          </button>

          <div
            className="relative max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              className="object-contain rounded-lg max-h-[85vh] w-auto"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
