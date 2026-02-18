import SectionHeading from '@/components/SectionHeading';
import PricingCard from '@/components/PricingCard';

export const metadata = {
  title: 'Pricing | Systic Studio',
  description: 'Transparent pricing for software development services.',
};

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Transparent Pricing"
          subtitle="Choose a package that fits your needs. All plans include source code delivery."
        />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard 
            tier="Starter"
            price="$2,500"
            features={[
              "Single Landing Page",
              "Mobile Responsive",
              "Basic SEO Setup",
              "2 Rounds of Revisions",
              "1 Week Delivery"
            ]}
          />
          <PricingCard 
            tier="Business"
            price="$7,500"
            recommended={true}
            features={[
              "Multi-page Web App",
              "Dashboard Integration",
              "Advanced Animations",
              "Database Setup",
              "5 Rounds of Revisions",
              "4 Weeks Delivery"
            ]}
          />
          <PricingCard 
            tier="Enterprise"
            price="Custom"
            features={[
              "Full-scale SaaS Platform",
              "Custom API Development",
              "Auth & Payment Integration",
              "Priority Support",
              "Unlimited Revisions",
              "Dedicated Team"
            ]}
          />
        </div>
      </div>
    </section>
  );
}