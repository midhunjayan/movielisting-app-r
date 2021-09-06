import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAckSk6coMRcQ_icA_52LOEDS0paQ7ztpU',
  authDomain: 'reactmovielistapp.firebaseapp.com',
  databaseURL: 'https://reactmovielistapp-default-rtdb.firebaseio.com',
  projectId: 'reactmovielistapp',
  storageBucket: 'reactmovielistapp.appspot.com',
  messagingSenderId: '112675813024',
  appId: '1:112675813024:web:4a0d0ed8ce1b5bee923bc5',
  measurementId: 'G-20S3W3J25H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const databaseRef = firebase.database().ref();
export const movieList = databaseRef.child('movieList');
export const users = databaseRef.child('users');
