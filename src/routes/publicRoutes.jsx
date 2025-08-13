import Home from "@/pages/public/Home";
import Leaderboard from "@/pages/public/Leaderboard";
import WorkshopDetails from "@/pages/public/WorkshopDetails";
import Workshops from "@/pages/public/Workshops";
import Login from "@/pages/public/Login";
import AuthRedirect from "@/components/AuthRedirect";
import MainLayout from "@/layouts/MainLayout";

export const publicRoutes = [
  { path: "/", element: <AuthRedirect toIfAuth="/dashboard" toIfGuest="/home" /> , layout: MainLayout},
  { path: "/home", element: <Home /> ,layout: MainLayout},
  { path: "/leaderboard", element: <Leaderboard /> ,layout: MainLayout},
  { path: "/workshops", element: <Workshops /> ,layout: MainLayout},
  { path: "/workshop/:workshopId", element: <WorkshopDetails /> ,layout: MainLayout},
  { path: "/workshops/:workshopId", element: <WorkshopDetails /> ,layout: MainLayout}, // Alternative route
  { path: "/login", element: <Login /> }
];
