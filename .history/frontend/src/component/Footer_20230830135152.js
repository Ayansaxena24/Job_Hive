import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    // const { palette } = useTheme();
    return (
        <>
            <Box 
            className = {`b h-[70px] flex justify-center items-center`}
            // sx={{ height: '70px', bgcolor: palette.secondary.midNightBlue, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <p className='text-white'>© 2021 Job Portal. All rights reserved.</p>
            </Box>
        </>
    )
}

export default Footer