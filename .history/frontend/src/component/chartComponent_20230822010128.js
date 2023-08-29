import React from 'react';
import { Card, CardContent, useTheme } from '@mui/material';

const chartComponent = ({ children }) => {
    const { palette } = useTheme();
    return (
        <>
            <Card sx={{ p: 2, bgcolor: palette.primary.main }}>
        </>
    )