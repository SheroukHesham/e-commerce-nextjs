"use client";
import { Trash } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { DestructiveAlert } from "./DestructiveAlert";
import {
  useGetProductsQuery,
  useRemoveProductMutation,
  useUpdateProductMutation,
} from "@/app/services/productsApi";
import { Modal } from "./Modal";
import { IProduct } from "@/interfaces";
import { Field } from "./ui/field";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { defaultProduct, EditProductData } from "@/data";
import { ChangeEvent, useEffect, useState } from "react";

//TODO: make edit category a select with the categories in backend
//TODO: make thumbnails edit also accept string input

export default function DashboardProductsTable() {
  const { isLoading: isProductsLoading, error, data } = useGetProductsQuery();
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProduct);
  const products = data?.data;

  const [removeProduct, { isLoading }] = useRemoveProductMutation();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  const onDestroy = async (id: string) => {
    try {
      await removeProduct(id);
    } catch (e) {
      throw new Error("Cannot delete product" + e);
    }
  };

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setProductToEdit((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onThumbnailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProductToEdit((prev) => {
      return { ...prev, [e.target.name]: [...prev.thumbnails, e.target.value] };
    });
  };

  const submitHandler = async () => {
    try {
      await updateProduct(productToEdit);
    } catch (error) {
      throw new Error("Error updating product" + error);
    }
  };

  const renderEditModal = () =>
    EditProductData.map((input) => {
      return (
        <Field key={input.name}>
          <Label htmlFor={input.id}>{input.label}</Label>

          {input.name === "category" ? (
            <Input
              id={input.id}
              name={input.name}
              value={productToEdit?.category.title}
              onChange={(e) => {
                setProductToEdit((prev) => {
                  return { ...prev, category: { title: e.target.value } };
                });
              }}
            />
          ) : (
            <Input
              id={input.id}
              name={input.name}
              value={
                input.name === "thumbnails" ? "" : productToEdit?.[input.name]
              }
              disabled={input.disabled ? true : false}
              type={input.type}
              onChange={
                input.name === "thumbnails"
                  ? onThumbnailChange
                  : onChangeHandler
              }
            />
          )}
        </Field>
      );
    });

  const renderProducts = products?.map((product, idx) => {
    return (
      <TableRow key={product.documentId}>
        <TableCell className="font-medium">{idx + 1}</TableCell>
        <TableCell className="font-medium">
          <Image
            alt={product.title}
            src={product.thumbnails[0]}
            width={60}
            height={60}
            className="rounded-lg"
            objectFit="contain"
          />
        </TableCell>
        <TableCell className="font-medium w-[250]">{product.title}</TableCell>
        <TableCell className="font-medium">{product.category.title}</TableCell>
        <TableCell className="font-medium">{product.stock}</TableCell>
        <TableCell className="font-medium">{product.price}</TableCell>
        <TableCell className="text-right font-medium">
          <div className="flex gap-3 justify-end">
            <Modal
              title="Edit Product"
              icon
              product={product}
              setProductToEdit={setProductToEdit}
              submitHandler={submitHandler}
              isUpdating={isUpdating}
            >
              {renderEditModal()}
            </Modal>
            <DestructiveAlert
              title="Are you sure you want to delete this product?"
              description="Deleting this product will permanently remove it from the database."
              alertTitle={<Trash size={20} />}
              icon
              onDestroy={() => onDestroy(product.documentId as string)}
              isLoading={isLoading}
            />
          </div>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent ">
          <TableHead>#Product</TableHead>
          <TableHead>Thumbnail</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{renderProducts}</TableBody>
    </Table>
  );
}
