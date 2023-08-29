import React from 'react';
import { Card, CardContent, useTheme } from '@mui/material';

const ChartComponent = ({ children }) => {
    const { palette } = useTheme();
    return (
        <>
            <Card sx={{ bgcolor: palette.secondary.midnightBlue, width: "100%" }}>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </>
    )
}

export default ChartComponent