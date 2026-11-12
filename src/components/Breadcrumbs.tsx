// src/components/Breadcrumbs.tsx

import Link from "next/link";

interface BreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export default function Breadcrumbs({
  items,
}: BreadcrumbsProps) {
  return (
    <nav className="mb-6 text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <span>/</span>}

            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-[#5B0D22]"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-[#5B0D22]">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}