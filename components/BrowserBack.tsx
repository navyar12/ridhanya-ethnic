"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BrowserBackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-6 flex items-center gap-2 text-[#6d0c22]"
    >
      <ArrowLeft size={20} />
      Back
    </button>
  );
}