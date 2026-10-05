import { IEditProduct, ILogin, INavItem, IProduct } from "@/interfaces";

export const Nav_Items: INavItem[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/" },
  { label: "Contact", href: "/" },
];

export const FOOTER_ITEMS: {
  title: string;
  links: { name: string; href: string }[];
}[] = [
  {
    title: "Links",
    links: [
      { name: "Home", href: "/" },
      { name: "Shop", href: "/shop" },
      { name: "About", href: "/" },
      { name: "Contact", href: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Payment Options", href: "/" },
      { name: "Returns", href: "/" },
      { name: "Privacy Policy", href: "/" },
    ],
  },
  {
    title: "Newsletter",
    links: [
      { name: "Enter Your Email Address", href: "/" },
      { name: "SUBSCRIBE", href: "/" },
    ],
  },
];

export const LANDING_BROWSE: { src: string[]; title: string }[] = [
  {
    title: "Dining",
    src: ["landing-dining-1", "landing-dining-2"],
  },
  {
    title: "Living",
    src: ["living_room-1", "living-room-2"],
  },
  {
    title: "Bedroom",
    src: ["bedroom-1", "bedroom-2"],
  },
];

export const LANDING_CAROUSEL: { src: string; to: string }[] = [
  {
    src: "landing-carousel-1",
    to: "",
  },
  {
    src: "landing-carousel-2",
    to: "",
  },
  {
    src: "landing-carousel-1",
    to: "",
  },
  {
    src: "landing-carousel-2",
    to: "",
  },
];

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
