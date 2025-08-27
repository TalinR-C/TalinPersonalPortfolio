import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone,
  Cloud,
  Cpu
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    color: "from-blue-500 to-blue-600",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"]
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "from-green-500 to-green-600",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-purple-500 to-purple-600",
    skills: ["React Native", "Flutter", "iOS", "Android", "Expo"]
  },
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-orange-500 to-orange-600",
    skills: ["JavaScript", "Python", "Java", "C++", "Go"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-indigo-500 to-indigo-600",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
  },
  {
    title: "Data & AI",
    icon: Cpu,
    color: "from-red-500 to-red-600",
    skills: ["Machine Learning", "TensorFlow", "Pandas", "NumPy", "SQL"]
  }
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proficient in modern technologies and frameworks across the full stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary" 
                        className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}