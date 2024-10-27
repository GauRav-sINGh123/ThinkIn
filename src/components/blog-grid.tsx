import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle, ArrowRight, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the web development landscape...",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
    author: { name: "Sarah Johnson", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60" },
    category: "Technology",
    readTime: "5 min read",
    stats: { likes: 324, comments: 89, views: 2541 },
  },
  {
    id: 2,
    title: "Mastering Modern Design Principles",
    excerpt: "A deep dive into contemporary design philosophies and their practical applications...",
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60",
    author: { name: "Alex Chen", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60" },
    category: "Design",
    readTime: "7 min read",
    stats: { likes: 256, comments: 45, views: 1897 },
  },
  {
    id: 3,
    title: "The Art of Storytelling",
    excerpt: "Understanding the fundamental elements that make stories compelling and memorable...",
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=60",
    author: { name: "Emma Wilson", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60" },
    category: "Writing",
    readTime: "4 min read",
    stats: { likes: 198, comments: 67, views: 1543 },
  },
];

export default function BlogGrid() {
  return (
    <section className="relative py-16 md:py-24">
      {/* Minimalistic Pattern Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
        <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Stories</h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover thought-provoking articles from our community of writers, covering everything from technology to creative arts.
          </p>
          <Link href="/blogs">
          <Button variant="ghost" className="mt-4 hidden sm:flex items-center group">
            View all posts
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="group relative bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 overflow-hidden border-0 ring-1 ring-gray-200"
            >
              <div className="absolute right-4 top-4 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/90 hover:bg-white"
                >
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <Link href="#" className="group/title">
                  <h3 className="text-xl font-semibold leading-snug group-hover/title:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </CardHeader>
              <CardFooter className="flex flex-col space-y-4 pt-4 border-t">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium">{post.author.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{post.stats.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.stats.comments}</span>
                    </span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="sm:hidden">
            View all posts
          </Button>
        </div>
      </div>
    </section>
  );
}
