import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface BlogState {
    blogData: {
        title?:string;
        category?:string;
        content?:string;
         
    };
    setBlogData: (data: any) => void;     
  }
  
export const useBlogStore = create<BlogState>()(
  persist((set) => ({
    blogData: {},
    setBlogData: (data) => set((state) => ({
      blogData: { ...state.blogData, ...data },
    })),
   
  }), {
    name: 'blog-storage',
  })
);