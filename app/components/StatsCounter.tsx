const stats = [
  { number: "50+", label: "Beaches Explored" },
  { number: "30+", label: "Islands Featured" },
  { number: "100+", label: "Stories Written" },
  { number: "25K+", label: "Monthly Readers" },
];

export default function StatsCounter() {
  return (
    <section className="py-20 bg-[#2B2B28]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                {stat.number}
              </p>
              <p className="text-gray-400 text-sm md:text-base tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
