"use client";

import { logOut } from "@/app/lib/features/userSlice";
import { useAppDispatch } from "@/app/lib/hooks";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavbarAvatar() {
  const dispatch = useAppDispatch();

  const LogOut = () => {
    dispatch(logOut());
  };

  //TODO: function to get user initials from name for avatar
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="link"
            size="icon"
            className="rounded-full hover:no-underline"
          >
            <Avatar>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        }
      />
      <DropdownMenuContent className="w-32 bg-white">
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            variant="destructive"
            className={"font-semibold"}
            onClick={() => LogOut()}
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
