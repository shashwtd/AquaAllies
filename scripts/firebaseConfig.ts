import { initializeApp } from "firebase/app";
import { getFirestore, doc, addDoc, collection } from "firebase/firestore";
import UAParser from "ua-parser-js";

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);
const db = getFirestore();

interface GeoLocationData {
  country: string;
  region: string;
  city: string;
  lat: number;
  lon: number;
  timezone: string;
  ip: string;
}

async function getGeoLocationData(): Promise<GeoLocationData> {
  const response = await fetch(`http://ip-api.com/json/?fields=61439`);
  const data = await response.json();
  const { country, regionName: region, city, lat, lon, timezone, query: ip } = data;
  return {
    country,
    region,
    city,
    lat,
    lon,
    timezone,
    ip,
  };
}

const parser = new UAParser();
export async function uploadRating(rating: number) {
  const userAgent = parser.getResult();
  const name = prompt("Enter your name: ");
  const geoLocationData = await getGeoLocationData();
  await addDoc(collection(db, "ratings"), {
    name: name,
    rating: rating,
    timestamp: Date.now(),
    userAgent: {
      browser: userAgent.browser.name || "Unknown",
      engine: userAgent.engine.name || "Unknown",
      os: userAgent.os.name || "Unknown",
      device: userAgent.device.type || "Unknown",
      cpu: userAgent.cpu.architecture || "Unknown",
    },
    userData: geoLocationData,
  });
  console.log(`Rating added -> ${rating}★ by ${name}`);
}
