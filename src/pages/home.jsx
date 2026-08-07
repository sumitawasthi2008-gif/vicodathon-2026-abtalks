import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Stats from "../components/stats";
import Features from "../components/features";
import HowItWorks from "../components/howitworks";
import CTA from "../components/cta";

function Home() {
  return (
    <>
<Navbar />
<Hero />
<Stats />
<Features />
<HowItWorks />
<CTA />
    </>
  );
}

export default Home;