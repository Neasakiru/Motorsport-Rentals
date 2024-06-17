import { Link } from "react-router-dom";
import "./CarNav.css";

export default function CarNav() {
  return (
    <>
      <div className="carnav">
        <div className="filler"></div>
        <Link id="Porsche-911" to="models/911"></Link>
        <Link id="Jesko" to="models/jesko"></Link>
      </div>
    </>
  );
}
