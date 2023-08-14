import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import { Box, Container } from '@mui/material';

const Home = () => {

  const { palette } = useTheme();

  return (
    <>
      <Box sx={{bgcolor: "#fafafa", minHeight : "100vh"}}>
        <Navbar />
        <Header />
        <Container

      </Box>
        <h1>Home Page</h1>
    </>
  )
}

export default Home