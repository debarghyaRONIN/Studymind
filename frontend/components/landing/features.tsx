import {
  Calendar,
  FileText,
  BarChart4,
  Brain,
  Clock,
  Lightbulb,
  RefreshCw,
  Zap,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Intelligent scheduling based on your availability, learning style, and topic complexity.',
    },
    {
      icon: FileText,
      title: 'Document Analysis',
      description: 'Automatic extraction of key concepts, topics, and complexity levels from your study materials.',
    },
    {
      icon: RefreshCw,
      title: 'Adaptive Learning',
      description: 'Dynamic adjustments to your schedule based on feedback and performance.',
    },
    {
      icon: Brain,
      title: 'AI Assistance',
      description: 'Real-time help during study sessions with AI-generated practice questions and explanations.',
    },
    {
      icon: BarChart4,
      title: 'Progress Analytics',
      description: 'Comprehensive dashboards showing mastery progression and identifying knowledge gaps.',
    },
    {
      icon: Clock,
      title: 'Pomodoro Timer',
      description: 'Configurable study sessions with built-in breaks to optimize focus and retention.',
    },
    {
      icon: Lightbulb,
      title: 'Learning Insights',
      description: 'Personalized recommendations for improving study efficiency and knowledge retention.',
    },
    {
      icon: Zap,
      title: 'Spaced Repetition',
      description: 'Optimized review scheduling to maximize long-term memory retention.',
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Powerful Features
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to optimize your learning journey
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center space-y-2 rounded-lg border p-4 transition-all hover:bg-muted/50">
              <div className="rounded-full border p-2.5 text-primary">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-center text-base font-medium">{feature.title}</h3>
              <p className="text-center text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}