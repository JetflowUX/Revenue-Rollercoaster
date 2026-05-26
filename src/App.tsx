import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoCloud } from './components/LogoCloud';
import { Services } from './components/Services';
import { Approach } from './components/Approach';
import { Stats } from './components/Stats';
import { CaseStudies } from './components/CaseStudies';
import { Testimonial } from './components/Testimonial';
import { Insights } from './components/Insights';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Services />
        <Approach />
        <Stats />
        <CaseStudies />
        <Testimonial />
        <Insights />
        <CTABanner />
      </main>
      <Footer />
    </div>);

}