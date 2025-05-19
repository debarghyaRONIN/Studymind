import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BrainCircuit } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              <span className="font-medium">AI-Powered Learning</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Study Smarter, Not Harder
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Leverage AI to optimize your learning journey. Create personalized study schedules,
              analyze complex content, and track your progress with advanced analytics.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="gap-1.5">
                <Link href="/signup">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#how-it-works">
                  How It Works
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-8 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm"></div>
              <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-4 text-center">
                <BrainCircuit className="h-20 w-20 text-primary" />
                <h3 className="text-2xl font-bold">Intelligent Learning Assistance</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes your learning patterns and creates optimized study plans tailored to your unique needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}