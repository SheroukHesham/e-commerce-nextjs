"use client";
import React, { useState } from "react";
import { SelectItem } from "./ui/select";
import { SingleSelect } from "./SingleSelect";

const Filter = () => {
  const [showNumber, setShowNumber] = useState<number>();

  return (
    <div className="flex items-center w-fit gap-10">
      <SingleSelect
        label="Show"
        defaultValue="16"
        onValueChange={(v) => {
          setShowNumber(Number(v));
        }}
      >
        <SelectItem value={16}>16</SelectItem>
        <SelectItem value={16}>32</SelectItem>
        <SelectItem value={16}>50</SelectItem>
      </SingleSelect>

      <SingleSelect
        label="Sort by"
        defaultValue="Default"
        onValueChange={(v) => {
          setShowNumber(Number(v));
        }}
      >
        <SelectItem value={"price"}>Price</SelectItem>
        <SelectItem value={"newest"}>Newest</SelectItem>
        <SelectItem value={"popular"}>Most Popular</SelectItem>
      </SingleSelect>
    </div>
  );
};

export default Filter;
