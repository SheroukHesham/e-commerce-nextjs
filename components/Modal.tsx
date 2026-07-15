import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FieldGroup } from "@/components/ui/field";
import { defaultProduct } from "@/data";
import { IProduct } from "@/interfaces";
import { DialogRootChangeEventDetails } from "@base-ui/react";
import { Pen } from "lucide-react";
import { ReactNode, useState } from "react";
import { Spinner } from "./ui/spinner";

//* Example Input Field Children
// <Field>
//   <Label htmlFor="name-1">Name</Label>
//   <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
// </Field>;

interface IProps {
  title: string;
  description?: string;
  children: ReactNode;
  icon?: boolean;
  setProductToEdit: (arg: IProduct) => void;
  product: IProduct;
  cancelText?: string;
  saveText?: string;
  submitHandler: () => void;
  isUpdating?: boolean;
}
export function Modal({
  title,
  description,
  children,
  icon,
  setProductToEdit,
  product,
  saveText = "Save",
  cancelText = "Cancel",
  submitHandler,
  isUpdating,
}: IProps) {
  const formId = "edit-product-form";
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(
        open: boolean,
        eventDetails: DialogRootChangeEventDetails,
      ) => {
        if (eventDetails.reason !== "trigger-press") {
          setProductToEdit(defaultProduct);
          setOpen(false);
        }
      }}
    >
      <form id={formId}>
        <DialogTrigger
          render={
            <Button variant={"ghost"} size={"icon-lg"}>
              {icon ? <Pen size={20} /> : "Edit"}
            </Button>
          }
          onClick={() => {
            setProductToEdit({ ...product });
            setOpen(true);
          }}
        />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          <FieldGroup>{children}</FieldGroup>
          <DialogFooter>
            <DialogClose
              onClick={() => setOpen(false)}
              render={
                <Button variant="outline" form={formId}>
                  {cancelText}
                </Button>
              }
            />

            <Button
              type="submit"
              form={formId}
              onClick={(e) => {
                e.preventDefault();
                submitHandler();
                setOpen(false);
              }}
            >
              {isUpdating ? <Spinner /> : saveText}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
