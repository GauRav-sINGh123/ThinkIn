import Link from 'next/link';
import { Github, Twitter, Linkedin, Pen } from 'lucide-react';



export default function Footer() {
  return (
    <footer className="border-t bg-gray-50/50">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="rounded-lg bg-blue-600 p-2 mb-4">
            <Pen className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            ThinkIn
          </h3>
          <p className="text-muted-foreground max-w-md">
            A modern platform for writers and readers to connect, create, and discover amazing stories.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ThinkIn. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
