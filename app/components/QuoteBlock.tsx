export default function QuoteBlock() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Accent line */}
        <div className="w-16 h-1 bg-[#2B2B28] mx-auto mb-10 rounded-full" />

        <blockquote className="text-3xl md:text-5xl font-serif leading-tight tracking-tight text-[#2B2B28] mb-8 italic">
          &ldquo;The sea, once it casts its spell, holds one in its net of wonder forever.&rdquo;
        </blockquote>

        <cite className="not-italic text-gray-400 text-lg tracking-wide">
          — Jacques Cousteau
        </cite>

        {/* Accent line */}
        <div className="w-16 h-1 bg-[#2B2B28] mx-auto mt-10 rounded-full" />
      </div>
    </section>
  );
}
