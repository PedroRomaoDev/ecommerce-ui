import Image from "next/image";

import ProductList from "@/components/ProductList";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category || "all";
  return (
    <div className="">
      <div className="relative mb-12 aspect-[3/1]">
        <Image src="/featured.png" alt="Featured Product" fill />
      </div>
      <ProductList category={category} params="products" />
    </div>
  );
};

export default Homepage;
