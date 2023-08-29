import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";

const UserJobHistory = () => {
    useEffect(() => {
        const dispatch = useDispatch();
        useEffect
    }, []);
  return (
    <>
      <Box >
        <Typography  className = "bg-[#fafafafa]" variant="h4"> Jobs History </Typography>
        </Box>
    </>
  );
};

export default UserJobHistory;
