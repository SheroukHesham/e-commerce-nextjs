import { IProduct } from "@/interfaces";
import ProductCard from "./ProductCard";
import PagePagination from "./PagePagination";

const PAGE_SIZE = 8;

export async function getProducts(page: number) {
  const res = await fetch(
    `${process.env.BASE_URL ?? "http://localhost:1337/api"}/products?populate=*` +
      `&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}`,
  );
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  const { data, meta } = await res.json();
  return {
    products: data as IProduct[],
    pageCount: meta.pagination.pageCount as number,
  };
}

async function DisplayProducts({ page = 1 }: { page?: number }) {
  const { products, pageCount } = await getProducts(page);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="mx-auto mt-5 grid grid-cols-1 items-center justify-between gap-x-10 gap-y-10 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
        {products?.map((product, idx) => (
          <ProductCard product={product} key={idx} />
        ))}
      </div>

      <PagePagination currentPage={page} totalPages={2} />
    </div>
  );
}

export default DisplayProducts;
