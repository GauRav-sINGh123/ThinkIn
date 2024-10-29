import { z } from "zod";
 
const allowedImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

const fileSchema = z.object({
  file: z
    .custom<File>((file) => file instanceof File, {
      message: "Invalid file format",
    })
    .refine((file) => allowedImageTypes.includes(file.type), {
      message: "Unsupported image type. Allowed types: JPEG, PNG, GIF, WEBP.",
    })
    .refine((file) => file.size <= 2 * 1024 * 1024, {
      message: "File size must be less than or equal to 2MB.",
    }),
});
 
function validateFile(file: File) {
  const result = fileSchema.safeParse({ file });
  if (!result.success) {
    console.error(result.error.errors);
    return false;  
  }
  console.log("File is valid!");
  return true;  
}

export { fileSchema, validateFile };
 

export const blogSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters long." })
    .max(100, { message: "Title cannot exceed 100 characters." }),

  category: z
    .string()
    .min(3, { message: "Category must be at least 3 characters long." })
    .max(50, { message: "Category cannot exceed 50 characters." }),

  content: z
    .string()
    .min(10, { message: "Content must be at least 10 characters long." })
    .max(5000, { message: "Content cannot exceed 5000 characters." }),
});

export type BlogData = z.infer<typeof blogSchema>;