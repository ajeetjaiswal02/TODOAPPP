import firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0zxMYcMkHGKj_HmkTI4h_O_FBHrOmW78",
  authDomain: "todoapp-61856.firebaseapp.com",
  databaseURL: "https://todoapp-61856.firebaseio.com",
  projectId: "todoapp-61856",
  storageBucket: "todoapp-61856.appspot.com",
  messagingSenderId: "719474441558",
  appId: "1:719474441558:web:803a306ab8904f118e6af7",
};

class Fire {
  constructor(callback) {
    this.init(callback);
  }

  init(callback) {
    if (!firebase.app.length) {
      firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        callback(null, user);
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch((error) => {
            callback(error);
          });
      }
    });
  }
}

export default Fire;
