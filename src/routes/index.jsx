import React from 'react';
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";
import { fallbackRoutes} from "./fallbackRoutes"
import { ProtectedRoute } from '@/components/ProtectedRoute';


// const parseRouteObjects = (routes, isPrivate = false) => {
// return routes.map((route) => ({
//     path: route.path,
//     element: isPrivate ? (
//     <ProtectedRoute>{route.element}</ProtectedRoute>
//     ) : (
//     route.element
//     ),
// }));
// }
const parseRouteObjects = (routes, isPrivate = false) => {
  return routes.map((route) => {
    const Element = isPrivate
      ? <ProtectedRoute>{route.element}</ProtectedRoute>
      : route.element;

    if (route.layout) {
      const Layout = route.layout;
      return {
        path: route.path,
        element: <Layout>{Element}</Layout>,
      };
    }

    return {
      path: route.path,
      element: Element,
    };
  });
};



const privateRouteObjects = parseRouteObjects(privateRoutes, true);
const publicRouteObjects = parseRouteObjects(publicRoutes);
const fallbackRouteObjects = parseRouteObjects(fallbackRoutes);

export const routes = [
    ...publicRouteObjects,
    ...privateRouteObjects,
    ...fallbackRouteObjects,
  ];

  
