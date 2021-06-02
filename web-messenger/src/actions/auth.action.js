import firebase from "firebase";

export const signUp = (data) => {
  // here i will use redux thunk middleware to allow me to return a function with the dispatch property
  return async (dispatch) => {
    const db = firebase.firestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.user.email, data.user.password)
      .then(() => {
        console.log(data);
        const currentUser = firebase.auth().currentUser;
        const name = `${data.user.firstName} ${data.user.lastName}`;
        currentUser
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            // I am good it good updated
            db.collection("users")
              .add({
                firstName: data.user.firstName,
                lastName: data.user.lastName,
                uid: data.data.user.uid,
                createdAt: new Date(),
              })
              .then(() => {
                // done
                const loggedInUser = {
                  firstName: data.user.firstName,
                  lastName: data.user.lastName,
                  uid: data.data.user.uid,
                  email: data.user.email,
                };
                localStorage.setItem("user", JSON.stringify({ loggedInUser }));
                console.log("User logged in succesfully");
              });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
