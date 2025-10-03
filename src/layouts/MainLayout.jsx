// src/layouts/MainLayout.jsx
import React from "react";
import Updated_Navbar from "../components/Updated_Navbar"
import Navbar from "../components/Navbar"
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"
import Bottom_Navbar from "@/components/Bottom_navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="dark bg-background flex flex-col min-h-screen">
        <Toaster position="top-center" richColors />
        {/* <Navbar /> */}
        <Updated_Navbar />


        {/* Page Content */}
        <main className="flex-1 container mx-auto px-4 py-6">
          {children}
        </main>


        {/* bottom navbar  */}
        <Bottom_Navbar />


        {/* Footer */}
        <Footer />
      </div>


 

    </>
  );
};

export default MainLayout;
