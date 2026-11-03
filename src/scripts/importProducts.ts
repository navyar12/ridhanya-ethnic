import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import products from "../data/products.json";

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

async function importProducts() {
  for (const product of products) {
    await setDoc(
      doc(db, "products", product.slug),
      product
    );

    console.log(`✅ Imported ${product.slug}`);
  }

  console.log("🎉 All products imported");
}

importProducts();


///D:\Navya\projs\Ethnic Website\ridhanya-ethnic>npm run import-products   ---> will import whole products.json file to firebase firestore database.