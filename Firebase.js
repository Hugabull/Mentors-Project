
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD5ZHD3LQC_qqpk_tYPyjS-oFiu6bAjpwU",
    authDomain: "mentors-website.firebaseapp.com",
    projectId: "mentors-website",
    storageBucket: "mentors-website.appspot.com",
    messagingSenderId: "311761309184",
    appId: "1:311761309184:web:5ec3419b928bf2042ad2e5",
    measurementId: "G-GN4C6JX9PW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
