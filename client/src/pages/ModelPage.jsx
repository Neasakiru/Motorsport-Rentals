import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Calendar from "../components/Calendar/calendar";
import "./Models.css";
import Specs from "../components/Specs/Specs";
import { useParams } from "react-router-dom";
import axios from "axios";

function ModelPage() {
  const { id } = useParams();
  const [show, setShow] = useState(false);

  const [data, setData] = useState([]); // Initialize state to hold data
  useEffect(() => {
    // Fetch data on component mount
    axios
      .get(`http://localhost:8000/cars/${id}`)
      .then((res) => {
        setData(res.data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.log(error); // Log any errors that occur during the fetch
      });
  }, []);

  return (
    <>
      <div
        className="car"
        style={{
          backgroundImage: `url(../../content/${data.url}/Main.jpg)`,
          backgroundSize: "Cover",
        }}
      >
        <Navbar />
        <div className="model">
          <span className="span-name">{data.name}</span>
          <span className="span-model">{data.model}</span>
          <span className="span-year">{data.year}</span>
        </div>
        {!show && (
          <button
            className={" button button-absolut"}
            onClick={() => setShow(true)}
          >
            - Specyfikacja -
          </button>
        )}
        {show && <Specs car={data} show={show} setShow={setShow} />}
      </div>
      <div className="reservation">
        <Calendar reservationId={data.reservationId} />
      </div>
    </>
  );
}

export default ModelPage;
