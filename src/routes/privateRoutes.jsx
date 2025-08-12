import Dashboard from "@/pages/private/Dashboard";
import MyWorkshops from "@/pages/private/MyWorkshops";
import Profile from "@/pages/private/Profile";
import MainLayout from "@/layouts/MainLayout";


export const privateRoutes = [
   { path: "/dashboard", element: <Dashboard/>,layout: MainLayout},
  { path: "/my-workshops", element: <MyWorkshops />,layout: MainLayout},
  { path: "/profile", element: <Profile />,layout: MainLayout}
 
];
