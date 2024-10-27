'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Loader2, MenuIcon } from 'lucide-react';
import Sidebar from './Sidebar';  
// import { UserButton } from '@clerk/nextjs';
// import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
export default function TopNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
  // const {  isLoaded } = useUser();

   
  const handleToggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <header className="bg-white  border-b border-white/10 fixed top-0 left-0 w-full z-20">
        <div className="w-full mx-auto py-3 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center ml-8 gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleSidebar}
              aria-expanded={isSidebarOpen}
              aria-label="Toggle Sidebar"
              className="hover:bg-white/10"
            >
              <MenuIcon className="h-7 w-12 text-black" />
            </Button>
            <div className="flex items-center gap-2">
            <Image src="/ninja.svg" alt="Logo" width={32} height={32} 
            className="text-white" 
            style={{ filter: 'invert(1)' }} 
            />
            <Link href="/">
              <span className="text-xl font-bold">ThinkIn</span>
            </Link>
          </div>
          </div>
          <div className="flex-grow" />
          {/* {isLoaded ? (
            <UserButton appearance={{
              elements: {
                avatarBox: 'w-9 h-9',
                userButtonPopoverCard: 'bg-black/90 border border-white/10',
                userButtonPopoverFooter: 'border-t border-white/10',
                userButtonPopoverActionButton: 'hover:bg-white/10',
                userButtonPopoverActionButtonText: 'text-white',
                userButtonPopoverActionButtonIcon: 'text-white',
              },
            }} />
          ) : (
            <div ><Loader2 className="h-8 w-8 animate-spin text-white/60" /></div>
          )} */}
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </>
  );
}