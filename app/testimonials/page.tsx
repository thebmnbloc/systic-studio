import { Quote } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, FinTech Global",
    text: "Systic Studio transformed our legacy dashboard into a modern, responsive masterpiece. Our team's productivity increased by 40%."
  },
  {
    name: "Michael Chen",
    role: "Founder, EcoStart",
    text: "The attention to detail is unmatched. They didn't just build what we asked for; they improved upon our vision with better UX patterns."
  },
  {
    name: "Elena Rodriguez",
    role: "Product Lead, HealthPlus",
    text: "Reliable, professional, and incredibly skilled. Our landing page conversion rate doubled within the first month of launch."
  },
  {
    name: "David Park",
    role: "CEO, TechVentures",
    text: "Working with Systic Studio was a game-changer. Their technical expertise and design sensibility are world-class."
  },
  {
    name: "Amanda Foster",
    role: "Director, RetailCorp",
    text: "They delivered our e-commerce platform ahead of schedule and under budget. The quality of code is exceptional."
  },
  {
    name: "James Wilson",
    role: "Founder, StartupX",
    text: "From concept to deployment, the team was communicative and professional. Highly recommend for any web project."
  }
];

export const metadata = {
  title: 'Testimonials | Systic Studio',
  description: 'See what our clients say about working with Systic Studio.',
};

export default function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Client Stories"
          subtitle="Don't just take our word for it. Here's what our partners have to say."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 text-emerald-500/20" size={48} />
              <p className="text-slate-700 dark:text-slate-300 mb-6 relative z-10 italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{t.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}