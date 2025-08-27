import React, { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { ArrowLeft, Users, Play } from "lucide-react";

export default function AndroidBeta({ onNavigateHome }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger initial load animation
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden p-6 md:p-8">
      {/* Brand Color CSS Variables */}
      <style>{`
        :root {
          --brand-green: #09F95B;
          --brand-green-dark: #07d850;
        }
        
        /* Ensure body and html have black background */
        body, html {
          background-color: black !important;
        }
      `}</style>
      
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          {/* Back Button */}
          <Button 
            variant="outline" 
            className="mb-8 gap-2 border-white/20 bg-white/5 hover:bg-white/10 text-white"
            onClick={onNavigateHome}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Android <span className="text-[var(--brand-green)]">Beta Access</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Follow these two simple steps to get access to the Elev8ed closed beta on Android.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Step 1 */}
          <div className={`transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`} style={{ transitionDelay: '0.2s' }}>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-[var(--brand-green)]">1</span>
                  </div>
                  <div>
                    <CardTitle className="text-slate-50 font-semibold tracking-tight">Join the Google Group</CardTitle>
                    <p className="text-sm text-gray-400">Required for access</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  To download the beta app, you must be a member of the testing group. Click the button below to join, and ensure you use the same email linked to your Google Play account.
                </p>
                <a href="https://groups.google.com/g/testingelev8edapp" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[var(--brand-green)] hover:bg-[var(--brand-green-dark)] text-black font-medium gap-2 transition-all duration-300 transform hover:scale-105">
                    <Users className="w-5 h-5" />
                    Join Beta Testing Google Group
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Step 2 */}
          <div className={`transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`} style={{ transitionDelay: '0.4s' }}>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                   <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-[var(--brand-green)]">2</span>
                  </div>
                  <div>
                    <CardTitle className="text-slate-50 font-semibold tracking-tight">Download the App</CardTitle>
                    <p className="text-sm text-gray-400">After group approval</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Once you have joined the group, you'll be able to download the app from the Play Store.
                </p>
                <a href="https://play.google.com/store/apps/details?id=com.mycompany.elev8" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[var(--brand-green)] hover:bg-[var(--brand-green-dark)] text-black font-medium gap-2 transition-all duration-300 transform hover:scale-105">
                    <Play className="w-5 h-5" />
                    Download from Google Play
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`} style={{ transitionDelay: '0.6s' }}>
          <p className="text-center mt-12 text-gray-400">
            Note: If you encounter an error when opening the Google Play page, ensure you joined the Google Group with the same email linked to your Google Play account.
          </p>
        </div>
      </div>
    </div>
  );
}