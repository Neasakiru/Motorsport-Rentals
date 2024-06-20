import AboutPage from "./pages/AboutPage";
import Cars from "./pages/Cars";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import JeskoPage from "./models/JeskoPage";
import PorschePage from "./models/PorschePage";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/cars" element={<Cars />} exact />
            <Route path="/about" element={<AboutPage />} exact />
            <Route path="/login" element={<LoginPage />} exact />
            <Route path="cars/models/jesko" element={<JeskoPage />} exact />
            <Route path="cars/models/911" element={<PorschePage />} exact />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
