import { Link } from "react-router-dom";
import Car from "../../components/Car/Car"
import "./CarNav.css";
import "../Car/Car.css";

function CarNav(props) {
  return (
    <>
      <div className="carnav">
        <div className="filler"></div>
        <div className="title"> - DOSTĘPNE SAMOCHODY - </div>
        <div className="models">
          <Car id="Por911" title="Porsche" content="911" destination="models/911" height="600px" width="550px" contentHeight="15%"/>
          <Car id="Jesko" title="Koenigsegg" content="Jesko" destination="models/Jesko" height="600px" width="550px" contentHeight="15%"/>
          <Car id="r8" title="Audi" content="R8" destination="models/R8" height="600px" width="550px" contentHeight="15%"/>
        </div>
      </div>
    </>
  );
}
export default CarNav;
