import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import { Product } from "@/src/types/product";

export const getProducts = async (): Promise<Product[]> => {
  const q = query(
    collection(db, "products"),
    where("active", "==", true)
  );

  try {
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Product, "id">),
    })); 

  } catch (error) {
    console.error("Firestore fetch failed:", error);
    throw error;
  }
};

export const getProductById = async (
  id: string
): Promise<Product | null> => {
  const docRef = doc(db, "products", id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    return null;
  }

  const product = {
    id: snapshot.id,
    ...(snapshot.data() as Omit<Product, "id">),
  };

  return product.active ? product : null;
};