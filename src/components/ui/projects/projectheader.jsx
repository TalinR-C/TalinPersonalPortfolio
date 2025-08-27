import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function ProjectHeader({ title, description, projectCount }) {
  const isPersonal = title.includes("Personal");
  const Icon = isPersonal ? Briefcase : GraduationCap;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-2xl bg-gradient-to-r ${
          isPersonal 
            ? 'from-blue-600 to-indigo-600' 
            : 'from-purple-600 to-indigo-600'
        }`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
          {title}
        </h1>
      </div>
      
      <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
        {description}
      </p>
      
      <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
        isPersonal
          ? 'bg-blue-50 text-blue-700 border border-blue-200'
          : 'bg-purple-50 text-purple-700 border border-purple-200'
      }`}>
        <span className="font-semibold">{projectCount} Projects</span>
      </div>
    </motion.div>
  );
}