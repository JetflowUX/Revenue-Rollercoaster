import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
export const Insights = () => {
  const articles = [
    {
      category: "Sales Strategy",
      title: "Why Your Sales Process is Leaking Revenue",
      date: "Oct 12, 2023",
      image:
        "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      category: "Pricing",
      title: "The Transition to Usage-Based Pricing",
      date: "Sep 28, 2023",
      image:
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      category: "Leadership",
      title: "Aligning Sales and Marketing: Beyond the SLA",
      date: "Sep 15, 2023",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section id="insights" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-heading text-brand-950">
            Latest <em className="italic text-brand-600">Thinking</em>.
          </h2>
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-brand-950 uppercase tracking-widest hover:text-brand-600 transition-colors pb-2"
          >
            Read all insights <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-medium text-brand-950/60 uppercase tracking-widest">
                  {article.category}
                </span>
                <span className="text-brand-950/30">•</span>
                <span className="text-xs font-medium text-brand-950/40 uppercase tracking-widest">
                  {article.date}
                </span>
              </div>
              <h3 className="text-3xl font-heading text-brand-950 group-hover:text-brand-600 transition-colors leading-tight">
                {article.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
