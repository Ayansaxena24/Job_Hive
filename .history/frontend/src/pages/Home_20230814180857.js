import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import {
  Box,
  Card,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { jobLoadAction } from "../Redux/actions/jobAction";
import { useParams } from "react-router-dom";
import CardElement from "../component/cardElement";
import Footer from "../component/Footer";
import LoadingBox from "../component/loadingBox";
import SelectComponent from "../component/selectComponent";

const Home = () => {
  const { jobs, setUniqueLocation, pages, loading } = useSelector(
    (state) => state.loadJobs
  ); // useSelector is a hook from react-redux that allows you to extract data from the Redux store state, using a selector function.
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [cat, setCat] = React.useState("");
  const { keyword, location } = useParams();

  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  }, [page, keyword, cat, location]);
  //   useEffect(() => {
  //     dispatch(jobLoadAction(page, keyword, cat, location));
  // }, [page, keyword, cat, location]);

  return (
    <>
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
        <Navbar />
        <Header />
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Box sx={{ flex: 2, p: 2 }}>
              <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                <Box sx={{ pb: 2 }}>
                  <Typography
                    component="h4"
                    sx={{ color: palette.secondary.main, fontWeight: 600 }}
                  >
                    Filter job by Category
                  </Typography>
                </Box>
                <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat}/>
              </Card>
              </Box>
                <Box sx={{ flex: 5, p: 2 }}>
                  {loading ? (
                    <LoadingBox />
                  ) : jobs && jobs.length === 0 ? (
                    <>
                      <Box
                        sx={{
                          minHeight: "350px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <h2>No result found!</h2>
                      </Box>
                    </>
                  ) : (
                    jobs && jobs.map((job) => <h1>{job.title}</h1>)
                  )}
                </Box>
              </Card>
            </Box>
            <Box sx={{ flex: 5, p: 2 }}>
              {jobs &&
                jobs.map((job, i) => (
                  <CardElement
                    key={i}
                    id={job.id}
                    jobTitle={job.title}
                    description={job.description}
                    category={job.jobType ? job.jobType.jobName : "No Category"}
                    location={job.location}
                  />
                ))}
              <Stack spacing={2}>
                <Pagination
                  page={page}
                  count={pages === 0 ? 1 : pages}
                  onChange={(event, value) => setPage(value)}
                />
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Home;