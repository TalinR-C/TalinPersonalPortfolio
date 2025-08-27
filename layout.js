import React from "react";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Main Content */}
      <main className="w-full">
        {children}
      </main>
    </div>
  );
}