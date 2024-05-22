import { Outlet } from "react-router-dom";

import { Navbar } from "@/components";
import "./layout.scss";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <div className="navbar"></div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
