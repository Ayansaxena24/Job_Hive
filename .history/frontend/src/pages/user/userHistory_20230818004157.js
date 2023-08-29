import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { userProfileAction } from "../../Redux/actions/userAction";

const UserJobHistory = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userProfileAction());
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
