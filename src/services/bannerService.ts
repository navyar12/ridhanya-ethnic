import { collection, getDocs } from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import { Banner } from "@/src/types/banner";

export const getBanners = async (): Promise<Banner[]> => {
  const snapshot = await getDocs(
    collection(db, "hero-banners")
  );

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Banner, "id">),
  }));
};