import Button from "../Button/Button";
import "./CarNav.css";
import "../Button/Button.css";
import axios from "axios";
import { useState, useEffect } from "react";

function CarNav() {
  const [data, setData] = useState([]); // Initialize state to hold data
  useEffect(() => {
    // Fetch data on component mount
    axios
      .get("http://localhost:8000/cars")
      .then((res) => {
        setData(res.data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.log(error); // Log any errors that occur during the fetch
      });
  }, []);

  return (
    <>
      <div className="carnav">
        <div className="filler"></div>
        <div className="title"> - DOSTĘPNE SAMOCHODY - </div>
        <div className="models">
          {data.map((car) => (
            <Button
              id={car.reservationId}
              title={car.name}
              content={car.model}
              destination={car.url}
              height={"600px"}
              width={"550px"}
              contentHeight={"15%"}
              key={car.reservationId}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default CarNav;
