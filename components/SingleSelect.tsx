import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ReactNode } from "react";

interface IProps {
  label?: string;
  placeholder?: string;
  children: ReactNode;
  value?: string;
  onValueChange: (value: string | null) => void;
  defaultValue?: string;
}

export function SingleSelect({
  label,
  placeholder,
  children,
  value,
  onValueChange,
  defaultValue,
}: IProps) {
  return (
    <Field className="w-full max-w-3xs gap-5 flex flex-row">
      {label && (
        <FieldLabel className="text-[20px] w-fit text-nowrap">
          {label}
        </FieldLabel>
      )}
      <Select
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        value={value}
      >
        <div className="w-70 ">
          <SelectTrigger className="cursor-pointer bg-white">
            <SelectValue
              placeholder={
                placeholder ? placeholder : `Choose ${label?.toLowerCase()}`
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>{children}</SelectGroup>
          </SelectContent>
        </div>
      </Select>
    </Field>
  );
}
