import { collection, getDocs } from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import {Category} from "@/src/types/category";

export const getCategories = async (): Promise<Category[]> => {
  const snapshot = await getDocs(
    collection(db, "category")
  );

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Category, "id">),
  }));
};