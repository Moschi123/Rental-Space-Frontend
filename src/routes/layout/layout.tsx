import Navbar from "../../components/navbar/navBar";

import "./layout.scss";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
          <Navbar/>
     <div className="layout">
      <div className="navbar">
  
      </div>
      <div className="content">
      <Outlet/>

      </div>
    </div>
    </>
   
  );
}

export default Layout;