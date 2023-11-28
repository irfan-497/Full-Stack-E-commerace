
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD3mebBvL1tudFVOMusohdTMevQREgC4p8",
  authDomain: "e-commerace-porject.firebaseapp.com",
  projectId: "e-commerace-porject",
  storageBucket: "e-commerace-porject.appspot.com",
  messagingSenderId: "159087335173",
  appId: "1:159087335173:web:06724405e6896c76be096c",
  measurementId: "G-G6NY8M5MB4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
  