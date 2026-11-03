import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import categories from "../data/categories.json";

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

async function importCategories() {
  for (const category of categories) {
    await setDoc(
      doc(db, "categories", category.slug),
      category
    );

    console.log(`✅ Imported ${category.slug}`);
  }

  console.log("🎉 All categories imported");
}

importCategories();


///D:\Navya\projs\Ethnic Website\ridhanya-ethnic>npm run import-categories   ---> will import whole categories.json file to firebase firestore database.