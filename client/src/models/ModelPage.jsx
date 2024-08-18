import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Models.css";

function ModelPage() {
  const [show, setShow] = useState(false);

  const RenderSpecs = () => {
    return(
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
    )
  }
  const RenderForm = () => {
    return (
    <>
      <div></div>
    </>)
  }

  return (
    <>
      {RenderSpecs()}
      {RenderForm()}
    </>
    
  );
}

export default ModelPage;
