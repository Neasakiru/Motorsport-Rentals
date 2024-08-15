import Car from "../../components/Car/Car";
import "./CarNav.css";
import "../Car/Car.css";

function CarNav() {
  const cars = [
    {
      id: "Por911",
      title: "Porsche",
      content: "911",
      destination: "models/911",
      height: "600px",
      width: "550px",
      contentHeight: "15%",
    },
    {
      id: "Jesko",
      title: "Koenigsegg",
      content: "Jesko",
      destination: "models/Jesko",
      height: "600px",
      width: "550px",
      contentHeight: "15%",
    },
    {
      id: "r8",
      title: "Audi",
      content: "R8",
      destination: "models/R8",
      height: "600px",
      width: "550px",
      contentHeight: "15%",
    },
  ];

  return (
    <>
      <div className="carnav">
        <div className="filler"></div>
        <div className="title"> - DOSTĘPNE SAMOCHODY - </div>
        <div className="models">
          {cars.map((car) => (
            <Car
              id={car.id}
              title={car.title}
              content={car.content}
              destination={car.destination}
              height={car.height}
              width={car.width}
              contentHeight={car.contentHeight}
              key={car}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default CarNav;
