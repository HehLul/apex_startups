import "./LandingPage.css";
import Hero from "../../sections/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
export default function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
    </div>
  );
}
