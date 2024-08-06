import { Link } from "react-router-dom";
import Car from "../../components/Car/Car"
import "./CarNav.css";
import "../Car/Car.css";

export default function CarNav(props) {
  return (
    <>
      <div className="carnav">
        <div className="filler"></div>
        <div className="title"> - DOSTĘPNE SAMOCHODY - </div>
        <div className="models">
          <Car car="Por911" name="Porsche" modelName="911" destination="models/911"/>
          <Car car="Jesko" name="Koenigsegg" modelName="Jesko" destination="models/Jesko"/>
          <Car car="r8" name="Audi" modelName="R8" />
        </div>
      </div>
    </>
  );
}
