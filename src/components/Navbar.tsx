import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'Approach',
    href: '#approach'
  },
  {
    name: 'Work',
    href: '#case-studies'
  },
  {
    name: 'Insights',
    href: '#insights'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#F9F8F6]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-[90%] mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-heading text-2xl text-brand-950 tracking-tight group-hover:opacity-70 transition-opacity">
              Revenue Rollercoaster
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-950/70 hover:text-brand-950 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-brand-950 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-right hover:after:origin-left">
              
                {link.name}
              </a>
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#contact"
              className="text-sm font-medium text-brand-950/70 hover:text-brand-950 transition-colors">
              
              Contact
            </a>
            <Button size="sm" variant="outline">
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-brand-950"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">
            
            {isMobileMenuOpen ?
            <X className="w-6 h-6" /> :

            <Menu className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          className="md:hidden absolute top-full left-0 w-full bg-[#F9F8F6] border-b border-brand-950/10 shadow-xl">
          
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="font-heading text-3xl text-brand-950"
              onClick={() => setIsMobileMenuOpen(false)}>
              
                  {link.name}
                </a>
            )}
              <a
              href="#contact"
              className="font-heading text-3xl text-brand-950"
              onClick={() => setIsMobileMenuOpen(false)}>
              
                Contact
              </a>
              <Button className="w-full mt-4" size="lg">
                Book a Call
              </Button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

};