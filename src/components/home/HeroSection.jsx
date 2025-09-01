import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 bg-gradient-to-br from-white via-blue-25 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8">

            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Available for Internships
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Hi, I'm
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Talin 

              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Computer Science student passionate about building innovative software solutions. 
              Seeking internship opportunities to contribute to cutting-edge tech projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12">

            <Link to={createPageUrl("PersonalProjects")}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 hover:bg-slate-50">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative max-w-4xl mx-auto">

            <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 p-8 rounded-3xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-1">4+</div>
                  <div className="text-slate-600 text-sm">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-1">5+</div>
                  <div className="text-slate-600 text-sm">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-1">3.0</div>
                  <div className="text-slate-600 text-sm">GPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-1">2027</div>
                  <div className="text-slate-600 text-sm">Graduation</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}