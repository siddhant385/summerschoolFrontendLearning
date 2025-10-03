import React from 'react'
import events_icon from '../assets/images/events_icon.png'
import color from '../assets/images/color.png'
import dashboard from '../assets/images/dashboard.png'
import home_icon from '../assets/images/home_icon.png'
import jlug_logo from '../assets/images/jlug_logo.png'
import jlug_mainlogo from '../assets/images/jlug_mainlogo.jpg'
import register_icon from '../assets/images/register_icon.png'


const Home = () => {

    return (
         <>

            {/* <!--=========body============ --> */}


            {/* <!-- ====logo==== --> */}

            <div className="logo-container">
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
                    <p className="jlug-summer">JLUG SUMMER</p>
                </div>
                <div>
                    <p className="school-program ">SCHOOL PROGRAM</p>
                </div>
                <div className="message">
                    <p className="transform mt-[3vh]">Transform your skill with expert-led workshop, hands-on projects , and a vibrant learning community</p>
                </div>

                <button className="start-learning">Start Learning</button>
            </div>


            <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rosario:ital,wght@0,300..700;1,300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alumni+Sans:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sansation:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');



body{
   
    overflow: hidden;
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

.jlug-summer{
    margin: 3vh 0 2vh;
}


/* ==========nav================= */

/* ==========logo container============ */
.logo-container {
    position: relative;
    width: clamp(180px, 25vw, 240px);
    height: clamp(180px, 25vw, 240px);
    margin: 7.5vh auto 0;
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
    font-size: clamp(24px, 6vw, 40px);
    font-weight: 500;
    letter-spacing: clamp(2px, 1.5vw, 5px);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
}

.school-program{
font-family: "Rosario", sans-serif;
font-size: clamp(18px, 4vw, 30px);
font-weight: lighter;
letter-spacing: clamp(1px, 1vw, 2px);
background: linear-gradient(45deg, #E7F122, #25C6DF, #E7F122, #25C6DF);
background-size: 400% 400%;
-webkit-background-clip: text; 
animation: conicLoop 3s linear infinite reverse;
background-clip: text;
color: transparent; 
text-transform: uppercase;
margin-top: 0;
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
        margin-bottom: 0.3rem;
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