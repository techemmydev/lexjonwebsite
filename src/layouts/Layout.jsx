import React from "react";
import { Outlet } from "react-router";

import Footer from "../component/Footer";

const Layout = () => {
  return (
    <div>
      <main>
        <Outlet /> {/* Page content renders here after loading */}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
