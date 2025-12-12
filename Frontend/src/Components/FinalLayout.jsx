import { Outlet } from "react-router-dom";
import Layout from "./Layout";
import React from 'react';
import Header from "./Header";


function FinalLayout() {
  return (
    <div>
     <Header/>
     <Outlet/>
    </div>
  )
}

export default FinalLayout
