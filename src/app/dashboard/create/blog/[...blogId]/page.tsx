import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { CalendarIcon, Edit2Icon, UserIcon } from 'lucide-react'

export default function BlogPost({ 
  title = "The Future of Web Development: Trends and Technologies", 
  createdAt = "2023-10-27", 
  author = "Jane Doe", 
  description = "As we stand on the cusp of a new era in web development, it's crucial to explore the emerging trends and technologies that are reshaping the digital landscape. From the rise of AI-driven development tools to the growing importance of web accessibility, the field is evolving at an unprecedented pace. This blog post delves into the key innovations that are set to define the future of web development, including progressive web apps, serverless architectures, and the increasing adoption of WebAssembly. We'll also examine how these advancements are influencing user experiences and changing the way developers approach their craft. Whether you're a seasoned professional or just starting your journey in web development, understanding these trends is essential for staying ahead in this dynamic and exciting field.",
  coverImage = "/placeholder.svg"
}: {
  title?: string
  createdAt?: string
  author?: string
  description?: string
  coverImage?: string
}) {
  return (
    <article className="max-w-4xl mx-auto p-4 relative">
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute top-4 right-4 z-10"
        aria-label="Edit blog post"
      >
        <Edit2Icon className="h-4 w-4" />
      </Button>
      
      <div className="mb-8 rounded-lg overflow-hidden">
        <Image
          src={coverImage}
          alt="Cover image for blog post"
          width={1200}
          height={630}
          className="w-full object-cover"
        />
      </div>
      
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">{title}</h1>
        
        <div className="flex items-center space-x-4 text-muted-foreground">
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <time dateTime={createdAt}>{new Date(createdAt).toLocaleDateString()}</time>
          </div>
          <div className="flex items-center">
            <UserIcon className="mr-2 h-4 w-4" />
            <span>{author}</span>
          </div>
        </div>
        
        <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </article>
  )
}