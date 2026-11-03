"use client";

import { getCategories } from "@/src/services/categoryService";
import { Category } from "@/src/types/category";
import { useAsyncData } from "@/src/hooks/useAsyncData";

const EMPTY_CATEGORIES: Category[] = [];

export function useCategories() {
  return useAsyncData("categories", getCategories, EMPTY_CATEGORIES);
}
