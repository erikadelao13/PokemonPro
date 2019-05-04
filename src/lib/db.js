import firebase from "firebase";
let config = {
    apiKey: "AIzaSyDi-e_3EJ8TdULwG_rqYlc9cJlqv4Q02tM",
    authDomain: "pokepro-cdf9c.firebaseapp.com",
    databaseURL: "https://pokepro-cdf9c.firebaseio.com",
    projectId: "pokepro-cdf9c",
    storageBucket: "pokepro-cdf9c.appspot.com",
    messagingSenderId: "64663000518"
};
let app = firebase.initializeApp(config);
export const db = app.database();