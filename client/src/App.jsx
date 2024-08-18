import AboutPage from "./pages/AboutPage";
import Cars from "./pages/Cars";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ModelPage from "./pages/ModelPage";

function App() {
  const RenderRoutes = () => {
    return (
      <>
        <Route
          path="cars/models/911"
          element={<ModelPage name="Porsche" />}
          exact
        />
        <Route
          path="cars/models/Jesko"
          element={<ModelPage name="Jesko" />}
          exact
        />
        <Route
          path="cars/models/r8"
          element={<ModelPage name="Audi" />}
          exact
        />
      </>
    );
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/cars" element={<Cars />} exact />
          <Route path="/about" element={<AboutPage />} exact />
          {RenderRoutes()}
        </Routes>
      </Router>
    </>
  );
}

export default App;
