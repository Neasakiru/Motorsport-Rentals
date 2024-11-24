import AboutPage from "./pages/AboutPage";
import Cars from "./pages/Cars";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ModelPage from "./pages/ModelPage";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]); // Initialize state to hold data

  useEffect(() => {
    // Fetch data on component mount
    axios
      .get("http://localhost:8000/cars")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/about" element={<AboutPage />} />
        {data.map((e) => (
          <Route
            key={e._id}
            path={`cars/${e.url}`}
            element={
              <ModelPage
                url={e.url}
                name={e.name}
                model={e.model}
                year={e.year}
                hp={e.hp}
                acceleration={e.acceleration}
                vMax={e.vMax}
                torque={e.torque}
                drive={e.drive}
                transmission={e.transmission}
                reservationId={e.reservationId}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
