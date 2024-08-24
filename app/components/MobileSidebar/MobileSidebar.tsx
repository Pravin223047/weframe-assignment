"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "../Sidebar/Sidebar";
import useClient from "@/hooks/useClient";

const MobileSideBar = () => {
  const { isMounted } = useClient();

  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden button-trigger"
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="p-0 sheet-content-enter sheet-content-enter-active"
      >
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
