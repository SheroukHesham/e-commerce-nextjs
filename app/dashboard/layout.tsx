import DashboardSidebar from "@/components/DashboardSidebar";
import Navbar from "@/components/Navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <div className="w-full flex justify-center items-center">
          <Navbar className={"border-b"} />
        </div>

        <div className="flex flex-col w-full px-5">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default layout;
