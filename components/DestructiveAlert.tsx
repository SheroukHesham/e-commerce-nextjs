"use client";
import { Trash2Icon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { Spinner } from "./ui/spinner";

interface IProps {
  title: string;
  description: string;
  alertTitle?: ReactNode | string;
  icon?: boolean;
  isLoading?: boolean;
  onDestroy?: () => void;
}

export function DestructiveAlert({
  description,
  title,
  alertTitle = "Delete",
  icon = false,
  onDestroy,
  isLoading,
}: IProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button variant={"destructive"} size={icon ? "icon-lg" : "default"}>
            {alertTitle}
          </Button>
        }
      />
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={() => {
              onDestroy?.();
            }}
          >
            {isLoading ? <Spinner /> : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
