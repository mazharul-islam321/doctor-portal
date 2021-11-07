console.log();
const firebaseConfig = {
    // apiKey: "AIzaSyAVFkXNOhUfkjVSk85L1VnbNS72MN7Pn5w",
    // authDomain: "doctors-portal-9f7d3.firebaseapp.com",
    // projectId: "doctors-portal-9f7d3",
    // storageBucket: "doctors-portal-9f7d3.appspot.com",
    // messagingSenderId: "811844420907",
    // appId: "1:811844420907:web:9ea46fa7d22bca2c11316e",

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
export default firebaseConfig;
