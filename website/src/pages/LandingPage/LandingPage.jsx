import "./LandingPage.css";
import Hero from "../../sections/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Portfolio from "../../sections/Portfolio/Portfolio";
export default function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <Portfolio />
    </div>
  );
}
