import React from 'react';
import { motion } from 'framer-motion';
import {
  PenTool,
  Palette,
  Server,
  ShieldCheck,
  Puzzle,
  FlaskConical,
  Rocket,
  Milestone,
} from 'lucide-react';
import { format } from 'date-fns';

// Function to get an appropriate icon based on the step title
const getIconForStep = (title) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('plan') || lowerTitle.includes('design') || lowerTitle.includes('wireframe')) return <PenTool className="w-5 h-5" />;
  if (lowerTitle.includes('front') || lowerTitle.includes('ui') || lowerTitle.includes('interface')) return <Palette className="w-5 h-5" />;
  if (lowerTitle.includes('back') || lowerTitle.includes('api') || lowerTitle.includes('database') || lowerTitle.includes('server')) return <Server className="w-5 h-5" />;
  if (lowerTitle.includes('auth')) return <ShieldCheck className="w-5 h-5" />;
  if (lowerTitle.includes('payment') || lowerTitle.includes('integration')) return <Puzzle className="w-5 h-5" />;
  if (lowerTitle.includes('test')) return <FlaskConical className="w-5 h-5" />;
  if (lowerTitle.includes('deploy') || lowerTitle.includes('launch')) return <Rocket className="w-5 h-5" />;
  return <Milestone className="w-5 h-5" />;
};

export default function HorizontalTimeline({ steps }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="w-full overflow-x-auto py-16 px-8 md:px-16 lg:px-32">
      <div className="relative w-full mx-auto">
        {/* The timeline bar */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2"></div>
        
        <motion.div
          className="flex items-center gap-8 md:gap-12 min-w-max"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative shrink-0 w-[30rem]"
              variants={itemVariants}
            >
              {/* Timeline Dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-blue-500 z-10"></div>
              
              {/* Card - Positioned alternating up and down */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 ${
                  index % 2 === 0 ? 'bottom-full mb-4' : 'top-full mt-4'
                } w-[30rem]`}
              >
                <motion.div
                  className="bg-white rounded-xl shadow-lg border border-slate-100/80 overflow-hidden"
                  whileHover={{ scale: 1.05, shadow: "0px 15px 30px -10px rgba(0,0,0,0.1)" }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                         {getIconForStep(step.step_title)}
                       </div>
                       <div>
                         <h4 className="font-bold text-slate-800 text-base leading-tight">{step.step_title}</h4>
                       </div>
                    </div>
                    
                    <p className="text-sm text-slate-600 mb-2 leading-snug">{step.step_description}</p>
                    <p className="text-xs text-slate-400 font-medium">
                        {step.date ? format(new Date(step.date), "MMM, yyyy") : ''}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}