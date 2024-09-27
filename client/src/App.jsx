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
        setData(res.data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.log(error); // Log any errors that occur during the fetch
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
            key={e._id} // Use a unique key for each Route
            path={`cars/${e.url}`}
            element={<ModelPage name={e.name} background={e.modelBackground} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
