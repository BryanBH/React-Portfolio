import React from "react";
import "../App.css";
export default function Home() {
  function showResume() {
    // set showresume state to true and enable scroll down to the resume component
  }
  return (
    <div className="section intro container-fluid text-light d-flex  align-items-center">
      <div className="row d-flex flex-fill">
        <div className="col  offset-2">
          <h1> Hello, I'm Bryan Benjumea</h1>
          <h2> Web Developer</h2>
          <button className="btn btn-light text-muted" onClick={showResume}>
            View Resume
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
