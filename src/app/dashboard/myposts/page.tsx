'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CalendarDays, Edit, Trash2 } from "lucide-react"

 
const samplePosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    excerpt: "Dive into the world of React Hooks and learn how they can simplify your components.",
    author: {
      name: "Jane Doe",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt: "Learn how to create beautiful, responsive designs quickly with Tailwind CSS.",
    author: {
      name: "John Smith",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    date: "2023-05-20",
  },
  {
    id: 3,
    title: "Next.js 13 Features",
    excerpt: "Explore the new features in Next.js 13 and how they improve your development workflow.",
    author: {
      name: "Alice Johnson",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    date: "2023-05-25",
  },
   
]

export default function Component() {
  const handleEdit = (id: number) => {
    console.log(`Editing post ${id}`)
 
  }

  const handleDelete = (id: number) => {
    console.log(`Deleting post ${id}`)
    
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">My Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {samplePosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{post.author.name}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="mr-1 h-3 w-3" />
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="icon" onClick={() => handleEdit(post.id)}>
                <Edit className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
              <Button variant="outline" size="icon" onClick={() => handleDelete(post.id)}>
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}