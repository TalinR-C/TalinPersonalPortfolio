import React, { useState, useEffect } from "react";
import { Project } from "@/entities/Project";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { ArrowLeft, Github, ExternalLink, Calendar, Code } from "lucide-react";
import HorizontalTimeline from "../components/projects/HorizontalTimeline";

export default function ProjectDetails() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchProject = async () => {
      const params = new URLSearchParams(location.search);
      const projectId = params.get("id");
      if (projectId) {
        setLoading(true);
        try {
          // Use list() to get all projects and find the one with matching ID
          const projects = await Project.list();
          const foundProject = projects.find(p => p.id === projectId);
          setProject(foundProject || null);
        } catch (error) {
          console.error("Failed to fetch project:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchProject();
  }, [location.search]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Skeleton className="h-8 w-32 mb-12" />
        <Skeleton className="h-16 w-3/4 mb-4" />
        <Skeleton className="h-6 w-1/2 mb-8" />
        <Skeleton className="h-96 w-full rounded-2xl mb-8" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Link to={createPageUrl("Home")}>
          <Button variant="link">Go back home</Button>
        </Link>
      </div>
    );
  }

  const backUrl = project.project_type === 'personal' ? createPageUrl('PersonalProjects') : createPageUrl('UniProjects');

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to={backUrl}>
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </motion.div>

        <motion.header 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">{project.title}</h1>
          <p className="text-xl text-slate-600 max-w-4xl mb-6">{project.description}</p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-slate-500">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(project.start_date), "MMM yyyy")} - {project.end_date ? format(new Date(project.end_date), "MMM yyyy") : "Present"}</span>
            </div>
            {project.github_url && (
              <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline"><Github className="w-4 h-4 mr-2" /> GitHub</Button>
              </a>
            )}
            {project.demo_url && (
              <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                <Button><ExternalLink className="w-4 h-4 mr-2" /> Live Demo</Button>
              </a>
            )}
          </div>
        </motion.header>

        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
        >
          <img src={project.image_url} alt={project.title} className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl" />
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-12 mb-20"
        >
            <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">About The Project</h2>
                <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{project.detailed_description}</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                {project.tech_stack?.map(tech => (
                    <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm bg-slate-200 text-slate-800">{tech}</Badge>
                ))}
                </div>
            </div>
        </motion.div>

        {project.timeline_steps && project.timeline_steps.length > 0 && (
            <motion.div
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">Development Journey</h2>
                <HorizontalTimeline steps={project.timeline_steps} />
            </motion.div>
        )}
      </div>
    </div>
  );
}