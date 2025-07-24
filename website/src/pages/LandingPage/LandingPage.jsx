import "./LandingPage.css";
import Hero from "../../sections/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Portfolio from "../../sections/Portfolio/Portfolio";
import Pricing from "../../sections/Pricing/Pricing";
import FAQ from "../../sections/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
