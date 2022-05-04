import React from "react";
import locationImg from "../images/location.png";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <img src={props.content} className="card--img"></img>
        <div className="card--info-container">
          <div className="card--info-container--header">
            <img src={locationImg} className="location-img"></img>
            <p className="location-name">{props.location}</p>
            <a href={props.map} className="location-link">
              View on Google Maps
            </a>
          </div>
          <h1>{props.name}</h1>
          <div>
            <h4>{props.date}</h4>
            <p className="description">{props.desc}</p>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
