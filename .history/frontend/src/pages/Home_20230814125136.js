import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import { Box, Card, Container, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { jobLoadAction } from '../Redux/actions/jobAction';
import { useParams } from 'react-router-dom';

const Home = () => {

  const { palette } = useTheme();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [cat, setCat] = useState('');
  const [keyword, location] = useParams(); // location is the second param // keyword is the first param 

  
  // useEffect(() => {
  //   dispatch(jobLoadAction(page, keyword, cat, location));
  // }, [page, keyword, cat, location]);
  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
}, [page, keyword, cat, location]);

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