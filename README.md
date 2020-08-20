src/firebase/firebseConfig.js


import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: '
    authDomain:
    databaseURL:
    projectId:
    storageBucket:
    messagingSenderId:
};

if (!firebase.apps.lenght) {
    firebase.initializeApp(config);
}

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
