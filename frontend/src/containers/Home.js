import React, { useState, useEffect } from "react";
import axios from "axios";
import PlacesCard from "../components/PlacesCard";

function Home() {
  const [sampleAPIData, setSampleAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://whispering-fjord-38058.herokuapp.com/all-places`)
      .then(function (response) {
        if (response.data) {
          setSampleAPIData(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  console.log({ sampleAPIData });

  return (
    <div>
      <h1>All Places</h1>
      {sampleAPIData.map((places, i) => (
        <PlacesCard placesData={places} key={i} />
      ))}
    </div>
  );
}

export default Home;
