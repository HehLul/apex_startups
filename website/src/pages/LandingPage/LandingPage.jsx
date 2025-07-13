import "./LandingPage.css";
import Hero from "../../sections/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Portfolio from "../../sections/Portfolio/Portfolio";
import Pricing from "../../sections/Pricing/Pricing";
export default function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <Portfolio />
      <Pricing></Pricing>
    </div>
  );
}
