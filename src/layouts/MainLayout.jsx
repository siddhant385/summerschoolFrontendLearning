// src/layouts/MainLayout.jsx
import React from "react";
import Updated_Navbar from "../components/Updated_Navbar"
import Navbar from "../components/Navbar"
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"
import Bottom_Navbar from "@/components/Bottom_Navbar";
import bg from '@/assets/images/bg.jpg'

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="dark mt-3 flex flex-col min-h-screen bgg-blackk overflow-y-scroll w-[100vw] mx-auto ">
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


        <style jsx>{`
              .bgg-blackk {
            background-size: cover;
            background-image: url(${bg});
            background-attachment: fixed;
            // background-size: cover;
            background-repeat: no-repeat;
        }
        
        
        
        /* Hides scrollbar but allows scrolling */
        ::-webkit-scrollbar {
            display: none;
        }
        
        html {
            scrollbar-width: none;
        }
        
        body {
            -ms-overflow-style: none;
        }
              `}</style>
      </div>


 

    </>
  );
};

export default MainLayout;
