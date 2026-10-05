import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { INavItem } from "@/interfaces";
import Link from "next/link";

interface IProps {
  sortedNavList: INavItem[];
}

export function BreadCrumb({ sortedNavList }: IProps) {
  const renderCrumbs = () => {
    if (sortedNavList.length > 3) {
      return (
        <>
          <BreadcrumbItem>
            <BreadcrumbLink
              render={
                <a href={sortedNavList[0].href}>{sortedNavList[0].label}</a>
              }
            />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button size="icon-sm" variant="ghost">
                    <BreadcrumbEllipsis />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                }
              />
              <DropdownMenuContent align="start">
                <DropdownMenuGroup>
                  {sortedNavList.map((item, idx) => {
                    return (
                      (idx !== 0 || idx !== sortedNavList.length - 1) && (
                        <DropdownMenuItem key={idx}>
                          <Link href={item.href}>{item.label}</Link>
                        </DropdownMenuItem>
                      )
                    );
                  })}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              render={
                <a href={sortedNavList[sortedNavList.length - 1].href}>
                  {sortedNavList[sortedNavList.length - 1].label}
                </a>
              }
            />
          </BreadcrumbItem>
        </>
      );
    } else {
      return sortedNavList.map((item, idx) => {
        return (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink
                render={
                  <a
                    href={item.href}
                    className={`${idx !== sortedNavList.length - 1 && "font-medium"} text-[16px]`}
                  >
                    {item.label}
                  </a>
                }
              />
            </BreadcrumbItem>
            {idx !== sortedNavList.length - 1 && <BreadcrumbSeparator />}
          </>
        );
      });
    }
  };
  return (
    <Breadcrumb>
      <BreadcrumbList>{renderCrumbs()}</BreadcrumbList>
    </Breadcrumb>
  );
}
