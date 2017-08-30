#!/usr/local/bin/node

var firebase = require('firebase');

// Initialize Firebase
var firebaseConfig = require('../src/assets/authenticate.js');
firebase.initializeApp(firebaseConfig);

//console.log('Create user "' + process.argv[2] + '"? (y/n)');

firebase.auth().createUserWithEmailAndPassword(process.argv[2], process.argv[3])
.then(function () {
  console.log('User "' + process.argv[2] + '" created successfully.');
})
.catch(function (error) {
  console.log('Error creating user "' + process.argv[2] + '".\nError code: ' + error.code + '\nError Message: ' + error.message);
});
