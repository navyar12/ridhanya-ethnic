"use client";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="h-12 w-12 rounded-full border-4 border-[#6d0c22] border-t-transparent animate-spin" />
    </div>
  );
}