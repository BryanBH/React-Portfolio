import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 2000);
  return (
    <div className="section container-fluid d-flex justify-content-center align-items-center">
      <div className="notfound row flex-column text-center text-light bg-dark rounded shadow-lg">
        <div className="col d-flex justify-content-center align-items-center flex-column">
          <h1>404</h1>
          <p className="fs-3">Page Not Found</p>
        </div>
      </div>
    </div>
  );
}
