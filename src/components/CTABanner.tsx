import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
export const CTABanner = () => {
  return (
    <section className="py-32 bg-surface border-t border-brand-950/10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="max-w-4xl mx-auto">
          
          <h2 className="text-6xl md:text-8xl lg:text-[100px] font-heading text-brand-950 leading-[0.9] tracking-tight mb-12">
            Ready to <em className="italic text-brand-600">stabilize</em> <br />{' '}
            your revenue?
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg">Book a Strategy Session</Button>
            <Button size="lg" variant="outline">
              Send us an Email
            </Button>
          </div>
        </motion.div>
      </div>
    </section>);

};