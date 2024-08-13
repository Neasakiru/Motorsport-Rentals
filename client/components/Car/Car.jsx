import { Link } from "react-router-dom";
import "./Car.css";

export default function Car(props) {
  return (
          <Link id={props.id} className ="button-link" to={props.destination} style={{width: props.width, height: props.height }}>
            <div className="overlay">
              <div className="content" style={{height: props.contentHeight}}>
                <span>{props.title}</span>
                <span>{props.content}</span>
              </div>
            </div>
          </Link>
  );
}