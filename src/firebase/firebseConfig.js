import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyC9vrdGyvy_Qixfap_wVxt6f2HMni8gWNk',
    authDomain: 'oaadmin-f0aa2.firebaseapp.com',
    databaseURL: 'https://oaadmin-f0aa2.firebaseio.com',
    projectId: 'oaadmin-f0aa2',
    storageBucket: 'oaadmin-f0aa2.appspot.com',
    messagingSenderId: '170414592713',
};

if (!firebase.apps.lenght) {
    firebase.initializeApp(config);
}

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
