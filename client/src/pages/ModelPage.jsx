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
        <div className="model">
          <span className="span-name">{props.name}</span>
          <span className="span-model">{props.model}</span>
          <span className="span-year">{props.year}</span>
        </div>
        <button
          className={show ? "button hidden" : "button button-absolut"}
          onClick={() => setShow(!show)}
        >
          Specyfikacja
        </button>
        <div className={show ? "spec" : "spec hidden"}>
          <h2>-Specyfikacja-</h2>
          <div className="content">
            <div>
              <span className="placeholder">Moc: </span>
              <span>{props.hp}</span>
            </div>
            <div>
              <span className="placeholder">Moment Obrotowy: </span>
              <span>{props.torque}</span>
            </div>
            <div>
              <span className="placeholder">Przyspieszenie 0-100km/h:</span>
              <span>{props.acceleration}</span>
            </div>
            <div>
              <span className="placeholder">Prędkość Maksymalna:</span>
              <span>{props.vMax}</span>
            </div>
            <div>
              <span className="placeholder">Skrzynia Biegów: </span>
              <span>{props.transmission}</span>
            </div>
            <div>
              <span className="placeholder">Napęd: </span>
              <span>{props.drive}</span>
            </div>
          </div>
          <div className="button-spacer">
            <button className="button" onClick={() => setShow(!show)}>
              Zamknij
            </button>
          </div>
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
