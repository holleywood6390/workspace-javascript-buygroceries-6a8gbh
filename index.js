// Import stylesheets
import './style.css';

// Import javascript files
import './js/add-element.js';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

import * as firebaseui from 'firebaseui';

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: 'AIzaSyBi1bOI4QisA0--lADD75G4UKqVTOxGVAU',
  authDomain: 'grocerylist2022-1d90c.firebaseapp.com',
  projectId: 'grocerylist2022-1d90c',
  storageBucket: 'grocerylist2022-1d90c.appspot.com',
  messagingSenderId: '894021844553',
  appId: '1:894021844553:web:f1bfb94a1eb32c7d930998',
  measurementId: 'G-YTQY6KQ5JN',
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$('#save').click(function () {
  // document.querySelectorAll('li') ==> nodelist
  // for loop to go through each nodelist
  // and then get the text content

  $(this).text('saved');
  $('li').each(function () {
    var value = $(this).text();
    console.log(value);

    firebase.firestore().collection('mylist').add({
      item: value,
    });

    /* firebase
    .firestore()
    .collection("mylist")
    .add({
      item: value//?
    });*/
  });
});
