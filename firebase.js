// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDTPMPUTnsREZlUY0ZUViNk-LM9rgtNa7I',
  authDomain: 'uspborneo-db3ba.firebaseapp.com',
  projectId: 'uspborneo-db3ba',
  storageBucket: 'uspborneo-db3ba.appspot.com',
  messagingSenderId: '451412240411',
  appId: '1:451412240411:web:e6560edde297672fb130be',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
