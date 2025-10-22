// src/layouts/MainLayout.jsx
import React from "react";
import Updated_Navbar from "../components/Updated_Navbar"
import Navbar from "../components/Navbar"
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"
import Bottom_Navbar from "@/components/Bottom_Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="dark bg-background flex flex-col min-h-screen">
        <Toaster position="top-center" richColors />
        {/* <Navbar /> */}
        <div className="mb-[40px]">

        <Updated_Navbar />
        </div>

        {/* Page Content */}
        <main className="flex-1  mx-auto ">
          {children}
        </main>


        {/* bottom navbar  */}
        <div className="mb-10">

        <Bottom_Navbar />
        </div>


        {/* Footer */}
        {/* <Footer /> */}
      </div>


 

    </>
  );
};

export default MainLayout;
