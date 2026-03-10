import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { BellIcon } from "lucide-react";

const Notifications = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative">
        <div className="absolute bg-rose-500 w-6 h-6 rounded-full text-sm flex items-center justify-center bottom-2 left-2">
          <span>5</span>
        </div>
        <BellIcon size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[100%] max-w-[400px] mt-2">
        <div className="flex items-center justify-between mb-2 p-2 gap-4">
          <div className="font-bold text-lg">Notifications</div>
          <div>Mark all as read</div>
        </div>
        
      </DropdownMenuContent>
      
    </DropdownMenu>
  );
};

export default Notifications;
