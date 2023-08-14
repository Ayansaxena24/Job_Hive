import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import { Box, Card, Container, Stack } from '@mui/material';

const Home = () => {

  const { palette } = useTheme();

  return (
    <>
      <Box sx={{bgcolor: "#fafafa", minHeight : "100vh"}}>
        <Navbar />
        <Header />
        <Container>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}

            <Box sx={{ flex: 2, p: 2}}>
              <Card sx={{minWidth:150, minWidth:3, mb:3, mt:3, }}
            </Box>
        </Container>

      </Box>
        <h1>Home Page</h1>
    </>
  )
}

export default Home