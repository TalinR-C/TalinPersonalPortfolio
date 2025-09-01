import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-25 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Education
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Academic foundation in computer science with focus on Enterprise Systems Development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full border-0 shadow-xl">
              <CardContent className="p-8 flex flex-col">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mb-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Bachelor of Computer Science
                  </h3>
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-slate-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>RMIT University</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>2024 - 2027</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-slate-600" />
                    <span className="text-slate-600">GPA: 3.0/4.0</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <h4 className="font-semibold text-slate-900 mb-3 text-center">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      "Data Structures",
                      "Algorithms",
                      "Software Engineering",
                      "Database Systems",
                      "Web Development",
                      "Machine Learning"
                    ].map((course) => (
                      <Badge 
                        key={course}
                        variant="outline" 
                        className="border-blue-200 text-blue-700"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Achievements</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 leading-relaxed">Top marks in Algorithms and Analysis, Foundations of AI, and Programming Studio 2</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 leading-relaxed">Completed intensive programming courses, gaining hands-on full-stack and software design experience</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Extracurricular / Academic Projects</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 leading-relaxed">Developed the Elev8ed self-improvement app, with 75+ downloads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 leading-relaxed">Built multiple practical projects through coursework, applying AI, software engineering, and cybersecurity concepts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}