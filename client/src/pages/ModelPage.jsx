import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Calendar from "../components/Calendar/calendar";
import "./Models.css";

function ModelPage(props) {
  const [show, setShow] = useState(false);

  const reservationId = props.reservationId;

  const RenderSpecs = () => {
    return (
      <div
        className="car"
        style={{
          backgroundImage: `url(../../content/${props.url}/Main.jpg)`,
          backgroundSize: "Cover",
        }}
      >
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
        <div className="reservation">
          <Calendar reservationId={reservationId} />
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
