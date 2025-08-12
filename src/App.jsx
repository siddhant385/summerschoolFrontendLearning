import React,{ useContext } from "react";
import { useRoutes } from "react-router-dom";
import './App.css'

import { routes } from "./routes";
import { useAuth } from "./context/auth";
import { BookLoaderComponent } from "./components/Loader";

function App() {
  const element = useRoutes(routes);
  const {loading} = useAuth();
  return (
    loading ? <BookLoaderComponent/> :
    <>
      {element}
    </>
  );
}

export default App;
