import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export const CaseStudies = () => {
  const cases = [
  {
    client: 'Enterprise SaaS',
    result: '120% increase in enterprise ACV',
    description:
    'Restructured the pricing model and implemented a value-based selling framework for the mid-market sales team.',
    image:
    'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    client: 'Fintech Scale-up',
    result: 'Reduced sales cycle by 45 days',
    description:
    'Streamlined the go-to-market motion and implemented a rigorous qualification methodology to focus on high-intent buyers.',
    image:
    'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }];

  return (
    <section id="case-studies" className="py-32 bg-surface">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-heading text-brand-950 leading-tight max-w-2xl">
            Proven results across{' '}
            <em className="italic text-brand-600">industries</em>.
          </h2>
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-brand-950 uppercase tracking-widest hover:text-brand-600 transition-colors pb-2">
            
            View all work <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {cases.map((item, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2
            }}
            className="group cursor-pointer">
            
              <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm mb-8 relative">
                <img
                src={item.image}
                alt={item.client}
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              
                <div className="absolute inset-0 bg-brand-950/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-medium text-brand-950/60 uppercase tracking-widest">
                  {item.client}
                </span>
                <div className="h-[1px] flex-1 bg-brand-950/10"></div>
              </div>

              <h3 className="text-3xl md:text-4xl font-heading text-brand-950 mb-4 group-hover:text-brand-600 transition-colors">
                {item.result}
              </h3>
              <p className="text-lg text-brand-950/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};