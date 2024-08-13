import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Models.css";

function PorschePage() {
  const [show, setShow] = useState(false);

  return (
    <div id="porsche" className="car">
      <Navbar />
      <div className="buttons">
        <button
          className={show ? "specButton hidden" : "specButton"}
          onClick={() => setShow(!show)}
        >
          Osiągi
        </button>
      </div>
      <div className={show ? "spec" : "spec hidden"}>
        <button onClick={() => setShow(!show)}>&times</button>
      </div>
    </div>
  );
}

export default PorschePage;
