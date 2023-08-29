import { Box } from "@mui/material";
import React from "react";
import HeaderTop from "./HeaderTop";
import SidebarAdm from "./Sidebar";

const Layout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <div style={{ display: 'flex', minHeight: "100vh" }}>
          <SidebarAdm />
          <Box className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..." sx={{ width: "100%" }}>
            <HeaderTop />
            <Box sx={{ p: 3 }}>
              <Component {...props} />
            </Box>
          </Box>
        </div>
      </>
    );
  };

  export default Layout;
