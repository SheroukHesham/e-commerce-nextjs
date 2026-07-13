import { ILogin } from "@/interfaces";

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
