export default function Wishlist() {
  return (
    <main className="min-h-screen bg-[#F8F4ED] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-[#5B0D22]">
          Sign Up or Login to Your Account to add to wishlist
        </h1>

        const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

      </div>
    </main>
  );
}