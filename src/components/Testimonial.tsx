import React from 'react';
import { motion } from 'framer-motion';
export const Testimonial = () => {
  return (
    <section className="py-32 bg-brand-950 text-surface overflow-hidden">
      <div className="max-w-[90%] mx-auto">
        <div className="max-w-5xl mx-auto text-center">
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
            }}>
            
            <div className="text-brand-500 mb-12">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                
                <path d="M14.017 21L16.41 14.532C16.89 13.202 17.13 12.012 17.13 10.962C17.13 9.772 16.81 8.822 16.17 8.112C15.53 7.402 14.67 7.047 13.59 7.047C12.43 7.047 11.48 7.467 10.74 8.307C10.02 9.127 9.66 10.157 9.66 11.397C9.66 12.637 10.02 13.667 10.74 14.487C11.48 15.327 12.43 15.747 13.59 15.747C13.91 15.747 14.23 15.707 14.55 15.627L12.157 21H14.017ZM6.357 21L8.75 14.532C9.23 13.202 9.47 12.012 9.47 10.962C9.47 9.772 9.15 8.822 8.51 8.112C7.87 7.402 7.01 7.047 5.93 7.047C4.77 7.047 3.82 7.467 3.08 8.307C2.36 9.127 2 10.157 2 11.397C2 12.637 2.36 13.667 3.08 14.487C3.82 15.327 4.77 15.747 5.93 15.747C6.25 15.747 6.57 15.707 6.89 15.627L4.497 21H6.357Z" />
              </svg>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading leading-[1.1] mb-16 text-balance">
              "Revenue Rollercoaster didn't just give us a deck of
              recommendations. They got into the trenches, rebuilt our
              forecasting model, and helped us{' '}
              <em className="italic text-brand-400">
                increase our win rate by 22%
              </em>{' '}
              in just two quarters."
            </h2>

            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-6 grayscale">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Sarah Jenkins"
                  className="w-full h-full object-cover" />
                
              </div>
              <div className="font-heading text-2xl text-surface mb-1">
                Sarah Jenkins
              </div>
              <div className="text-sm font-medium text-brand-400 uppercase tracking-widest">
                CRO, Nexus Systems
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};