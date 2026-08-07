import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Stats from "../components/stats";
import Features from "../components/features";
import HowItWorks from "../components/howitworks";
import CTA from "../components/cta";
import Footer from "../components/footer";

function Home() {
  return (
    <>
<Navbar />
<Hero />
<Stats />
<Features />
<HowItWorks />
<CTA />
<Footer />
    </>
  );
}

export default Home;