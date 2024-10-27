import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import BlogGrid from '@/components/blog-grid';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>
      <Navbar />
      <Hero />
      <BlogGrid />
      <Footer />
    </main>
  );
}