import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    // const { palette } = useTheme();
    return (
        <>
            <Box 
            className = {`bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 h-[70px] flex justify-center items-center`}
            // sx={{ height: '70px', bgcolor: palette.secondary.midNightBlue, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <p className='text-white'>© 2021 Job Portal. All rights reserved.</p>
            </Box>
        </>
    )
}

export default Footer