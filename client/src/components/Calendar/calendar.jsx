import React, { useState, useEffect } from "react";
import axios from "axios";
import "./calendar.css";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameMonth,
  parse,
  startOfToday,
  startOfWeek,
  endOfWeek,
  isSameDay,
} from "date-fns";

export default function Calendar(props) {
  const firstName = document.querySelector(".first-name");
  const lastName = document.querySelector(".last-name");
  const phoneNumber = document.querySelector(".phone-number");
  const dateFrom = document.querySelector(".date-from");
  const dateTo = document.querySelector(".date-to");
  const reservationId = props.reservationId;
  const today = new Date();
  let reservedDays = [];
  const [data, setData] = useState([]);

  const getReservations = () => {
    axios
      .get("http://localhost:8000/reservations")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getReservations();
  }, []);

  function sendPost() {
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const phoneNumberValue = phoneNumber.value;
    const dateFromValue = format(
      parse(dateFrom.value, "yyyy-MM-d", new Date()),
      "yyyy-MM-dd"
    );
    const dateToValue = format(
      parse(dateTo.value, "yyyy-MM-d", new Date()),
      "yyyy-MM-dd"
    );

    axios
      .post("http://localhost:8000/reservations", {
        firstName: firstNameValue,
        lastName: lastNameValue,
        phoneNumber: phoneNumberValue,
        reservationId: reservationId,
        startDate: dateFromValue,
        endDate: dateToValue,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  data.forEach((e) => {
    if (e.reservationId === reservationId) {
      eachDayOfInterval({ start: e.startDate, end: e.endDate }).forEach((e) => {
        reservedDays.push(e.toString());
      });
    }
  });

  let [currentMonth, setCurrentMonth] = useState(
    format(startOfToday(), "MMM-yyyy")
  );

  //First day of the current month
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  //Creates an array for each day of the given interval(startDate, endDate)
  let days = eachDayOfInterval({
    //First day of the week of the first day of current month
    start: startOfWeek(firstDayCurrentMonth),
    //Last day of the week of the last day of the current month
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  //Substract one month from the first day of this month
  function prevMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  //Add one month to the first day of this month
  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function pickDate(e) {
    if (dateFrom.value === null || dateFrom.value === "") {
      dateFrom.value = format(e, "yyyy-MM-dd");
    } else {
      if (e < parse(dateFrom.value, "yyyy-MM-d", new Date())) {
        dateFrom.value = format(e, "yyyy-MM-dd");
        dateTo.value = null;
      } else {
        if (dateTo.value === null || dateTo.value === "") {
          dateTo.value = format(e, "yyyy-MM-dd");
        } else {
          dateFrom.value = format(e, "yyyy-MM-dd");
          dateTo.value = null;
        }
      }
    }
  }

  const renderForm = () => {
    return (
      <>
        <div>- Rezerwacja -</div>
        <form>
          <label>Imię</label>
          <input type="text" className="first-name"></input>
          <label>Nazwisko</label>
          <input type="text" className="last-name"></input>
          <label>Telefon</label>
          <input type="text" className="phone-number"></input>
          <label>Data od</label>
          <input type="text" className="date-from"></input>
          <label>Data do</label>
          <input type="text" className="date-to"></input>
          <div>
            <button onClick={() => sendPost()}>Rezerwuj</button>
          </div>
        </form>
      </>
    );
  };

  const renderCalendar = () => {
    return (
      <>
        <div className="header">
          <h2>{format(firstDayCurrentMonth, "MMMM yyyy")}</h2>
          <button onClick={prevMonth}>Prev</button>
          <button onClick={nextMonth}>Next</button>
        </div>
        <div className="days">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
          {days.map((day) => (
            <button
              onClick={() => pickDate(day)}
              className={
                !isSameMonth(day, firstDayCurrentMonth)
                  ? "black day"
                  : reservedDays.includes(day.toString())
                  ? !isSameDay(day, today)
                    ? "blue day"
                    : "purple day"
                  : !isSameDay(day, today)
                  ? "white day"
                  : "today day"
              }
              key={day.toString()}
            >
              {format(day, "d")}
            </button>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="calendar">
      <div className="form">{renderForm()}</div>
      <div className="datepicker">{renderCalendar()}</div>
    </div>
  );
}
