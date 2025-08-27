import React, { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import {
  ArrowRight,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Star,
  Download,
  Apple,
  Play,
  CheckCircle,
  Zap,
  Brain,
  Heart
} from "lucide-react";

export default function Landing({ onNavigateToAndroidBeta }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Trigger initial load animation
    setTimeout(() => setIsLoaded(true), 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Brand Color CSS Variables */}
      <style>{`
        :root {
          --brand-green: #09F95B;
          --brand-green-dark: #07d850;
          --brand-green-glow: rgba(9, 249, 91, 0.3);
          --brand-green-glow-soft: rgba(9, 249, 91, 0.15);
        }
        
        /* Ensure body and html have black background */
        body, html {
          background-color: black !important;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } ${
          isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-black/50 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/06f700c06_Logo.png"
                alt="Elev8ed Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-[var(--brand-green)]">
                Elev8ed
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--brand-green-glow)] rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`} style={{ transitionDelay: '0.3s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Elevate Your
              </span>
              <br />
              <span className="text-[var(--brand-green)]">
                Potential
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Level up your life, master key habits, and achieve your vision of becoming the person you aspire to be with gamified self-improvement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <a  
                href="https://testflight.apple.com/join/3KSTTygQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="bg-[var(--brand-green)] hover:bg-[var(--brand-green-dark)] text-black border-none rounded-full px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                <Apple className="w-6 h-6 mr-3" />
                Download Beta for iOS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              </a>
              <Button
                onClick={onNavigateToAndroidBeta}
                variant="outline"
                className="border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm w-full sm:w-auto"
              >
                <Play className="w-6 h-6 mr-3" />
                Android Beta Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 relative bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Choose
              </span>
              <br />
              <span className="text-[var(--brand-green)]">
                Elev8ed?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the future of personal development with cutting-edge features designed for your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Gamified Progression",
                description: "Earn XP, level up, and unlock rewards as you complete self-improvement tasks. Turn your personal growth into an engaging game."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Vision-Driven Goals",
                description: "Create a personalized vision avatar that represents the person you want to become, guiding your journey towards your ideal self."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Habit Tracking",
                description: "Build and track habits across key life areas to steadily grow in discipline, health, intellect, and more with comprehensive progress monitoring."
              }
            ].map((feature, index) => (
              <div key={index} className="opacity-0 translate-y-16 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-all duration-500 group">
                  <CardContent className="p-8 pt-8">
                    <div className="w-16 h-16 bg-[var(--brand-green)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(feature.icon, { className: 'w-8 h-8 text-black' })}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta Access Section */}
      <section className="py-32 px-6 relative bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-green-glow-soft)] to-black"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to
              </span>
              <br />
              <span className="text-[var(--brand-green)]">
                Get Started?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Jump in and see what Elev8ed can do for you. Try the beta today and start your journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a  
                href="https://testflight.apple.com/join/3KSTTygQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="bg-[var(--brand-green)] hover:bg-[var(--brand-green-dark)] text-black border-none rounded-full px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                  <Apple className="w-6 h-6 mr-3" />
                  Download Beta for iOS
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            
              <Button 
                onClick={onNavigateToAndroidBeta}
                size="lg" 
                variant="outline" 
                className="border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm w-full sm:w-auto"
              >
                <Play className="w-6 h-6 mr-3" />
                Android Beta Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="whitespace-nowrap">Free Beta Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="whitespace-nowrap">Early Access Features</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/06f700c06_Logo.png"
                alt="Elev8ed Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-[var(--brand-green)]">
                Elev8ed
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Elev8ed. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}