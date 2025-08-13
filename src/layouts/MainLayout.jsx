// src/layouts/MainLayout.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"


const MainLayout = ({ children }) => {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Toaster position="top-center" richColors />
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
        
      </main>
      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
