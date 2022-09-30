import React from "react";

export default function Flash({ message, setShow }) {
  setTimeout(() => {
    setShow(false);
  }, 5000);

  return (
    <div
      className=" alert alert-success alert-dismissible fade show mb-0"
      role="alert">
      {message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"></button>
    </div>
  );
}
