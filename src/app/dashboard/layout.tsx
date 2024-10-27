 
import TopNavbar from '@/components/dashboard/TopNav';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 

  return (
    <div className="relative flex min-h-screen bg-gray-50">
     <TopNavbar/>
      <div className="flex-1">
         
        <ScrollArea className="h-[calc(100vh-4rem)] px-10 md:px-28 py-6 mt-24 ">
          {children}
        </ScrollArea>
      </div>
    </div>
  );
}