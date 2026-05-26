import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
const Counter = ({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);
  const displayValue =
    value % 1 !== 0 && count === value ? value.toFixed(1) : count;
  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};
export const Stats = () => {
  const stats = [
    {
      value: 2.4,
      prefix: "$",
      suffix: "B",
      label: "Revenue Influenced",
    },
    {
      value: 40,
      suffix: "%",
      label: "Avg. Pipeline Lift",
    },
    {
      value: 200,
      suffix: "+",
      label: "Engagements",
    },
    {
      value: 15,
      suffix: "",
      label: "Years Experience",
    },
  ];

  return (
    <section className="py-32 bg-surface border-b border-brand-950/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
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
              className="flex flex-col"
            >
              <div className="text-6xl md:text-8xl font-heading text-brand-950 mb-4 tracking-tighter">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-sm font-medium text-brand-950/60 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
