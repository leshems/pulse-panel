import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <Navbar />
          <div className="p-6">
            <SidebarTrigger className="lg:hidden mb-4" />
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};