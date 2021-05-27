import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ6y1iuahh4R1_dEfi46C90EVnPNrys4g",
  authDomain: "messenger-chatapp-753a3.firebaseapp.com",
  projectId: "messenger-chatapp-753a3",
  storageBucket: "messenger-chatapp-753a3.appspot.com",
  messagingSenderId: "890568898019",
  appId: "1:890568898019:web:bc286c9da8ad22c3c65cd6",
  measurementId: "G-0EVFXXNK42",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
