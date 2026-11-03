"use client";

import { getBanners } from "@/src/services/bannerService";
import { Banner } from "@/src/types/hero-banner";
import { useAsyncData } from "@/src/hooks/useAsyncData";

const EMPTY_BANNERS: Banner[] = [];

export function useBanners() {
  return useAsyncData(
    "banners",
    async () => {
      const banners = await getBanners();

      return banners
        .filter((banner) => banner.active)
        .sort((a, b) => a.displayOrder - b.displayOrder);
    },
    EMPTY_BANNERS,
  );
}
