import ProductList from "@/components/ProductList";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category || "all";
  return (
    <div className="">
      <ProductList category={category} params="homepage" />
    </div>
  );
};

export default ProductsPage;
