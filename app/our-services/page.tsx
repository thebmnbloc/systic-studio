import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';

export const metadata = {
  title: 'Services | Systic Studio',
  description: 'Comprehensive software development solutions tailored to your business needs.',
};

export default function Services() {
  const services = [
    {
      iconName: 'LayoutDashboard',
      title: 'Admin Dashboards',
      description: 'Complex data visualization and management systems built with React, Tailwind, and robust state management. Perfect for SaaS platforms and internal tools.',
    },
    {
      iconName: 'Globe',
      title: 'Web Applications',
      description: 'Scalable, secure, and high-performance web apps using Next.js, Node.js, and modern cloud infrastructure. From MVPs to enterprise solutions.',
    },
    {
      iconName: 'Smartphone',
      title: 'Landing Pages',
      description: 'Conversion-optimized, blazing-fast landing pages designed to turn visitors into loyal customers. SEO-friendly and performance-focused.',
    },
    {
      iconName: 'Code2',
      title: 'API Development',
      description: 'RESTful and GraphQL API design and integration to power your frontend experiences seamlessly. Secure, documented, and scalable.',
    },
    {
      iconName: 'Zap',
      title: 'Performance Audit',
      description: 'We analyze and optimize your existing codebase for speed, SEO, and accessibility standards. Improve your Core Web Vitals scores.',
    },
    {
      iconName: 'Shield',
      title: 'Enterprise Solutions',
      description: 'Secure, compliant software solutions tailored for large-scale organizational needs and workflows. SSO, audit logs, and role-based access.',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Our Services"
          subtitle="Comprehensive software development solutions tailored to your business needs."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.title}
              iconName={service.iconName}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}