import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBOWCRyXfvp-XDLscIGqaq9tCdbuiLSFLQ",
  authDomain: "marketplace-roee.firebaseapp.com",
  databaseURL: "https://marketplace-roee.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
