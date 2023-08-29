import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";

const UserJobHistory = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(user)
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
