import React from "react";
import { Typography, Box } from '@mui/material'
import { Stack } from '@mui/system'
import StatComponent from "../../component/statComponent";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkIcon from '@mui/icons-material/Work';
import { useSelector } from 'react-redux';
import moment

const UserDashboard = () => {
  const { userInfo : user } = useSelector(state => state.userProfile);

  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
          Dashboard
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <StatComponent
            value={user && user.createdAt}
            icon={<CalendarMonthIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Member since"
            money=""
          />
          <StatComponent
            value={user && user.jobHistory.length}
            icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Number of jobs submitted"
            money=""
          />
        </Stack>
      </Box>
    </>
  );
};

export default UserDashboard;
