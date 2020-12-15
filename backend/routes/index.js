const express = require("express");
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
const db = firebase.firestore();
const places = db.collection("places");

router.get("/all-places", (req, res) => {
  const placesArray = [];
  places
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        placesArray.push(doc.data());
      });
      return res.send(placesArray);
    })
    .catch(function (error) {
      console.log("Error:", error);
      return res.send(error);
    });
});

module.exports = router;
