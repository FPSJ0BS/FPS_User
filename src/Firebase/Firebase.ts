// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCGHVHMj2okOay5h_SN5x0MVICBKqcYdg0",
//   authDomain: "fir-app-778fa.firebaseapp.com",
//   databaseURL:
//     "https://fir-app-778fa-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "fir-app-778fa",
//   storageBucket: "fir-app-778fa.appspot.com",
//   messagingSenderId: "82962592352",
//   appId: "1:82962592352:web:5cbd08a8729c8164cec905",
//   measurementId: "G-2RGX8997T9",
// };
// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// export const messaging = getMessaging(app);

import { initializeApp } from "firebase/app";
import { getToken, getMessaging, isSupported } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCGHVHMj2okOay5h_SN5x0MVICBKqcYdg0",
  authDomain: "fir-app-778fa.firebaseapp.com",
  databaseURL:
    "https://fir-app-778fa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-app-778fa",
  storageBucket: "fir-app-778fa.appspot.com",
  messagingSenderId: "82962592352",
  appId: "1:82962592352:web:5cbd08a8729c8164cec905",
  measurementId: "G-2RGX8997T9",
};

const UrlFirebaseConfig = new URLSearchParams(
  {
    apiKey: "AIzaSyCGHVHMj2okOay5h_SN5x0MVICBKqcYdg0",
    authDomain: "fir-app-778fa.firebaseapp.com",
    databaseURL:
      "https://fir-app-778fa-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-app-778fa",
    storageBucket: "fir-app-778fa.appspot.com",
    messagingSenderId: "82962592352",
    appId: "1:82962592352:web:5cbd08a8729c8164cec905",
    measurementId: "G-2RGX8997T9",
  }.toString()
);

export const swUrl = `/firebase-messaging-sw.js?${UrlFirebaseConfig}`;

export const firebaseApp = initializeApp(firebaseConfig);

export const messaging = (async () => {
  try {
    const isSupportedBrowser = await isSupported();
    if (isSupportedBrowser) {
      return getMessaging(firebaseApp);
    }
    console.log("Firebase is not supported in this browser");
    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
})();

export const getOrRegisterServiceWorker = () => {
  if (
    "serviceWorker" in navigator &&
    typeof window.navigator.serviceWorker !== "undefined"
  ) {
    return window.navigator.serviceWorker
      .getRegistration("/firebase-push-notification-scope")
      .then((serviceWorker) => {
        if (serviceWorker) return serviceWorker;
        return window.navigator.serviceWorker.register(
          "/firebase-messaging-sw.js",
          {
            scope: "/firebase-push-notification-scope",
          }
        );
      });
  }
  throw new Error("The browser doesn`t support service worker.");
};

export const getFirebaseToken = async () => {
  try {
    const messagingResolve = await messaging;
    if (messagingResolve) {
      return getOrRegisterServiceWorker().then((serviceWorkerRegistration) => {
        return Promise.resolve(
          getToken(messagingResolve, {
            vapidKey:
              "BENKiCyNrL0L6FNZQSLB17mgbZFsTSYDWxVGmmYnQTiG2xNyx-q7Fsj-Ie0LakyzhEijfV9Tna9EBW420K0twGQ",
            serviceWorkerRegistration,
          })
        );
      });
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }
};
