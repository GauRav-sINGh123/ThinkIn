'use client';
import { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { blogSchema, validateFile } from '@/app/store/blogSchema';  

interface BlogData {
  title: string;
  category: string;
  content: string;
}

export default function BlogPostCreator() {
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [customCategory, setCustomCategory] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [blogData, setBlogData] = useState<BlogData>({
    title: '',
    category: '',
    content: '',
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); 
  const [errors, setErrors] = useState<{ title?: string; category?: string; content?: string; file?: string }>({});

  const categories = ['Technology', 'Design', 'Artificial Intelligence', 'Business', 'Entertainment', 'Art', 'Travel', 'Food', 'Lifestyle', 'Other'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setBlogData({ ...blogData, [id]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (validateFile(selectedFile)) {
        setFile(selectedFile);
        setErrors({ ...errors, file: undefined });
      } else {
        setFile(null);
        setErrors({ ...errors, file: "Invalid file. Please check the file format and size." });
      }
    }
  };

  const handleCategorySelect = (value: string) => {
    setBlogData({ ...blogData, category: value });
  };

  const handleSubmit = () => {
    const validationResult = blogSchema.safeParse(blogData);
    const fileError = file ? validateFile(file) : false;

    if (!validationResult.success || !fileError) {
      const formErrors: any = {};
      if (validationResult.error) {
        validationResult.error.errors.forEach((error) => {
          formErrors[error.path[0]] = error.message;
        });
      }

      if (!file) {
        formErrors.file = "Invalid file. Please check the file format and size.";
      }
      setErrors(formErrors);
    } else {
      console.log("Blog Data is valid:", blogData);
      console.log("Selected file:", file);
    }
  };

  const handleGenerateContent = () => {
    const generatedContent = "This is a generated content based on your prompt."; 
    setBlogData({ ...blogData, content: generatedContent });
    setIsModalOpen(false); 
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create a New Blog Post</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter your blog post title"
              onChange={handleChange}
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cover-image">Cover Image</Label>
            <Input
              id="cover-image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            {errors.file && <p className="text-red-500">{errors.file}</p>}
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
                <Select onValueChange={handleCategorySelect}>
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
            {errors.category && <p className="text-red-500">{errors.category}</p>}
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
              <Textarea
                id="content"
                placeholder="Write your blog post content here"
                rows={10}
                value={blogData.content}  
                onChange={handleChange}
              />
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Wand2 className="absolute right-2 top-2 h-5 w-5 cursor-pointer" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Generate Content</DialogTitle>
                    <DialogDescription>
                      Use AI to help generate your blog post content.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Textarea placeholder="Enter a prompt for the AI..." rows={4} />
                    <Button onClick={handleGenerateContent}>Generate Content</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            {errors.content && <p className="text-red-500">{errors.content}</p>}
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full" onClick={handleSubmit}>Create Post</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
