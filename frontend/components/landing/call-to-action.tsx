import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Learning?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of students who are studying smarter, not harder.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" className="gap-1.5">
              <Link href="/signup">
                Start Free Trial
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/login">
                Log In
              </Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
}