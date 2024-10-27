import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative isolate">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50 opacity-90" />
      </div>

      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-12 pb-24 sm:pt-20 sm:pb-28">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Join our growing community of writers.{' '}
                <Link href="/dashboard" className="font-semibold text-blue-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-800 sm:text-7xl">
              Share Your Story{' '}
              <span className="bg-gradient-to-r from-blue-900 to-violet-900 bg-clip-text text-transparent">
                with the World
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Join our vibrant community of storytellers, thought leaders, and creators. Transform your ideas into captivating content that resonates with readers worldwide.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/dashboard/create">
                <Button size="lg" className="group bg-blue-600 hover:bg-blue-700">
                  Start Writing
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
