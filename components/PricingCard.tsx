import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from './Button';

interface PricingCardProps {
  tier: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export default function PricingCard({ tier, price, features, recommended = false }: PricingCardProps) {
  return (
    <div className={`relative p-8 rounded-3xl border ${recommended ? 'border-emerald-500 bg-emerald-50/30 dark:bg-emerald-900/10' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'} flex flex-col h-full`}>
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{tier}</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-bold text-slate-900 dark:text-white">{price}</span>
        <span className="text-slate-500 dark:text-slate-400">/project</span>
      </div>
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant={recommended ? 'primary' : 'outline'} className="w-full justify-center">
        Get Started
      </Button>
    </div>
  );
}