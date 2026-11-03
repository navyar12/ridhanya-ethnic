import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import banners from "../data/hero-banners.json";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function importBanners() {
  for (const banner of banners) {
    await setDoc(
      doc(db, "hero-banners", banner.id),
      banner
    );

    console.log(`✅ Imported ${banner.id}`);
  }

  console.log("🎉 All banners imported");
}

importBanners();


///D:\Navya\projs\Ethnic Website\ridhanya-ethnic>npm run import-hero-banners   ---> will import whole hero-banners.json file to firebase firestore database.