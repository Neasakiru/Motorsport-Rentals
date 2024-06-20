import { Link } from "react-router-dom";
import "./CarNav.css";

export default function CarNav() {
  return (
    <>
      <div className="carnav">
        <div className="filler"></div>
        <div className="models">
          <Link id="Porsche-911" to="models/911">
            <div className="overlay">
              <div className="content">
                <span>PORSCHE</span>
                <span>Carrera 911</span>
              </div>
            </div>
          </Link>
          <Link id="Jesko" to="models/jesko">
            <div className="overlay">
              <div className="content">
                <span>KOENIGSEGG</span>
                <span>Jesko</span>
              </div>
            </div>
          </Link>
          <Link id="r8" to="models/jesko">
            <div className="overlay">
              <div className="content">
                <span>AUDI</span>
                <span>R8</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
