import React from 'react';
export const LogoCloud = () => {
  const logos = [
  'ACME CORP',
  'GLOBALTECH',
  'NEXUS SYSTEMS',
  'PINNACLE GROUP',
  'VERTEX SOLUTIONS',
  'QUANTUM DATA',
  'ACME CORP',
  'GLOBALTECH',
  'NEXUS SYSTEMS',
  'PINNACLE GROUP',
  'VERTEX SOLUTIONS',
  'QUANTUM DATA'];

  return (
    <section className="py-12 bg-brand-950 overflow-hidden border-y border-brand-900">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {logos.map((logo, index) =>
          <span
            key={index}
            className="mx-8 text-2xl md:text-3xl font-heading text-brand-500/50 hover:text-brand-100 transition-colors duration-300 cursor-default">
            
              {logo}
              <span className="mx-8 text-brand-800">•</span>
            </span>
          )}
        </div>
        <div
          className="absolute top-0 animate-marquee whitespace-nowrap flex items-center"
          style={{
            animationDelay: '-12.5s'
          }}>
          
          {logos.map((logo, index) =>
          <span
            key={`clone-${index}`}
            className="mx-8 text-2xl md:text-3xl font-heading text-brand-500/50 hover:text-brand-100 transition-colors duration-300 cursor-default">
            
              {logo}
              <span className="mx-8 text-brand-800">•</span>
            </span>
          )}
        </div>
      </div>
    </section>);

};