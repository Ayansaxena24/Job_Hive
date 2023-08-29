import React from 'react'

const UserDashboard = () => {
  return (
    <>
      <Box >

<Typography variant="h4" sx={{ color: "white", pb: 3 }}>
    Dashboard
</Typography>
<Stack
    direction={{ xs: 'column', sm: 'row' }}
    spacing={{ xs: 1, sm: 2, md: 4 }}
>

    <StatComponent
        value={user && moment(user.createdAt).format('YYYY / MM / DD')}
        icon={<CalendarMonthIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
        description="Member since"
        money=''
    />
    <StatComponent
        value={user && user.jobsHistory.length}
        icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
        description="Number of jobs submitted"
        money=''
    />


</Stack>
</Box>

    </>
  )
}

export default UserDashboard