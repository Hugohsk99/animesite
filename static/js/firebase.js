// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8mKH5NGQWqf3Gkml06iC3-gJ5znRfRfU",
  authDomain: "animesensor.firebaseapp.com",
  projectId: "animesensor",
  storageBucket: "animesensor.appspot.com",
  messagingSenderId: "981113787973",
  appId: "1:981113787973:web:5b9a02bb80a11bf08f752c",
  measurementId: "G-6B9YTRYG3C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
