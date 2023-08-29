import { Box } from "@mui/material";
import React from "react";
import HeaderTop from "./HeaderTop";

const Layout = (Component) => ({ ...props }) => {
    return (
        <>
            <div className="flex min-h-[100vh]">
                <SidebarAdm />
                <Box sx={{ width:"100vh", bgcolor: "002952"}}>
                    <HeaderTop />
                    <Box
                </Box>
            </div>
        </>
    )
}