import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import { Category } from "@/src/types/category";

export const getCategories = async (): Promise<Category[]> => {
  const q = query(
    collection(db, "categories"),
    where("active", "==", true)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Category, "id">),
  }));
};