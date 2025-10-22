import React, { useEffect } from 'react';

import certification from '../assets/images/certification.png'
import mentorship from '../assets/images/mentorship.png'
import project from '../assets/images/project.png'

const About = () => {

    return (
        <>
            <div className="text-white flex items-center justify-center min-h-screen px-8">
                <div class="max-w-4xl w-full space-y-10">

                    {/* <!-- Top Heading and Paragraph --> */}

                    <div class="text-center space-y-8">
                        <h1 class="text-3xl md:text-5xl lg:text-6xl text-gray-400 font-medium font-rosario" data-aos-duration="700">ABOUT THE PROGRAM
                        </h1>
                        <p class="text-sm mt-6 text-[#a2a2a2] font-inter leading-relaxed" data-aos-duration="700">
                            Learn from experts, work on real projects, and earn certification to showcase your skills. Our program
                            is designed to give you practical experience and validate your knowledge.
                        </p>
                    </div>

                    {/* <!-- Cards Section --> */}

                    <div class=" md:grid md:grid-cols-2 max-md:space-y-3 md:justify-items-center md:gap-4">

                        {/* <!-- Expert Mentorship (slide from left) --> */}

                        <div class="bg-[#33475b] text-white px-6 py-8 rounded-xl shadow-md text-center space-y-4" >
                            <div class="text-3xl">
                                <img src={mentorship} alt="" class="mx-auto w-10 h-10" />
                            </div>
                            <h2 class="text-lg font-semibold tracking-wide font-rosario">Expert Mentorship</h2>
                            <p class="text-sm text-gray-300 font-sansation">
                                Learn directly from industry professionals and academic expert with year of experience.
                            </p>
                        </div>

                        {/* <!-- Hands On Project (slide from right) --> */}

                        <div class="bg-[#2f3242] text-white px-6 py-8 rounded-xl shadow-md text-center space-y-4"  >
                            <img src={project} alt="" class="mx-auto w-10 h-10" />
                            <h2 class="text-lg font-semibold tracking-wide font-rosario">Hands On Project</h2>
                            <p class="text-sm text-gray-300 font-sansation">
                                Build real world projects that showcase your skill and boost your portfolio.
                            </p>
                        </div>

                        {/* <!-- Certification (slide from bottom) --> */}

                        {/*<div class="bg-[#3a3b66] text-white px-6 py-8 rounded-xl shadow-md text-center space-y-4" >
                            <div class="text-3xl">
                                <img src={certification} alt="" class="mx-auto w-10 h-10" />
                            </div>
                            <h2 class="text-lg font-semibold tracking-wide font-rosario">Certification</h2>
                            <p class="text-sm font-sansation text-gray-300">
                                Earn recognized certificate that validate your newly acquired skills and knowledge.
                            </p>
                        </div>*/}
                        <div class="bg-[#3a3b66] text-white px-6 py-8 rounded-xl shadow-md text-center space-y-4 md:col-span-2 md:justify-self-center">
                            <div class="text-3xl">
                                <img src={certification} alt="" class="mx-auto w-10 h-10" />
                            </div>
                            <h2 class="text-lg font-semibold tracking-wide font-rosario">Certification</h2>
                            <p class="text-sm font-sansation text-gray-300">
                                Earn recognized certificate that validate your newly acquired skills and knowledge.
                            </p>
                        </div>


                    </div>
                </div>

            </div>

            

        </>
    )
}

export default About