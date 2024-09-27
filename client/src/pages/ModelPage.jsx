import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Calendar from "../components/Calendar/calendar";
import "./Models.css";

function ModelPage(props) {
  const [show, setShow] = useState(false);

  const RenderSpecs = () => {
    return (
      <div id="porsche" className="car">
        <Navbar />
        <div className="buttons">
          <button
            className={show ? "specButton hidden" : "specButton"}
            onClick={() => setShow(!show)}
          >
            Osiągi {props.name}
          </button>
        </div>
        <div className={show ? "spec" : "spec hidden"}>
          <button onClick={() => setShow(!show)}>&times</button>
        </div>
      </div>
    );
  };
  const RenderForm = () => {
    return (
      <>
        <div className="form">
          <div className="form-content"></div>
          <div className="calendar">
            <Calendar />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {RenderSpecs()}
      {RenderForm()}
    </>
  );
}

export default ModelPage;
