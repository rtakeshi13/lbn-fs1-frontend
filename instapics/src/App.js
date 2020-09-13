import React, { useState } from "react";
import Router from "./router";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppContext from "./contexts/AppContext";

import firebase from "@firebase/app";
import "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBj-H20fkHX_V-etaOFvaBzJIt4kpsPfhQ",
  authDomain: "labepics.firebaseapp.com",
  databaseURL: "https://labepics.firebaseio.com",
  projectId: "labepics",
  storageBucket: "labepics.appspot.com",
  messagingSenderId: "846846739770",
  appId: "1:846846739770:web:a3642c1788e038c29dfc03",
  measurementId: "G-SJQERS1RSF",
};
export const storageRef = firebase
  .initializeApp(firebaseConfig)
  .storage()
  .ref();

function App() {
  const [image, setImage] = useState({ localURL: "" });

  return (
    <AppContext.Provider value={{ image, setImage }}>
      <CssBaseline />
      <Router />
    </AppContext.Provider>
  );
}

export default App;
