import firebase from "firebase/app";
require("firebase/auth");

import { auth, firestore } from "firebase";

export const signUp = (user) => {
  // here i will use redux thunk middleware to allow me to return a function with the dispatch property
  return (dispatch) => {
    const db = firestore();
    auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
