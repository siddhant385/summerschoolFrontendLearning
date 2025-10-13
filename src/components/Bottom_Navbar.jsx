import React, {  useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import { House, ShieldPlus, Trophy, Calendar } from 'lucide-react'
import { useAuth } from "@/context/auth";
import { BookLoaderComponent } from "./Loader";

const Bottom_Navbar = () => {

    const { user, logout, loading } = useAuth();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // if (loading) return <BookLoaderComponent />;

    // Avatar text fallback
    const avatarText = user
        ? (user.name || user.email || "U")[0].toUpperCase()
        : "U";


    const navLinks = [
        {
            path: "/",
            label: "Home",
            icon: House,
            classs: "home",
        },
        {
            path: "/dashboard",
            label: "Dashboard",
            icon: ShieldPlus,
            classs: "register",
        },
        {
            path: "/leaderboard",
            label: "Leaderboard",
            icon: Trophy,
            classs: "dashboard",
        },
        {
            path: "/workshops",
            label: "Workshops",
            icon: Calendar,
            classs: "events",
        },
    ];

    
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      // You can add toast notification here
    }
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

    return (
        <>
            <div className="nav-container">

                {navLinks.map(({ path, label, classs, icon: Icon }) => (
                    <div className={ classs }>
                        <NavLink
                            key={path}
                            to={path}
                            end={path === "/"}
                        
                        >
                            <Icon color="#ffffff" size={16} />
                        </NavLink>
                        <p className="svg-text">{label}</p>
                    </div>
                    

                ))}
                {/* 
                <div className="home">
                    <button onClick={() => scrollToSection('home')}><img className="svg" src={home_icon} alt="" /></button>
                    <div> <p className="svg-text">Home</p></div>
                </div>

                <div className="register">
                    <div><img className="svg" src={register_icon} alt="" /></div>
                    <div> <p className="svg-text">Register</p></div>
                </div>

                <div className="dashboard">
                    <button onClick={() => scrollToSection('student_dashboard')}><img className="svg" src={dashboard} alt="" /></button>
                    <div> <p className="svg-text">Dashboard</p></div>
                </div>

                <div className="events">
                    <div><img className="svg" src={events_icon} alt="" /></div>
                    <div> <p className="svg-text">Events</p></div>
                </div> */}
            </div>

            <style jsx>{`
            /*===========bottom-nav============*/

.nav-container {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 500px;
    height: 55px;   /* reduced height */
    background-color: rgba(255, 253, 253, 0.1); 
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #333;
    border-radius: 28px;   /* smaller radius */
    font-family: "Sansation", sans-serif;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 9999;
}

.nav-container > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 2px; /* reduce gap between icon & text */
}

.svg-text {
    color: aliceblue;
    font-size: 0.7rem;  /* slightly smaller text */
    margin: 0;          /* remove extra margin */
}

.svg {
    width: 24px;       /* smaller icon */
    height: 24px;
    object-fit: contain;
}

@media (hover: hover) {
    .svg:hover {
        transform: scale(1.5);
    transition: transform 0.2s ease-in-out;
    }
}
/* Responsive adjustments */
@media (max-width: 500px) {
    .svg {
        width: 20px;
        height: 20px;
    }

    .svg-text {
        font-size: 0.6rem;
    }

    .nav-container {
        height: 50px;
        border-radius: 25px;
    }
}


            `}</style>

        </>
    )
}

export default Bottom_Navbar