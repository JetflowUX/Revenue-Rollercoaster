import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
  { variant = 'primary', size = 'md', children, className = '', ...props },
  ref) =>
  {
    const baseStyles =
    'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-full';
    const variants = {
      primary: 'bg-brand-950 text-white hover:bg-brand-800',
      secondary: 'bg-white text-brand-950 hover:bg-slate-100',
      outline:
      'border border-brand-950/20 bg-transparent text-brand-950 hover:border-brand-950 hover:bg-brand-950 hover:text-white',
      ghost: 'bg-transparent text-brand-950 hover:bg-black/5'
    };
    const sizes = {
      sm: 'h-10 px-5 text-sm',
      md: 'h-12 px-7 text-sm tracking-wide',
      lg: 'h-14 px-8 text-base tracking-wide'
    };
    return (
      <motion.button
        ref={ref}
        whileHover={{
          scale: 1.02
        }}
        whileTap={{
          scale: 0.98
        }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}>
        
        {children}
      </motion.button>);

  }
);
Button.displayName = 'Button';