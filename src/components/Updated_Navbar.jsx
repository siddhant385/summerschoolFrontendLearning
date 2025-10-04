import React, { useState } from "react";
import jlug_logo from "../assets/images/jlug_logo.png";
import { useAuth } from "@/context/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, User, Settings, LogOut, Home, Trophy, BookOpen } from "lucide-react";

const Navbar = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const avatarText = user
    ? (user.name || user.email || "U")[0].toUpperCase()
    : "U";

  const navLinks = [
    {
      path: user ? "/dashboard" : "/",
      label: user ? "Dashboard" : "Home",
      icon: Home,
    },
    { path: "/workshops", label: "Workshops", icon: BookOpen },
    { path: "/leaderboard", label: "Leaderboard", icon: Trophy },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
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
      <div className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src={jlug_logo} alt="jlug-logo" />
        </div>

        {/* Title */}
        <div className="title">
          <p className="heading text-xs md:text-xl">JEC LINUX USER GROUP</p>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4 z-10">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full hover:ring-2 hover:ring-indigo-500"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={user.profile_pic_url}
                      alt={user.name || user.email || "User"}
                    />
                    <AvatarFallback className="bg-indigo-600 text-white text-sm font-semibold">
                      {avatarText}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{user.name || "User"}</p>
                    <p className="text-xs text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleProfileClick}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-600 focus:text-red-600"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="default"
              size="sm"
              onClick={() => navigate("/login")}
              className="signup"
            >
              Login
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center z-10">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="p-2"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 mt-10">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  {user ? "Account options" : "Welcome! Please login"}
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-2 mt-4">
                {user ? (
                  <>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        navigate("/dashboard");
                        closeMobileMenu();
                      }}
                      className="justify-start"
                    >
                      Dashboard
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        handleProfileClick();
                        closeMobileMenu();
                      }}
                      className="justify-start"
                    >
                      Profile
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        navigate("/settings");
                        closeMobileMenu();
                      }}
                      className="justify-start"
                    >
                      Settings
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-red-600"
                      onClick={() => {
                        handleLogout();
                        closeMobileMenu();
                      }}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="default"
                    onClick={() => {
                      navigate("/login");
                      closeMobileMenu();
                    }}
                  >
                    Login
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>


      </div>

      {/* Old CSS from Page 1 */}
      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          background-color: #fff;
          width: 100%;
          height: 50px;
          padding: 0 15px;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.76);
        }
        .logo {
          height: 100%;
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .logo img {
          width: 60px;
          height: 40px;
          object-fit: contain;
          margin: -10px;
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
        .title {
          flex: 1;
          position: absolute;
          text-align: center;
          width: 100%;
          left: 50%;
          transform: translateX(-50%);
          font-size: clamp(12px, 3vw, 20px);
          font-family: "Karla", sans-serif;
          letter-spacing: clamp(5px, 2vw, 10px);
          white-space: nowrap;
          line-height: 1;
        }
        .heading {
          font-weight: 1000;
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Navbar;
