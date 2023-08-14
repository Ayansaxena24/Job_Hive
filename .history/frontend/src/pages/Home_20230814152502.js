import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import { Box, Card, Container, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { jobLoadAction } from '../Redux/actions/jobAction';
import { useParams } from 'react-router-dom';
import { blue } from '@mui/material/colors';

const Home = () => {
  const { jobs, setUniqueLocation, pages, loading } = useSelector(state => state.loadJobs); // useSelector is a hook from react-redux that allows you to extract data from the Redux store state, using a selector function.
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [cat, setCat] = useState('');
  const {keyword, location} = useParams();

  
  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  }, [page, keyword, cat, location]);
//   useEffect(() => {
//     dispatch(jobLoadAction(page, keyword, cat, location));
// }, [page, keyword, cat, location]);

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
              <Card sx={{minWidth:150, mb:3, mt:3, p:2}}>
                <Box sx={{pb:2}}>
                  <Typography component="h4" sx={{color: palette.secondary.main, fontWeight: 600}}>
                
                Filter job by Category
                </Typography>
                </Box>
                <Box sx = {{ flex:5, p:2, backgroundColor: black}}>
                  {
                    jobs && jobs.map(job => (
                      <h1>{job.title}</h1>
                    ))
                  }
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