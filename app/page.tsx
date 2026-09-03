import Homepage from "./components/Homepage";
import HeroSection from "./components/HeroSection";
import Newsletter from "./components/Newsletter";
import QuoteBlock from "./components/QuoteBlock";
import StatsCounter from "./components/StatsCounter";


export default function Home() {
  return (
    <>  
      <HeroSection/>
      <Homepage/>
      <StatsCounter/>
      <QuoteBlock/>
      <Newsletter/>
    </>
  )
}