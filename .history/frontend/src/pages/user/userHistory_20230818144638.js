import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../../Redux/actions/userAction";

const UserJobHistory = () => {
  const { user } = useSelector(state => state.userProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfileAction());
  }, []);
  return (
    <>
      <Box>
        <Typography className="bg-[#fafafafa]" variant="h4">
          Jobs History
        </Typography>
        <Box>
            {
                user && user.jobHistory.map(history => (
                    <h3>{history.title}</h3>
                ))
            }
        </Box>
      </Box>
    </>
  );
};

export default UserJobHistory;
