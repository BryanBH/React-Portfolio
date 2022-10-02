import React from "react";
import "../App.css";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();

  if (pathname === "/") return null;

  return (
    <footer className=" footer-adjust container-fluid text-center pt-1 bg-light text-muted ">
      &copy; 2022 BRYAN BENJUMEA. ALL RIGHTS RESERVED
    </footer>
  );
}
