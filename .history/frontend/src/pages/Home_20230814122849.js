import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import { Box, Card, Container, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

const Home = () => {

  const { palette } = useTheme());

  return (
    <>
      <Box sx={{bgcolor: "#fafafa", minHeight : "100vh"}}>
        <Navbar />
        <Header />
        <Container>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            >
            <Box sx={{ flex: 2, p: 2}}>
              <Card sx={{minWidth:150, minWidth:3, mb:3, mt:3, p:2}}>
                <Box sx={{pb:2}}>
                  <Typography component="h4" sx={{color: palette.secondary.main, fontWeight: 600}}>
                
                Filter job by Category
                </Typography>
                </Box>
              </Card>
            </Box>
            </Stack>
        </Container>

      </Box>
        <h1>Home Page</h1>
    </>
  )
}

export default Home