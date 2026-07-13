import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { isAction } from "@reduxjs/toolkit";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "#",
      isActive: false,
    },
    {
      title: "Products",
      url: "#",
      isActive: false,
    },
    {
      title: "Categories",
      url: "#",
      isActive: false,
    },
    {
      title: "Settings",
      url: "#",
      isActive: false,
    },
  ],
};

export default function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="border-r min-h-screen w-52"
      {...props}
    >
      <SidebarHeader className="font-semibold text-primary text-lg">
        Dashboard
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            {/* <SidebarGroupLabel>{item.title}</SidebarGroupLabel> */}
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem
                  key={item.title}
                  className="hover:bg-primary hover:text-primary-foreground rounded-md py-1"
                >
                  <SidebarMenuButton
                    isActive={item.isActive}
                    render={<a href={item.url}>{item.title}</a>}
                  />
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
