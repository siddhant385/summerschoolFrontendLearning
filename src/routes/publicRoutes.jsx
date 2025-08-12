import Home from "@/pages/public/Home";
import Leaderboard from "@/pages/public/Leaderboard";
import WorkshopDetails from "@/pages/public/WorkshopDetails";
import Login from "@/pages/public/Login";
import Register from "@/pages/public/Register";
import AuthRedirect from "@/components/AuthRedirect";
import MainLayout from "@/layouts/MainLayout";

export const publicRoutes = [
  { path: "/", element: <AuthRedirect toIfAuth="/dashboard" toIfGuest="/home" /> , layout: MainLayout},
  { path: "/home", element: <Home /> ,layout: MainLayout},
  { path: "/leaderboard", element: <Leaderboard /> ,layout: MainLayout},
  { path: "/workshops/:id", element: <WorkshopDetails /> ,layout: MainLayout},
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> }
];
