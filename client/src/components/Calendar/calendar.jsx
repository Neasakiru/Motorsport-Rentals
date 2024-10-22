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

export default function Calendar() {
  const today = new Date();
  let reservedDays = [];
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data on component mount
    axios
      .get("http://localhost:8000/reservations")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  data.forEach((e) => {
    if (e.reservationId === "K1") {
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

  // Check fetched data
  // console.log(reservedDays);

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

  const renderHeader = () => {
    return (
      <div className="header">
        <h2>{format(firstDayCurrentMonth, "MMMM yyyy")}</h2>
        <button onClick={prevMonth}>Prev</button>
        <button onClick={nextMonth}>Next</button>
      </div>
    );
  };

  const renderDays = () => {
    return (
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
    );
  };

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
    </div>
  );
}
