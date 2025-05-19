import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Computer Science Student',
      avatar: 'AJ',
      content: 'StudyMind has completely transformed my study routine. The AI-generated schedules are perfectly tailored to my learning style, and I\'ve seen a significant improvement in my retention and grades.',
    },
    {
      name: 'Sarah Chen',
      role: 'Medical Student',
      avatar: 'SC',
      content: 'As a medical student, I have tons of complex material to learn. The content analysis feature breaks down difficult topics and creates a study plan that makes even the hardest subjects manageable.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Law Student',
      avatar: 'MR',
      content: 'The spaced repetition system has been a game-changer for memorizing case law. I\'m retaining information much better, and the adaptive scheduling adjusts perfectly when I fall behind.',
    },
    {
      name: 'Emily Williams',
      role: 'MBA Candidate',
      avatar: 'EW',
      content: 'StudyMind helped me balance my full-time job with my MBA studies. The analytics dashboard gives me insights into my learning patterns that I never would have noticed myself.',
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Student Success Stories
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from students who have transformed their learning with StudyMind
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}