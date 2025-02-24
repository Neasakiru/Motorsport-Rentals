import "../../pages/Models.css";
export default function Specs({ car, setShow }) {
  return (
    <>
      <div className="spec">
        <h2>- Specyfikacja -</h2>
        <div className="content">
          <div>
            <span className="placeholder">Moc: </span>
            <span>{car.hp}</span>
          </div>
          <div>
            <span className="placeholder">Moment Obrotowy: </span>
            <span>{car.torque}</span>
          </div>
          <div>
            <span className="placeholder">Przyspieszenie 0-100km/h:</span>
            <span>{car.acceleration}</span>
          </div>
          <div>
            <span className="placeholder">Prędkość Maksymalna:</span>
            <span>{car.vMax}</span>
          </div>
          <div>
            <span className="placeholder">Skrzynia Biegów: </span>
            <span>{car.transmission}</span>
          </div>
          <div>
            <span className="placeholder">Napęd: </span>
            <span>{car.drive}</span>
          </div>
        </div>
        <div className="button-spacer">
          <button className="button" onClick={() => setShow(false)}>
            Zamknij
          </button>
        </div>
      </div>
      ;
    </>
  );
}
