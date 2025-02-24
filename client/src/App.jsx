import AboutPage from "./pages/AboutPage";
import Cars from "./pages/Cars";
import HomePage from "./pages/HomePage";
import ModelPage from "./pages/ModelPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="cars/:id" element={<ModelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
