import { Link } from "react-router-dom";
import "./Car.css";

export default function Car(props) {
  return (
      <div className="car">
        <div className="models">
          <Link id={props.car} to={props.destination}>
            <div className="overlay">
              <div className="content">
                <span>{props.name}</span>
                <span>{props.modelName}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
  );
}