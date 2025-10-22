import React from 'react'
import events_icon from '../assets/images/events_icon.png'
import color from '../assets/images/color.png'
import dashboard from '../assets/images/dashboard.png'
import home_icon from '../assets/images/home_icon.png'
import jlug_logo from '../assets/images/jlug_logo.png'
import jlug_mainlogo from '../assets/images/jlug_mainlogo.jpg'
import register_icon from '../assets/images/register_icon.png'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();

  const startLearningClick=()=>{
    navigate("/workshops");
  }
useGSAP(() => {
    gsap.from(".button .btnsvg", {
      x: 170, // smaller value for flexible movement
      rotate: 360,
      duration: 3,
      repeat: -1,
      yoyo: true,
      scale: 4, // keep scale reasonable
      ease: "power2.out",
    });

    gsap.from(".button .btnTitle", {
      x: 170, // use x instead of left for better performance
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.out",
    });
  });
    return (
         <>

            {/* <!--=========body============ --> */}


            {/* <!-- ====logo==== --> */}

            <div className="logo-container mx-auto mb-4">
                <div className="bg">
                    <img className='rotate-center' src={color} alt="" />
                </div>
                <div className="logo-wrapper">
                    <img src={jlug_mainlogo} className="main-logo" alt="JLUG Logo" />
                </div>
            </div>

            {/* <!-- ====content==== --> */}
            <div className="content">
                <div>
                    <p className="jlug-summer whitespace-nowrap">JLUG SUMMER</p>
                </div>
                <div>
                    <p className="school-program">SCHOOL PROGRAM</p>
                </div>
                <div className="message">
                    <p className="transform mt-[3vh]">Transform your skill with expert-led workshop, hands-on projects , and a vibrant learning community</p>
                </div>

 {/* <button className="start-learning">Start Learning</button> */}

        <div className="button">
          <div className="btnsvg">
            <svg
              width="23"
              height="21"
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 0L13.6956 8.49535L23 10.5L13.6956 12.5046L11.5 21L9.30443 12.5046L0 10.5L9.30443 8.49535L11.5 0Z"
                fill="url(#paint0_linear_480_85)"
              />
              <path
                d="M11.5 0L13.6956 8.49535L23 10.5L13.6956 12.5046L11.5 21L9.30443 12.5046L0 10.5L9.30443 8.49535L11.5 0Z"
                fill="url(#paint1_linear_480_85)"
                fill-opacity="0.41"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_480_85"
                  x1="11.5"
                  y1="4.2"
                  x2="11.5"
                  y2="21"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F32222" />
                  <stop offset="1" stop-color="#0ABF2B" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_480_85"
                  x1="2.3"
                  y1="10.5"
                  x2="23"
                  y2="10.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EAFF07" />
                  <stop offset="1" stop-color="#7609FB" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="btnTitle font-Inter" onClick={startLearningClick}>Start Learning</div>
        </div>
            </div>


            <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rosario:ital,wght@0,300..700;1,300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alumni+Sans:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sansation:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');



body{
   
    overflow-x:hidden ;
    overflow-y:auto;
}

html,body{
    margin: 0;
  padding: 0;
  height: 100%;
}

/* body {
    background-size: cover;
    background-image: url('./assets/images/bg.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
} */

/* ==========logo container============ */
.logo-container {
    position: relative;
    width: clamp(180px, 25vw, 240px);
    height: clamp(180px, 25vw, 240px);
}

/* Rotating background image */
.bg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 110%;
    height: 110%;
    transform: translate(-50%, -50%);
    z-index: 1;
    filter: blur(70px);
}

.rotate-center {
    width: 100%;
    height: 100%;
    animation: rotate-center 50s linear infinite forwards;
}

/* Main logo */

.logo-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.main-logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    display: block;
}

/* Animation */
@keyframes rotate-center {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(3600deg);
    }
}

/* Responsive Tweaks */
@media (max-width: 768px) {
    .logo-container {
        width: clamp(140px, 35vw, 200px);
        height: clamp(140px, 35vw, 200px);
    }
}

@media (max-width: 480px) {
    .logo-container {
        width: clamp(140px, 40vw, 200px);
        height: clamp(140px, 40vw, 200px);
    }
}


/* =============content============= */

.content{
    color: #ffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: -10px auto 0;
    width: 90%;
    padding-top: 10px;
}

.jlug-summer{
    font-family: "League Gothic", sans-serif;
    font-size: clamp(60px, 6vw, 40px);
    font-weight: 500;
    letter-spacing: clamp(2px, 1.5vw, 5px);
    text-transform: uppercase;
}

.school-program{
font-family: "Rosario", sans-serif;
font-size: clamp(12px, 4vw, 30px);
font-weight: lighter;
letter-spacing: clamp(1px, 1vw, 2px);
background: linear-gradient(45deg, #E7F122, #25C6DF, #E7F122, #25C6DF);
background-size: 400% 400%;
-webkit-background-clip: text; 
animation: conicLoop 3s linear infinite reverse;
background-clip: text;
color: transparent; 
text-transform: uppercase;
 text-shadow: 0 0 30px rgba(231, 241, 34, 0.5);
}

 @keyframes conicLoop {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
        }

        
.message{
     font-family: "Alumni Sans", sans-serif;
    font-size: clamp(16px, 2.5vw, 20px);
    letter-spacing: clamp(1px, 0.5vw, 2px);
    line-height: 1.4;
    margin-top: 1px;
    max-width: 80%;
    text-align: center;
    font-weight: 300;
}

.start-learning{
    font-family: "Inter", sans-serif;
    letter-spacing: 1px;
    width: clamp(140px, 30vw, 186px);
    height: clamp(35px, 7vw, 41px); 
    font-weight: lighter;
    border-radius: 25px;
    color: #ffff;
    font-size: clamp(16px, 3vw, 22px);
    background-color: black;
    cursor: pointer;
    margin-top: 2vh; 
    transition: all 0.3s ease;
    border: 1px solid #ffff;
    position: relative;
    z-index: 2;
    border: none;
}

.start-learning::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 25px;
    background: linear-gradient(45deg, #933EFF, #26c8fd, #933EFF, #26c8fd);
/*     background: linear-gradient(45deg, #E7F122, #25C6DF, #E7F122, #25C6DF); */
    background-size: 300% 300%;
    z-index: -2;
    animation: borderLoop 3s linear infinite;
}

@keyframes borderLoop {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.start-learning::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    border-radius: 23px;
    background: black;/* Inner fill */
    z-index: -1;
}

.button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          margin-top: 4vh; /* default desktop spacing */
          background-color: #010101;
          border: 1px solid #fff;
          border-radius: 25px;
          padding: 4px 16px;
          width: fit-content;
          color: white;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button svg {
          height: 25px;
          width: 25px;
          flex-shrink: 0;
        }

        .button .btnTitle {
          font-weight: 300;
          font-size: 1.2rem;
          letter-spacing: 1px;
          color: white;
          font-family: "Inter", sans-serif;
        }

          /* Responsive Adjustments in current start-learning*/
        @media (max-width: 1024px) {
          .button {
            margin-top: 4vh;
            padding: 7px 16px;
            gap: 8px;
          }
          .button .btnTitle {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 768px) {
          .button {
            margin-top: 4vh;
            padding: 7px 16px;
            gap: 8px;
          }
          .button svg {
            height: 22px;
            width: 22px;
          }
          .button .btnTitle {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .button {
            margin-top: 3vh;
            padding: 5px 14px;
            gap: 6px;
            border-radius: 20px;
          }
          .button svg {
            height: 18px;
            width: 18px;
          }
          .button .btnTitle {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 360px) {
          .button {
            margin-top: 2vh;
            padding: 5px 12px;
          }
          .button .btnTitle {
            font-size: 0.85rem;
          }
        }

/* ==========responsive adjustments============ */

@media (min-width: 1024px) {
    .message {
        font-size: clamp(18px, 2vw, 22px);
        letter-spacing: 1.5px;
        max-width: 70%;
        margin-top: -20px;
    }
}

@media (max-width: 768px) {
    .content {
        margin-top: 10px auto 0;
        padding-top: 10px;
    }
    .jlug-summer {
        margin-bottom: 0.05rem;
         letter-spacing:5px;
    }
    .message {
        font-size: clamp(15px, 3vw, 18px);
        line-height: 1.3;
        margin-top: -12px;
    }
    .start-learning {
        margin-top: 1.8vh;
    }
}

@media (max-width: 480px) {
    .content {
        margin-top: 10px auto 0;
        padding-top: 8px;
    }

    .jlug-summer {
        letter-spacing:5px;
    }
    .school-program {
        letter-spacing: 0.5px;
    }
    .message {
        font-size: clamp(14px, 3.5vw, 16px);
        letter-spacing: 0.8px;
        max-width: 90%;
        margin-top: 2px;
    }
    .start-learning {
        width: 130px;
        height: 36px;
        font-size: 16px;
        margin-top: 1.5vh;
    }
}
@media (hover: hover) {
    .start-learning:hover {
        background-color: #333;
        transform: scale(1.05);
       transition: transform 0.3s ease-in-out;
    }
}


            `}</style>


        </>
    )
}

export default Home