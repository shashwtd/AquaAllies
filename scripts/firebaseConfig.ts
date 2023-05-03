import { initializeApp } from "firebase/app";
import { getFirestore, doc, addDoc, collection } from "firebase/firestore";
import UAParser from "ua-parser-js";

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: "aqua-allies.firebaseapp.com",
  projectId: "aqua-allies",
  storageBucket: "aqua-allies.appspot.com",
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);
const db = getFirestore();

var geoData: any;
var userAgent: any;
var name: string = "Anonymous";
var user: any;
const startTime = Date.now();

async function getGeoLocationData() {
  const response = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=10b6cd3d0cf84c1aab80505ff8bd233f`
  );
  const data = await response.json();
  return data;
}

function timeElapsed(): number {
  return Math.round((Date.now() - startTime) / 1000);
}

const parser = new UAParser();
export async function uploadRating(rating: number) {
  name = prompt("Enter your name: ") || "Anonymous";
  await addDoc(collection(db, "ratings"), {
    name: name,
    rating: rating,
    elapsedTime: timeElapsed(),
    userRef: user,
    time: {
      timestamp: Date.now(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
  });
  console.log(`Rating added -> ${rating}★ by ${name}`);
}

export async function newVisitor() {
  userAgent = parser.getResult();
  geoData = await getGeoLocationData();
  user = await addDoc(collection(db, "users"), {
    time: {
      timestamp: Date.now(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    browser: userAgent.browser.name || "Unknown",
    os: userAgent.os.name || "Unknown",
    device: userAgent.device.type || "Unknown",
    geoData: geoData,
  });
}
