import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/interfaces";

export async function getProducts() {
  const res = await fetch(`${process.env.BASE_URL}/products?populate=*`, {
    headers: {},
  });
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  const { data } = await res.json();
  return data;
}

export default async function Home() {
  const products: IProduct[] = await getProducts();

  const renderProducts = products?.map((product, idx) => {
    return <ProductCard product={product} key={idx} />;
  });

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center mx-auto gap-5 mt-5 px-5">
        {renderProducts}
      </div>
    </>
  );
}
