import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Navbar = () => {
  return (
    <div className="h-16 border-b px-4 flex items-center justify-between bg-white">
      <div className="flex items-center gap-2 flex-1 max-w-xl">
        <Search className="w-4 h-4 text-muted-foreground" />
        <Input 
          placeholder="Search..." 
          className="border-none shadow-none focus-visible:ring-0 bg-muted/30 w-full max-w-md"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
        </button>
        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-medium flex items-center justify-center">
          JS
        </div>
      </div>
    </div>
  );
};