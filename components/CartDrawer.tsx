"use client";

import * as React from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import {
  addToCart,
  decreaseQuantity,
  ICart,
  removeFromCart,
} from "@/app/lib/features/cartSlice";
import Image from "next/image";
import { useAppDispatch } from "@/app/lib/hooks";

export function CartDrawer({ cart }: { cart: ICart[] }) {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const isMobile = useIsMobile();

  function handleConfirm() {
    setOpen(false);
  }
  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
      showSwipeHandle={isMobile}
      swipeDirection={isMobile ? "down" : "right"}
    >
      <DrawerTrigger
        render={
          <Button
            variant={"link"}
            className="relative flex items-center px-2 py-3 hover:no-underline"
          >
            <ShoppingCart
              aria-hidden="true"
              className="size-5 "
              opacity={0.9}
              cursor={"pointer"}
            />
            <div className="absolute top-0 right-0 text-sm">{cart.length}</div>
          </Button>
        }
      />
      <DrawerContent className={"opacity-100"}>
        <DrawerHeader>
          <DrawerTitle>Cart</DrawerTitle>
          <DrawerDescription>
            Proceed to checkout to make your order.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 scroll-fade overflow-y-auto p-4">
          <FieldGroup className="gap-2">
            {cart.map(({ product, quantity }) => (
              <FieldLabel key={product.productId} htmlFor={product.productId}>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle className="flex  gap-2">
                      <Image
                        src={product.thumbnail}
                        width={100}
                        height={100}
                        alt={product.title}
                        className="rounded-md"
                      />
                      <div className="flex flex-col gap-2">
                        <span>{product.title}</span>

                        <div className="flex items-center gap-2 ">
                          <div className="text-center">Quantity: </div>
                          <div className="grid grid-cols-3 border border-gray-400 rounded-full min-w-32 ">
                            <span className=" rounded-l-full hover:bg-gray-300 items-center flex justify-center cursor-pointer ">
                              <Plus
                                size={15}
                                onClick={() => {
                                  dispatch(
                                    addToCart({
                                      product: product,
                                      quantity: 1,
                                    }),
                                  );
                                }}
                              />
                            </span>
                            <span className="text-center">{quantity}</span>
                            <span className=" rounded-r-full hover:bg-gray-300 text-center cursor-pointer items-center flex justify-center">
                              <Minus
                                size={15}
                                onClick={() => {
                                  dispatch(
                                    decreaseQuantity({
                                      product: product,
                                      quantity: 1,
                                    }),
                                  );
                                }}
                              />
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <Button
                            variant={"destructive"}
                            className={"w-fit"}
                            onClick={() => {
                              dispatch(removeFromCart(product));
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </FieldTitle>
                  </FieldContent>
                </Field>
              </FieldLabel>
            ))}
          </FieldGroup>
        </div>
        <DrawerFooter>
          <Button onClick={handleConfirm} className="h-8.5">
            Proceed to Checkout
          </Button>
          <DrawerClose render={<Button variant="outline">Go to Cart</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
