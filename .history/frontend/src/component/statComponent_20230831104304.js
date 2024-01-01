import { Card, CardContent, IconButton, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

const StatComponent = ({ value, icon, description, money }) => {
    const { palette } = useTheme();
    const {mode} = useSelector(state => (state.mode));
    return (
        <>
            <Card
            className={`w-[100%] ${mode === "dark" ? 'bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r hover:bg-gradient-to-tr hover:from-gray-900 hover:to-gray-600 hover:bg-gradient-to-r duration-300 ease-in-out bg-black' : 'bg-gray-600 text-black border-2 border-gray-100'}`} 
            // sx={{ bgcolor: palette.secondary.midNightBlue, width: "100%" }}
            >
                <CardContent >

                    <IconButton sx={{ bgcolor: palette.primary.main, mb: 2 }} >
                        {icon}
                    </IconButton>
                    <Typography variant='h4' sx={{ color: "#fafafa", mb: '1px', fontWeight: 700 }}>
                        {money !== '' ? money + value : value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: palette.primary.main, mb: 0 }}>
                        {description}
                    </Typography>
                </CardContent>

            </Card>
        </>
    )
}

export default StatComponent