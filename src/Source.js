import React from "react";
import "./Source.css";

export default function Source() {
  return (
    <div className="Source">
      <small className="openSource">
        <a
          href="https://github.com/rokwol/vanilla-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>
        by Roksolana Woloszyn and hosted on
        <a
          href="https://adoring-borg-c7614f.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify.
        </a>
      </small>
    </div>
  );
}
