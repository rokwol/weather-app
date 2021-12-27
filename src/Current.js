import React from "react";
// import "./Current.css";

export default function Current() {
  let weatherDetails = {
    location: "Toronto, Canada",
    date: "December 6, 2021",
    time: "15:02:36",
    description: "flurries",
  };
  return (
    <div className="Current">
      <div className="currentDetails">
        <h1 id="location">{weatherDetails.location}</h1>
        <ul>
          <li>{weatherDetails.date} </li>
          <li>{weatherDetails.time}</li>
          <li>{weatherDetails.description}</li>
        </ul>
      </div>
    </div>
  );
}
