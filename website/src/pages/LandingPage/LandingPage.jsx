import "./LandingPage.css";
import Hero from "../../sections/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Portfolio from "../../sections/Portfolio/Portfolio";
import Pricing from "../../sections/Pricing/Pricing";
import FAQ from "../../sections/FAQ/FAQ";
export default function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <Portfolio />
      <Pricing />
      <FAQ />
    </div>
  );
}
