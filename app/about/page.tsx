import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'About | Systic Studio',
  description: 'Learn about Systic Studio - a collective of designers, developers, and strategists.',
};

export default function About() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500 rounded-2xl rotate-3 opacity-20"></div>
            <div className="relative bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 overflow-hidden">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 mt-8">
                    <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                      <h4 className="text-3xl font-bold text-emerald-500 mb-1">5+</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">Years Experience</p>
                    </div>
                    <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                      <h4 className="text-3xl font-bold text-blue-500 mb-1">100%</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">Client Satisfaction</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                      <h4 className="text-3xl font-bold text-purple-500 mb-1">50+</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">Projects Completed</p>
                    </div>
                    <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                      <h4 className="text-3xl font-bold text-orange-500 mb-1">24/7</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">Support</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
          
          <div>
            <SectionHeading 
              align="left"
              title="We Are Systic Studio"
              subtitle="A collective of designers, developers, and strategists passionate about building the future of the web."
            />
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Founded in 2020, Systic Studio started with a simple mission: to bridge the gap between beautiful design and functional code. We believe that software should not only work flawlessly but also feel intuitive and delightful to use.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Our team specializes in the JavaScript ecosystem, particularly React and Next.js, allowing us to deliver server-side rendered applications that are both fast and SEO-friendly. We work with startups and enterprises alike, bringing the same level of dedication and craftsmanship to every project.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'PostgreSQL', 'AWS', 'Docker'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}