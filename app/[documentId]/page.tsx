import { IProduct } from "@/interfaces";
import ProductDetailsCard from "@/components/ProductDetailsCard";

export async function getProduct(documentId: string) {
  const res = await fetch(
    `${process.env.BASE_URL}/products/${documentId}?populate=*`,
  );

  if (!res.ok) {
    throw new Error("Error fetching product.");
  }
  const { data } = await res.json();
  return data;
}

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) => {
  const { documentId } = await params;
  const product: IProduct = await getProduct(documentId);

  return (
    <div className="w-full flex justify-center items-center mt-10 tracking-tight ">
      <div className="max-w-6xl flex items-center justify-center">
        <ProductDetailsCard product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
