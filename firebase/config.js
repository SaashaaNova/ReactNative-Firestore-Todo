import * as firebase from 'firebase';
import '@firebase/firestore'

import { 
    APIKEY,
    AUTHDOMIAN,
    DATABASEURL,
    PROJECTID,
    STORAGEBUCKET,
    MESSAGINGSENDERID,
    APPID,
    MEASUREMENTID
 } from 'react-native-dotenv';

var firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTHDOMIAN,
    databaseURL: DATABASEURL,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGINGSENDERID,
    appId: APPID,
    measurementId: MEASUREMENTID
  };
  
  firebase.initializeApp(firebaseConfig);
 
  export default firebase;