import React from 'react'
import jlug_logo from '../assets/images/jlug_logo.png'

const Navbar = () => {
    return (

        <>
            <div className="navbar">
                <div className="logo">
                    <img src={jlug_logo} alt="jlug-logo" />
                </div>
                <button className="signup">SIGN UP</button>
                <button className="hamburger">&#9776;</button>
                <div className="title">
                    <p className="heading">JEC LINUX USER GROUP</p>
                </div>
            </div>

            <style jsx>{`
        .navbar{
    display: flex;
    /* flex-direction: row; */
   justify-content: space-between;
    background-color: #ffff;
    width: 100%;
    height: 50px;
   padding:0 15px;
    align-items: center;
    position: fixed;
    top:0;
    left:0;
   z-index: 1000;
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.76);
}


.logo {
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 2; 
}

.logo img{
    width: 60px;
    height: 40px;
    border:none;
    object-fit: contain;
    margin: -10px;
}
.title{
    flex:1;
    position: absolute;
    text-align: center;
    width: 100%;
    left:50%;
    transform: translateX(-50%);
    font-size: clamp(12px, 3vw, 20px);
    font-family: "Karla",sans-serif;
    letter-spacing: clamp(5px, 2vw, 10px);
    white-space: nowrap;
    line-height: 1; 
    
}
.heading{
    font-weight: 1000;
    margin: 0;
}
.signup{
    border: 0.5px solid black;
    font-family: "Sansation", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    width: 90px;
    height:28px;
    border-radius: 25px;
    letter-spacing: 3%;
    background-color: transparent;
    margin-right: 45px;
    position: relative; /* makes z-index work */
    z-index: 10;
}

.signup:hover{
background-color:#0b99ff;
border: 1px solid #fff;
color:#fff;

}
/* ==========responsive nav============ */

@media (max-width: 768px) {
   .navbar{
        height: 40px;
    }
    .container {
        height: 60px; 
    }
    
    .logo img {
        width: 50px;
        height: 40px;
        margin: -5px;
    }
    
    .title {
        font-size: clamp(10px, 4vw, 16px);
        letter-spacing: clamp(4px, 1vw, 6px);
        left:48%;
    }
}


@media (max-width: 480px) {
   .navbar{
        height: 40px;
    }
    .title {
        left: 47%; 
        transform: translateX(-50%);
        width: 80%; 
       letter-spacing: clamp(3px, 1vw, 5px);
    }
   .logo img{
        margin:-10px;
      height: 40px;
    }
    .signup{
        margin-left:20px;
    }
}
.hamburger {
    display: none; /* hidden by default */
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 10px;
   margin-right: 15px;
}

/* Show hamburger, hide signup on smaller screens */
@media (max-width: 768px) {
    .signup {
        display: none; /* hide signup */
    }

    .hamburger {
        display: block; /* show hamburger */
    }
}


        `}</style>

        </>



    )
}

export default Navbar