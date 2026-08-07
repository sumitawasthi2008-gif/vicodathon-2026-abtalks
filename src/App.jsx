import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import ChallengeDay from "./pages/challengeday";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/day/12" element={<ChallengeDay />} />
    </Routes>
  );
}

export default App;