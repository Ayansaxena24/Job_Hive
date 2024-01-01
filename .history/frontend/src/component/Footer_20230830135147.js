import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    // const { palette } = useTheme();
    return (
        <>
            <Box 
            className = {`
        background-color: rgb(167, 243, 208);
        background-image: radial-gradient(at 24% 80%, rgb(103, 232, 249) 0, transparent 41%), radial-gradient(at 30% 63%, rgb(21, 128, 61) 0, transparent 43%), radial-gradient(at 20% 19%, rgb(250, 232, 255) 0, transparent 62%), radial-gradient(at 19% 57%, rgb(13, 148, 136) 0, transparent 65%), radial-gradient(at 46% 77%, rgb(165, 243, 252) 0, transparent 21%), radial-gradient(at 11% 3%, rgb(63, 63, 70) 0, transparent 81%);
       h-[70px] flex justify-center items-center`}
            // sx={{ height: '70px', bgcolor: palette.secondary.midNightBlue, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <p className='text-white'>© 2021 Job Portal. All rights reserved.</p>
            </Box>
        </>
    )
}

export default Footer