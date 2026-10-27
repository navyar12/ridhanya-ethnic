import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import {Product} from "@/src/types/product";

export const getProducts = async (): Promise<Product[]> => {
  const snapshot = await getDocs(
    collection(db, "products")
  );

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Product, "id">),
  }));
};

export const getProductById = async (
  id: string
): Promise<Product | null> => {
  const docRef = doc(db, "products", id);

  const snapshot = await getDoc(docRef);

  console.log("db", db);
console.log("id", id);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<Product, "id">),
  };
};