import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const stats = [{
    value: '50+',
    label: 'Successful Projects',
    gradient: 'gradient-teal'
  }, {
    value: '20+',
    label: 'Industry Partnerships',
    gradient: 'gradient-purple'
  }, {
    value: '100K+',
    label: 'Users Benefiting',
    gradient: 'gradient-blue'
  }, {
    value: '98%',
    label: 'Client Satisfaction Rate',
    gradient: 'gradient-orange'
  }];
  return <section ref={ref} className="py-20 bg-teal-50">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've helped businesses across various industries transform their operations
            and achieve remarkable growth through our SaaS solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => <div key={index} className={cn("flex flex-col items-center transition-all duration-500 transform", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8", `delay-${index * 100}`)}>
              <div className={cn("w-20 h-20 rounded-full flex items-center justify-center mb-4", stat.gradient)}>
                <span className="text-white text-3xl font-bold">{stat.value.charAt(0)}</span>
              </div>
              <h3 className="text-4xl font-display font-bold mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Stats;