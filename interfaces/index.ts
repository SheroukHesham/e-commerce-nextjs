export interface IProduct {
  documentId?: string;
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

interface IForm {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
}

export interface ILogin extends IForm {
  name: "email" | "password";
}

export interface IUser {
  jwt: string;
  user: {
    documentId: string;
    username: string;
    email: string;
  };
}

export interface IEditProduct extends IForm {
  name: keyof IProduct;
  disabled?: boolean;
}
