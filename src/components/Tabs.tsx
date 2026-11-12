"use client";

import { useState } from "react";

interface TabsProps {
  product: {
    description: string;
    blouse: string;
    washCare?: Array<string>;
    shippingReturns?: string[];
    shipping?: string;
  };
}

export default function Tabs( { product }: TabsProps) {

const tabs = ["Description", "Wash Care", "Shipping & Returns"];

const [activeTab, setActiveTab] = useState("Description");

return (
  <div className="mt-8">
    {/* Tab Headers */}
    <div className="flex border-b">
      {tabs.map((tab) => ( tab !== "Shipping & Returns" && (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-3 font-medium border-b-2 transition cursor-pointer ${
            activeTab === tab
              ? "border-black text-black"
              : "border-transparent text-gray-500"
          }`}
        >
          {tab}
        </button>
      )))}
    </div>

    {/* Tab Content */}
    <div className="py-5">
      {activeTab === "Description" && (
        <div className="prose max-w-none">
           <ul className="mt-2 space-y-2 text-gray-700">
              <li>{`✓ ${product.description}`}</li>
              <li>{`✓ ${product.blouse}`}</li>
            </ul>
        </div>
      )}

      {activeTab === "Wash Care" && (
        <ul className="mt-2 space-y-2 text-gray-700">
          {product.washCare?.map((care, index) => (
            <li key={index}>{`✓ ${care}`}</li>
          ))}
        </ul>
      )}

      {/* {activeTab === "Shipping & Returns" && (
        <ul className="space-y-2 text-gray-700">
          {product.shippingReturns?.map((item, index) => (
            <li key={index}>{`✓ ${item}`}</li>
          ))}
        </ul>
      )} */}

    </div>
  </div>
);
}


