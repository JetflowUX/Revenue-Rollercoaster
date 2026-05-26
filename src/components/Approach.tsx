import React from 'react';
import { motion } from 'framer-motion';
export const Approach = () => {
  const steps = [
  {
    title: 'Diagnose',
    description:
    'Deep-dive audit of current revenue operations, identifying bottlenecks and leaks.'
  },
  {
    title: 'Design',
    description:
    'Architect a custom playbook: optimized processes, comp plans, and tech stack.'
  },
  {
    title: 'Deploy',
    description:
    'Work alongside leadership to implement systems, ensuring adoption.'
  },
  {
    title: 'Drive',
    description:
    'Establish ongoing cadences, KPIs, and coaching to ensure predictable growth.'
  }];

  return (
    <section id="approach" className="py-32 bg-brand-950 text-surface">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-heading leading-tight max-w-3xl">
            A proven methodology for{' '}
            <em className="italic text-brand-400">transformation</em>.
          </h2>
          <p className="text-lg text-brand-300 max-w-sm text-balance pb-2">
            We replace guesswork with frameworks, uncovering the root cause of
            volatility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-800 border border-brand-800">
          {steps.map((step, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.1
            }}
            className="bg-brand-950 p-10 md:p-12 flex flex-col h-full group hover:bg-brand-900 transition-colors duration-500">
            
              <div className="text-brand-500 font-heading text-2xl mb-12">
                0{index + 1}
              </div>
              <div className="mt-auto">
                <h3 className="text-3xl font-heading mb-4 group-hover:text-brand-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-brand-300/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};