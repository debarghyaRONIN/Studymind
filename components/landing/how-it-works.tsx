import { Check } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Upload Your Study Materials',
      description: 'Upload your study materials including PDFs, documents, and notes. Our AI analyzes the content to identify key topics and complexity.',
    },
    {
      number: '02',
      title: 'Set Your Learning Parameters',
      description: 'Tell us about your schedule availability, learning preferences, and goals. This helps our AI create a personalized study plan.',
    },
    {
      number: '03',
      title: 'Follow Your Smart Schedule',
      description: 'Study according to your AI-generated schedule. The system optimizes topic sequencing and timing for maximum retention.',
    },
    {
      number: '04',
      title: 'Provide Feedback & Adapt',
      description: 'After each study session, provide quick feedback. The AI adapts your schedule based on your progress and challenges.',
    },
  ];

  const benefits = [
    'Increase knowledge retention by 40%',
    'Save 5+ hours each week on planning',
    'Reduce study stress with optimized scheduling',
    'Identify and address knowledge gaps faster',
    'Improve exam readiness with targeted practice',
    'Track your learning progress with detailed analytics',
  ];

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our AI-powered platform makes studying more efficient and effective
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-sm font-medium">{step.number}</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col justify-center rounded-xl bg-muted p-6">
            <h3 className="text-xl font-medium mb-4">Why Students Love StudyMind</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}