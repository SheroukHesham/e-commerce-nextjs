import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
