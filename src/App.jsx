import React,{ useContext } from "react";
import { useRoutes } from "react-router-dom";
import './App.css'

import { routes } from "./routes";
import { useAuth } from "./context/auth";
import { BookLoaderComponent } from "./components/Loader";
import UpdatedLoader from "./components/Updated_Loader";

function App() {
  const element = useRoutes(routes);
  const {loading} = useAuth();
  return (
    // loading ? <BookLoaderComponent/> :
    // <>
    //   {element}
    // </>
    loading ? <UpdatedLoader /> :
    <>
      {element}
    </>
  );
}

export default App;
