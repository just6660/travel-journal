import React from "react";
import globeImg from "../images/globe.png";

export default function Header() {
  return (
    <div className="header">
      <img src={globeImg} className="header--img"></img>
      <h1 className="header--title">my travel journal.</h1>
    </div>
  );
}
