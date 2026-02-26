'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    details: ''
  });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', details: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Get In Touch"
          subtitle="Ready to start your project? We'd love to hear from you."
        />
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Contact Info Sidebar */}
          <div className="bg-emerald-600 p-10 md:w-2/5 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's discuss your project</h3>
              <p className="text-emerald-100 mb-8">
                Ready to start? Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail size={20} />
                  <span>info@systic.studio</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={20} />
                  <span>+211 919 757 656</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin size={20} />
                  <span>Africa, Remote</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-emerald-500/50 hover:bg-emerald-500 flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="p-10 md:w-3/5">
            {/* Status Messages */}
            {status === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <p className="text-emerald-800 dark:text-emerald-200">
                  Message sent successfully! We'll be in touch soon.
                </p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <p className="text-red-800 dark:text-red-200">
                  {errorMessage || 'Failed to send message. Please try again.'}
                </p>
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    First Name
                  </label>
                  <input 
                    id="firstName"
                    name="firstName"
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-900 outline-none transition-all" 
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Last Name
                  </label>
                  <input 
                    id="lastName"
                    name="lastName"
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-900 outline-none transition-all" 
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-900 outline-none transition-all" 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="details" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Project Details
                </label>
                <textarea 
                  id="details"
                  name="details"
                  rows={4} 
                  required
                  minLength={10}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-900 outline-none transition-all resize-none" 
                  placeholder="Tell us about your project, timeline, and budget..."
                  value={formData.details}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
              </div>
              {/* 
              <Button 
                type="submit" 
                className="w-full justify-center"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
              */}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full justify-center px-6 py-3 rounded-full font-medium bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>

           
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}