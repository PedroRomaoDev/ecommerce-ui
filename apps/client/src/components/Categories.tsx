"use client";

import {
  Briefcase,
  Footprints,
  Glasses,
  Hand,
  Shirt,
  ShoppingBasket,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="h-4 w-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="h-4 w-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="h-4 w-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="h-4 w-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="h-4 w-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="h-4 w-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="h-4 w-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="h-4 w-4" />,
    slug: "gloves",
  },
];

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category");

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="-mx-4 mb-4 grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-2 text-sm sm:-mx-6 sm:grid-cols-3 md:grid-cols-4 lg:-mx-8 lg:grid-cols-6 xl:grid-cols-8">
      {categories.map((category) => (
        <div
          className={`flex cursor-pointer items-center justify-center gap-2 rounded-md px-2 py-1 ${
            category.slug === selectedCategory ? "bg-white" : "text-gray-500"
          }`}
          key={category.name}
          onClick={() => handleChange(category.slug)}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
