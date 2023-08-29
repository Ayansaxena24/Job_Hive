import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../../Redux/actions/userAction";
import CardElement from "../../component/cardElement";

const UserJobHistory = () => {
  const { userInfo : user } = useSelector(state => state.userProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfileAction());
  }, []);
  console.log(user);
  console.log(user?.jobHistory);
  return (
    <>
      <Box>
        <Typography className="text-[#fafafafa]" variant="h4">
          Jobs History
        </Typography>
        <Box>
            {
                user && 
                user?.jobHistory?.map((history, i) => ( 
                    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">  
                   <CardElement className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."
                            key={i}
                            id = {history.id}
                            jobTitle = {history.title}
                            description={history.description}
                            category=''
                            location={history.location} 
                    />   
                    </div> 
                // <h3>{history.title}</h3>
                ))
            }
        </Box>
      </Box>
    </>
  );
};

export default UserJobHistory;
