import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export const Services = () => {
  const services = [
  {
    number: '01',
    title: 'Revenue Strategy',
    description:
    'Align sales, marketing, and customer success to eliminate silos and create a unified revenue engine. We architect the overarching blueprint for sustainable growth.'
  },
  {
    number: '02',
    title: 'Sales Operations',
    description:
    'Optimize your CRM, forecasting models, and sales processes to improve visibility and conversion rates. We turn messy data into actionable insights.'
  },
  {
    number: '03',
    title: 'Pricing & Packaging',
    description:
    'Restructure your pricing models to capture maximum value and increase net revenue retention. Stop leaving money on the table.'
  },
  {
    number: '04',
    title: 'Go-to-Market Advisory',
    description:
    'Launch new products or enter new markets with data-backed strategies and execution plans. We de-risk your expansion.'
  }];

  return (
    <section id="services" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="md:sticky md:top-32">
              <h2 className="text-4xl md:text-6xl font-heading text-brand-950 mb-6 leading-tight">
                Expertise that drives{' '}
                <em className="italic text-brand-600">predictable</em> growth.
              </h2>
              <p className="text-lg text-brand-950/70 mb-8">
                We don't just offer advice; we architect scalable systems
                designed to solve complex revenue challenges at every stage.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-brand-950/20">
              {services.map((service, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  margin: '-100px'
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
                className="group border-b border-brand-950/20 py-10 md:py-14 flex flex-col md:flex-row gap-6 md:gap-12 hover:bg-brand-50/50 transition-colors duration-500 cursor-pointer px-4 rounded-sm">
                
                  <div className="text-sm font-medium text-brand-950/40 w-12 pt-2">
                    {service.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-heading text-brand-950 mb-4 group-hover:text-brand-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-lg text-brand-950/70 leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-brand-600" />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};