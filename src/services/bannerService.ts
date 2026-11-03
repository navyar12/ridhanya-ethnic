import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import { Banner } from "@/src/types/hero-banner";

export const getBanners = async (): Promise<Banner[]> => {
  const q = query(
    collection(db, "hero-banners"),
    where("active", "==", true)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs
    .map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Banner, "id">),
    }))
    .sort((a, b) => a.displayOrder - b.displayOrder);
};