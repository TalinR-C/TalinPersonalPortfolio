import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { 
  Github, 
  ExternalLink, 
  Calendar,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react";

export default function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'in_progress':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'planned':
        return <AlertCircle className="w-4 h-4 text-orange-500" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'in_progress':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'planned':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 group">
      {/* Date Timeline */}
      <div className="md:w-64 shrink-0 relative">
        <div className="sticky top-24">
          {/* Timeline dot */}
          <div className="absolute left-32 top-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10 hidden md:block" />
          
          <div className="text-right md:pr-12">
            <div className="text-2xl font-bold text-slate-900 mb-1">
              {format(new Date(project.start_date || new Date()), "MMM yyyy")}
            </div>
            <div className="text-slate-600 flex items-center justify-end gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {project.end_date 
                  ? `${format(new Date(project.start_date || new Date()), "MMM")} - ${format(new Date(project.end_date), "MMM yyyy")}`
                  : "Ongoing"
                }
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Card */}
      <div className="flex-1">
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.01]">
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex gap-2 shrink-0">
                  {project.github_url && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {project.demo_url && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Tech Stack */}
              {project.tech_stack && project.tech_stack.length > 0 && (
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary" 
                        className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Image */}
              {project.image_url && (
                <div className="rounded-xl overflow-hidden bg-slate-100">
                  <img 
                    src={project.image_url} 
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Detailed Description */}
              {project.detailed_description && (
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Project Overview</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {project.detailed_description}
                  </p>
                </div>
              )}

              {/* Timeline Steps */}
              {project.timeline_steps && project.timeline_steps.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-slate-900">Development Timeline</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="gap-2"
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {project.timeline_steps
                      .slice(0, isExpanded ? project.timeline_steps.length : 3)
                      .map((step, stepIndex) => (
                        <motion.div
                          key={stepIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: stepIndex * 0.1 }}
                          className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                        >
                          <div className="mt-0.5">
                            {getStatusIcon(step.status)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <h5 className="font-semibold text-slate-900">{step.step_title}</h5>
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${getStatusColor(step.status)}`}
                              >
                                {step.status?.replace('_', ' ')}
                              </Badge>
                            </div>
                            <p className="text-slate-600 text-sm mb-2">{step.step_description}</p>
                            {step.date && (
                              <span className="text-xs text-slate-500">
                                {format(new Date(step.date), "MMM d, yyyy")}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      ))}
                  </div>

                  {!isExpanded && project.timeline_steps.length > 3 && (
                    <div className="text-center mt-3">
                      <span className="text-sm text-slate-500">
                        +{project.timeline_steps.length - 3} more steps
                      </span>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}