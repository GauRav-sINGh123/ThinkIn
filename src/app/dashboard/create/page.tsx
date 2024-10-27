'use client'

import { useState } from 'react'
import { Wand2 } from 'lucide-react'
'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function BlogPostCreator() {
  const [isCustomCategory, setIsCustomCategory] = useState(false)
  const [customCategory, setCustomCategory] = useState('')

  const categories = ['Technology','Design','Ai','Business','Entertainment','Art' ,'Travel', 'Food', 'Lifestyle', 'Other']

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create a New Blog Post</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter your blog post title" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cover-image">Cover Image</Label>
            <Input id="cover-image" type="file" accept="image/*" />
          </div>

          <div className="space-y-2">
            {isCustomCategory ? (
              <div>
                <Label htmlFor="custom-category">Custom Category</Label>
                <Input
                  id="custom-category"
                  placeholder="Enter custom category"
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value)}
                />
              </div>
            ) : (
              <div>
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsCustomCategory(!isCustomCategory)}
            >
              {isCustomCategory ? 'Use Predefined Category' : 'Add Custom Category'}
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <div className="relative">
              <Textarea id="content" placeholder="Write your blog post content here" rows={10} />
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-2"
                  >
                    <Wand2 className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Generate with AI</DialogTitle>
                    <DialogDescription>
                      Use AI to help generate your blog post content.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Textarea placeholder="Enter a prompt for the AI..." rows={4} />
                    <Button >Generate Content</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button  className="w-full">Create Post</Button>
        </CardFooter>
      </Card>
    </div>
  )
}