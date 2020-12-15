// Backend Application for Final Project
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// Require Firebase
const firebase = require("firebase");
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "final-project-fall-2020-49de6.firebaseapp.com",
  projectId: "final-project-fall-2020-49de6",
  storageBucket: "final-project-fall-2020-49de6.appspot.com",
  messagingSenderId: "82042070542",
  appId: "1:82042070542:web:e08451424e516e3361fe5f",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index.js");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", indexRoute);
app.listen(port, () => console.log(`Backend is running at port:${port}`));
