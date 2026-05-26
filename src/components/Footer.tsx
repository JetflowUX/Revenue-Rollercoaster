import React from 'react';
export const Footer = () => {
  return (
    <footer className="bg-brand-950 text-surface pt-24 pb-12">
      <div className="max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          <div className="lg:col-span-5">
            <a
              href="#"
              className="inline-block font-heading text-3xl text-surface mb-8 hover:opacity-80 transition-opacity">
              
              Revenue Rollercoaster
            </a>
            <p className="text-brand-300 max-w-sm text-lg leading-relaxed">
              Strategic consulting for B2B companies looking to smooth the ride
              and scale their revenue predictably.
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs font-medium text-brand-500 uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-brand-300 hover:text-surface transition-colors">
                  
                  Revenue Strategy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-300 hover:text-surface transition-colors">
                  
                  Sales Operations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-300 hover:text-surface transition-colors">
                  
                  Pricing & Packaging
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-300 hover:text-surface transition-colors">
                  
                  GTM Advisory
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-medium text-brand-500 uppercase tracking-widest mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-brand-300 hover:text-surface transition-colors">
                  
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-300 hover:text-surface transition-colors">
                  
                  Our Approach
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-300 hover:text-surface transition-colors">
                  
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-300 hover:text-surface transition-colors">
                  
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-medium text-brand-500 uppercase tracking-widest mb-6">
              Social
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-brand-300 hover:text-surface transition-colors">
                  
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-300 hover:text-surface transition-colors">
                  
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-300 hover:text-surface transition-colors">
                  
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-800 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-brand-500 font-medium tracking-wide">
          <p>© {new Date().getFullYear()} Revenue Rollercoaster.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-surface transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-surface transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

};