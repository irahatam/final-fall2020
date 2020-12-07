import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [sampleAPIData, setSampleAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000`)
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
      <h1>Hello</h1>
      {sampleAPIData.map((item, i) => (
        <div key={i}>
          <p> Name: {item.name}</p>
          <p> Role: {item.role} </p>
          <p> Pet Name: {item.pet} </p>
        </div>
      ))}
    </div>
  );
}

export default Home;
