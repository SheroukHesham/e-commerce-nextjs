"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { LoginData } from "@/data";
import Link from "next/link";
import { loginSchema } from "@/validations";
import { useLoginMutation } from "../services/loginApi";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { addUser } from "../lib/features/userSlice";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type IFormInput = {
  email: string;
  password: string;
};

export default function Login() {
  const token = useAppSelector((state) => state.user.jwt);
  const router = useRouter();
  const [login, { data, error, isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    if (token) {
      router.back();
    }
  }, [token, router]);

  const onSubmit = async (formData: IFormInput) => {
    console.log({
      identifier: formData.email,
      password: formData.password,
    });
    try {
      const result = await login({
        identifier: formData.email,
        password: formData.password,
      }).unwrap();
      console.log("Login success:", result);
      dispatch(addUser({ jwt: result.jwt }));

      // e.g. redirect, store token, etc.
    } catch (err) {
      toast("Invalid Email or Password", {
        style: {
          color: "whitesmoke",
          backgroundColor: "#c20003",
          fontWeight: "bold",
        },
      });
    }
  };

  const renderFormData = LoginData.map((input, idx) => {
    return (
      <Field key={idx} className="mb-3">
        <FieldLabel htmlFor="form-name" className="text-primary">
          {input.label} <span className="text-destructive">*</span>
        </FieldLabel>
        <Input
          {...register(input.name)}
          id={input.id}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          className={`outline-transparent `}
          aria-invalid={!!errors[input.name]}
        />
        <FieldDescription className="text-destructive font-semibold ">
          {errors[input.name]?.message}
        </FieldDescription>
      </Field>
    );
  });

  if (token) {
    return null;
  }

  return (
    <div className="w-full flex flex-1 justify-center items-center gap-5">
      <form
        className="w-full max-w-sm min-h-full border border-gray-400 p-10 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="flex justify-center text-xl tracking-tight font-semibold text-primary mb-15">
          Login to your Account
        </span>
        <FieldGroup className="flex flex-col ">
          {renderFormData}

          <Field
            orientation="horizontal"
            className="w-full flex justify-center "
          >
            <Button type="submit" size={"full"} disabled={isLoading}>
              {isLoading ? <Spinner /> : "Login"}
            </Button>
          </Field>
          <div className="flex gap-1 justify-center items-center text-sm">
            <span className="tracking-tight text-gray-500">No Account? </span>
            <Link
              href={"/register"}
              className="text-[#ea9800] font-semibold underline underline-offset-3 "
            >
              Register now
            </Link>
            <Toaster />
          </div>
        </FieldGroup>
      </form>
    </div>
  );
}
