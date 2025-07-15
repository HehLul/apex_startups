import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Page1 from "./pages/Onboarding/Page1/Page1";
import Page2 from "./pages/Onboarding/Page2";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/onboarding" element={<Page1 />} />
          <Route path="/onboarding2" element={<Page2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
