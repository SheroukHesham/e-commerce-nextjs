import { IEditProduct, ILogin, IProduct } from "@/interfaces";

export const LoginData: ILogin[] = [
  {
    name: "email",
    id: "email",
    label: "Email",
    type: "text",
    placeholder: "Enter you email",
  },
  {
    name: "password",
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];

export const EditProductData: IEditProduct[] = [
  {
    name: "documentId",
    id: "documentId",
    label: "DocumentId",
    type: "text",
    disabled: true,
  },
  {
    name: "title",
    id: "title",
    label: "Tile",
    type: "text",
  },
  {
    name: "description",
    id: "description",
    label: "Description",
    type: "text",
  },
  {
    name: "price",
    id: "price",
    label: "Price",
    type: "number",
  },
  {
    name: "stock",
    id: "stock",
    label: "Stock",
    type: "number",
  },
  {
    name: "brand",
    id: "brand",
    label: "brand",
    type: "text",
  },
  {
    name: "rating",
    id: "rating",
    label: "Rating",
    type: "number",
    disabled: true,
  },
  {
    name: "category",
    id: "category",
    label: "Category",
    type: "text",
  },
  {
    name: "thumbnails",
    id: "thumbnails",
    label: "Thumbnails",
    type: "file",
  },
];

export const defaultProduct: IProduct = {
  documentId: "",
  title: "",
  description: "",
  brand: "",
  price: 0,
  stock: 0,
  rating: 0,
  category: { title: "" },
  thumbnails: [],
};
