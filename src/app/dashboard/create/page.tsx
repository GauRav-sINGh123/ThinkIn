"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";  
import { Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

interface FormData {
  title: string;
  coverImage: File | null;  
  category: string;
  content: string;
}

export default function BlogPostCreator() {
  const { user } = useUser();  
  const [formData, setFormData] = useState<FormData>({
    title: "",
    coverImage: null,
    category: "",
    content: "",
  });

  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [customCategory, setCustomCategory] = useState("");

  const categories = [
    "Technology", "Design", "Ai", "Business", "Entertainment", 
    "Art", "Travel", "Food", "Lifestyle", "Other"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({ ...prev, coverImage: e.target.files[0] }));
    }
  };

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleSubmit = async () => {
    const userId = user?.id; 
    const blogId = uuidv4();

    if (!userId) {
      alert("User not authenticated");
      return;
    }

    try {
      await setDoc(doc(db, `users/${userId}/blogs`, blogId), {
        ...formData,
        timestamp: new Date().toISOString(),
        category: isCustomCategory ? customCategory : formData.category,
      });
      alert("Blog post created successfully!");
      setFormData({ title: "", coverImage: null, category: "", content: "" });
      setCustomCategory("");
      
    } catch (error) {
      console.error("Error creating blog post: ", error);
      alert("Failed to create the blog post.");
    }
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
            <Input id="title" placeholder="Enter your blog post title" value={formData.title} onChange={handleChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cover-image">Cover Image</Label>
            <Input id="cover-image" type="file" accept="image/*" onChange={handleFileChange} />
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
                <Select onValueChange={handleCategoryChange}>
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
            <Button variant="outline" size="sm" onClick={() => setIsCustomCategory(!isCustomCategory)}>
              {isCustomCategory ? "Use Predefined Category" : "Add Custom Category"}
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" placeholder="Write your blog post content here" rows={10} value={formData.content} onChange={handleChange} />
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="absolute right-2 top-2">
                  <Wand2 className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Generate with AI</DialogTitle>
                  <DialogDescription>Use AI to help generate your blog post content.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Textarea placeholder="Enter a prompt for the AI..." rows={4} />
                  <Button>Generate Content</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSubmit}>
            Create Post
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
