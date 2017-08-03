#!/usr/local/bin/node

var firebase = require('firebase');

// Initialize Firebase
var firebaseConfig = require('../src/assets/authenticate.ts');
firebase.initializeApp(firebaseConfig);

console.log('Starting');

var dbRef = firebase.database().ref('/some-text');//.child('some-text');

dbRef.on('value', snapshot => console.log(snapshot.val()));

// Event types: ["value", "child_added", "child_changed", "child_removed", "child_moved"]

// oAuth authentication
