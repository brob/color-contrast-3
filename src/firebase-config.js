import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyABtegjUHx16skFYq8nCtsD6Bo1fIlJ8HQ",
    authDomain: "color-contrast-checker.firebaseapp.com",
    databaseURL: "https://color-contrast-checker.firebaseio.com",
    projectId: "color-contrast-checker",
    storageBucket: "color-contrast-checker.appspot.com",
    messagingSenderId: "227900158458"
};

var fire =  firebase.initializeApp(config)
export default fire