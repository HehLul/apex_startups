import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Page1 from "./pages/Onboarding/Page1";
import Page2 from "./pages/Onboarding/Page2";
import Page3 from "./pages/Onboarding/Page3";
import SuccessPage from "./pages/Onboarding/SuccessPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/getstarted" element={<Page1 />} />
          <Route path="/projectdetails" element={<Page2 />} />
          <Route path="/onboard" element={<Page3 />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
