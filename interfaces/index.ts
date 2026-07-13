export interface IProduct {
  documentId: string;
  title: string;
  brand: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  thumbnails: string[];
  category: {
    title: string;
  };
}

export interface ILogin {
  label: string;
  name: "email" | "password";
  id: string;
  type: string;
  placeholder: string;
}

export interface IUser {
  jwt: string;
  user: {
    documentId: string;
    username: string;
    email: string;
  };
}
