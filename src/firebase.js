import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6CW9BAnEzDHT6T3KjkhQUWHStJGD6fik",
  authDomain: "ask-out-4118d.firebaseapp.com",
  projectId: "ask-out-4118d",
  storageBucket: "ask-out-4118d.appspot.com",
  messagingSenderId: "102581832971",
  appId: "1:102581832971:web:68ae35d3604d4f9026660e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
