import React from "react";

function PlacesCard({ placesData }) {
  return (
    <div className="PlacesCard">
      <h2>{placesData.placeName}</h2>
      <h3>Submitted by {placesData.author}</h3>
      <p>
        {placesData.description.map((description, i) => (
          <p key={i}>
            <u>Details</u> <br></br>
            Address: {description.address} <br></br> Hours of Operation:{" "}
            {description.hoursofOperation} <br></br> Description:{" "}
            {description.fullDescription}
          </p>
        ))}
      </p>
    </div>
  );
}

export default PlacesCard;
