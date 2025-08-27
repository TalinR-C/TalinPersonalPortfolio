import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Project } from "@/entities/Project";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import ProjectHighlightCard from "./ProjectHighlightCard";
import { Briefcase, GraduationCap } from "lucide-react";

export default function ProjectsSection() {
  const [personalProjects, setPersonalProjects] = useState([]);
  const [uniProjects, setUniProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const personalData = await Project.filter({ project_type: "personal", featured: true }, "-start_date", 3);
        const uniData = await Project.filter({ project_type: "university", featured: true }, "-start_date", 3);
        setPersonalProjects(personalData);
        setUniProjects(uniData);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const renderProjectGrid = (projects) => {
    if (loading) {
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(3).fill(0).map((_, i) => (
            <Skeleton key={i} className="h-96 rounded-2xl" />
          ))}
        </div>
      );
    }

    if (projects.length === 0) {
        return <p className="text-center text-slate-500 py-12">No featured projects in this category yet.</p>
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectHighlightCard project={project} />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A selection of my work that showcases my skills and passion for development.
          </p>
        </motion.div>

        <Tabs defaultValue="personal" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-14 p-2">
              <TabsTrigger value="personal" className="h-full text-md gap-2">
                <Briefcase className="w-5 h-5" /> Personal
              </TabsTrigger>
              <TabsTrigger value="university" className="h-full text-md gap-2">
                <GraduationCap className="w-5 h-5" /> University
              </TabsTrigger>
            </TabsList>
          </motion.div>
          
          <TabsContent value="personal">
            {renderProjectGrid(personalProjects)}
          </TabsContent>
          <TabsContent value="university">
            {renderProjectGrid(uniProjects)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}