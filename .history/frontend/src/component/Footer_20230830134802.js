import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    // const { palette } = useTheme();
    return (
        <>
            <Box 
            className = {`bg-gradient-to-r from-gray-900 to-gray-600`}
            // sx={{ height: '70px', bgcolor: palette.secondary.midNightBlue, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                </Box>
        </>
    )
}

export default Footer