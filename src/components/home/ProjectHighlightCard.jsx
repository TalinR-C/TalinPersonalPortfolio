import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectHighlightCard({ project }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="h-full"
    >
      <Link to={`/project/${project.id}`} className="block h-full">
        <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden group">
          <div className="relative">
            <img 
              src={
                project.image_url
                  ? `${process.env.PUBLIC_URL}/${project.image_url}`
                  : 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop'
              }
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0" />
            <div className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 text-slate-900" />
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2 mt-4 truncate">{project.title}</h3>
            <p className="text-slate-600 mb-4 h-16 text-sm line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {(project.tech_stack || []).slice(0, 3).map(tech => (
                <Badge key={tech} variant="secondary" className="bg-slate-100 text-slate-700">
                  {tech}
                </Badge>
              ))}
              {(project.tech_stack || []).length > 3 && (
                <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                  +{(project.tech_stack || []).length - 3}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}