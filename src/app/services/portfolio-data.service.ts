import { Injectable } from '@angular/core';

export interface Service {
  id: number;
  number: string;
  icon: string;
  name: string;
  description: string;
  price: string;
}

export interface WorkItem {
  id: number;
  icon: string;
  type: string;
  location: string;
  name: string;
  description: string;
  tags: string[];
  gradient: string;
  label: string;
}

export interface Highlight {
  icon: string;
  title: string;
  text: string;
}

export interface TechItem {
  icon: string;
  name: string;
}

export interface Experience {
  year: string;
  role: string;
  where: string;
}

export interface ProcessStep {
  number: string;
  icon: string;
  title: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  services: Service[] = [
    {
      id: 1,
      number: '01 / 06',
      icon: '🌱',
      name: 'Starter Website',
      description: '3-page mobile-friendly website with WhatsApp button, Google Maps and contact form. Perfect for shops, tutors and small businesses.',
      price: '₹3,000 – ₹4,000 · 3 days'
    },
    {
      id: 2,
      number: '02 / 06',
      icon: '🚀',
      name: 'Business Website',
      description: '5–6 page website with gallery, enquiry forms, SEO setup and social media integration. Best for clinics, coaching and events.',
      price: '₹5,000 – ₹7,000 · 5 days'
    },
    {
      id: 3,
      number: '03 / 06',
      icon: '💎',
      name: 'Premium Website',
      description: '8+ page full-branded website with booking system, WhatsApp API and 3-month priority support. For pharma, architects and large businesses.',
      price: '₹8,000 – ₹12,000 · 7 days'
    },
    {
      id: 4,
      number: '04 / 06',
      icon: '🔧',
      name: 'Sathi AMC Plan',
      description: 'Monthly maintenance, hosting renewal, content updates and WhatsApp support. Your website\'s partner for life.',
      price: '₹500 – ₹2,000 / month'
    },
    {
      id: 5,
      number: '05 / 06',
      icon: '📱',
      name: 'Software Solutions',
      description: 'Custom web applications, dashboards, CRM systems and automation tools built for your specific business workflow.',
      price: 'Custom Pricing · Timeline TBD'
    },
    {
      id: 6,
      number: '06 / 06',
      icon: '📈',
      name: 'SEO & Digital Growth',
      description: 'Google ranking, local SEO, Google My Business optimisation and monthly performance reports for consistent growth.',
      price: '₹3,000 – ₹8,000 / month'
    }
  ];

  workItems: WorkItem[] = [
    {
      id: 1,
      icon: '🦷',
      type: 'Dental Clinic',
      location: 'Nadiad',
      name: 'Smile Care Dental',
      description: '5-page clinic website with appointment booking, doctor profiles, services showcase and patient enquiry form.',
      tags: ['HTML/CSS', 'JavaScript', 'WhatsApp', 'SEO'],
      gradient: 'linear-gradient(135deg,#0d2a1f,#143d2b)',
      label: 'DEMO'
    },
    {
      id: 2,
      icon: '🍽️',
      type: 'Catering & Events',
      location: 'Anand',
      name: 'Shubh Vivah Caterers',
      description: 'Wedding and event catering website with photo gallery, menu showcase and instant booking enquiry form.',
      tags: ['WordPress', 'Gallery', 'Mobile-First'],
      gradient: 'linear-gradient(135deg,#2a1a0d,#3d2814)',
      label: 'DEMO'
    },
    {
      id: 3,
      icon: '📊',
      type: 'Financial Services',
      location: 'Vadodara',
      name: 'Anand Finance Advisory',
      description: 'Professional finance agency site with services, team profiles, client testimonials and lead capture form.',
      tags: ['React', 'Lead Forms', 'SEO'],
      gradient: 'linear-gradient(135deg,#0d1a2a,#13263d)',
      label: 'DEMO'
    },
    {
      id: 4,
      icon: '🎓',
      type: 'Coaching Institute',
      location: 'Nadiad',
      name: 'Shree Coaching Centre',
      description: 'Coaching institute website with course listings, batch schedules, results gallery and admission enquiry system.',
      tags: ['WordPress', 'Admission Form', 'WhatsApp'],
      gradient: 'linear-gradient(135deg,#1a0d2a,#26133d)',
      label: 'DEMO'
    }
  ];

  highlights: Highlight[] = [
    {
      icon: '📍',
      title: 'Local First',
      text: 'Based in Nadiad — you can meet me face to face'
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      text: '3–7 days guaranteed, not weeks'
    },
    {
      icon: '💬',
      title: 'Gujarati Support',
      text: 'Discuss everything in your language'
    },
    {
      icon: '🔒',
      title: 'Fixed Pricing',
      text: 'What I quote is what you pay'
    }
  ];

  techStack: TechItem[] = [
    { icon: '⚛️', name: 'Angular' },
    { icon: '🟨', name: 'JavaScript' },
    { icon: '🎨', name: 'CSS3' },
    { icon: '🔵', name: 'WordPress' },
    { icon: '🟢', name: 'Node.js' },
    { icon: '🗄️', name: 'MySQL' },
    { icon: '🎯', name: 'Figma' },
    { icon: '🔍', name: 'SEO' },
    { icon: '📦', name: 'Git' }
  ];

  experience: Experience[] = [
    {
      year: '2026 — NOW',
      role: 'Founder & Web Developer',
      where: 'mayurzala.com · Nadiad, Gujarat'
    },
    {
      year: '2024 — 2026',
      role: 'Freelance Web Developer',
      where: 'Fiverr / Upwork · Remote'
    },
    {
      year: '2021 — 2024',
      role: 'Self-Taught Developer',
      where: 'HTML · CSS · JavaScript · WordPress'
    }
  ];

  processSteps: ProcessStep[] = [
    {
      number: 'STEP 01',
      icon: '💬',
      title: 'WhatsApp Me',
      text: 'Tell me your business name, city and what you need. Free consultation, zero pressure.'
    },
    {
      number: 'STEP 02',
      icon: '🎨',
      title: 'Free Mockup',
      text: 'I send you a free design preview of your website within 24 hours. No payment needed to see it.'
    },
    {
      number: 'STEP 03',
      icon: '💰',
      title: '50% Advance',
      text: 'Happy with the design? Pay 50% to start. I begin building immediately after confirmation.'
    },
    {
      number: 'STEP 04',
      icon: '🚀',
      title: 'Go Live!',
      text: 'Your website goes live in 5 days. Pay remaining 50% only when you\'re 100% satisfied.'
    }
  ];
}
