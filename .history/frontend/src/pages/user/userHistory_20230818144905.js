import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../../Redux/actions/userAction";
import CardElement from "../../component/cardElement";

const UserJobHistory = () => {
  const { user } = useSelector(state => state.userProfile);
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
                user && user.jobsHistory.map((history, i) => (
                    <CardElement
                        key={i}
                        id={history._id}
                        jobTitle={history.title}
                        description={history.description}
                        category=''
                        location={history.location}
                    />
                ))

            }
        </Box>
      </Box>
    </>
  );
};

export default UserJobHistory;
