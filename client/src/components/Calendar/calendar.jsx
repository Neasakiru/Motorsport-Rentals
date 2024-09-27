import React, { useState } from "react";
import "./Calendar.css";
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

function Calendar() {
  const today = new Date();

  let [currentMonth, setCurrentMonth] = useState(
    format(startOfToday(), "MMM-yyyy")
  );

  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  function prevMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

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

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const renderDays = () => {
    return (
      <>
        {daysOfWeek.map((day) => (
          <div>{day}</div>
        ))}
      </>
    );
  };

  return (
    <div className="calendar">
      {renderHeader()}
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
                ? "black"
                : !isSameDay(day, today)
                ? "white"
                : "today"
            }
            key={day.toString()}
          >
            {format(day, "d")}
          </button>
        ))}
      </div>
      <div className="days"></div>
    </div>
  );
}

export default Calendar;
