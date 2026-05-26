import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
export const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 min-h-screen flex items-center bg-surface">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <motion.div
            initial={{
              opacity: 0,
              y: 40
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="lg:col-span-8">
            
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-medium text-brand-950/60 uppercase tracking-widest">
                Strategic Advisory
              </span>
              <div className="h-[1px] w-12 bg-brand-950/20"></div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[110px] leading-tight tracking-tight text-brand-950 mb-8">
              Smooth the ride. <br />
              <em className="italic text-brand-600 pr-4">Scale</em> the revenue.
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mt-12">
              <Button size="lg" className="group">
                Book a Discovery Call
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 1,
              delay: 0.3
            }}
            className="lg:col-span-4 lg:pb-4">
            
            <p className="text-lg md:text-xl text-brand-950/70 leading-relaxed font-medium text-balance">
              We partner with B2B founders and sales leaders to stabilize
              unpredictable revenue, optimize go-to-market strategies, and build
              scalable growth engines.
            </p>

            <div className="mt-12 pt-8 border-t border-brand-950/10">
              <p className="text-sm font-medium text-brand-950/50 uppercase tracking-widest mb-4">
                Trusted by 200+ Growth-Stage Companies
              </p>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) =>
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-surface bg-brand-100 overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
                  
                    <img
                    src={`https://images.pexels.com/photos/${1000000 + i}/pexels-photo-${1000000 + i}.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop`}
                    alt="Client"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src =
                      `https://ui-avatars.com/api/?name=User+${i}&background=random`;
                    }} />
                  
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Large Editorial Image */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="mt-20 lg:mt-32 w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-sm">
          
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Strategy meeting"
            className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000" />
          
        </motion.div>
      </div>
    </section>);

};