import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Pen} from 'lucide-react';
 
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="rounded-lg bg-blue-600 p-1.5 ml-6">
              <Pen className="h-5 w-5 text-white" />
            </div>
            <span className="hidden text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent sm:inline-block">
              ThinkIn
            </span>
          </Link>
        </div>
 
        <div className="flex items-center space-x-4">
          
          <Link href="/dashboard">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
