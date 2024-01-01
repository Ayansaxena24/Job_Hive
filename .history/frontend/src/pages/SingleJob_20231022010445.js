import { Card, CardContent, Stack, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../component/Footer'
import LoadingBox from '../component/loadingBox'
import Navbar from '../component/Navbar'
import { jobLoadSingleAction } from '../Redux/actions/jobAction'
import Button from '@mui/material/Button'
import { userApplyJobAction } from '../Redux/actions/userAction'
import greenSpeaker from '../images/greenSpeaker.jpg'
import gamlaCode from '../images/gamlaCoding.jpg'


const SingleJob = () => {
    const dispatch = useDispatch();
    const { singleJob, loading }  = useSelector(state => state.singleJob)
    const { id } = useParams();
    useEffect(() => {
        dispatch(jobLoadSingleAction(id));
    }, [id]);

    const applyForAJob = () => {
        dispatch(userApplyJobAction({
            title: singleJob && singleJob.title,
            description: singleJob && singleJob.description,
            salary: singleJob && singleJob.salary,
            location: singleJob && singleJob.location
        }))
    }

    return (
        <div>
            <Box
            className="bg-white h-50" 
            // sx={{ bgcolor: "#fafafa", height: 50 }}
            >

                <Navbar />
                <img src={greenSpeaker} alt="green speaker" className="w-[40%] absolute" />
                <Box className="absolute top-16 left-4 w-full bg-white">
                    <Container sx={{ pt: '30px' }}>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                        >
                            <Box sx={{ flex: 4, p: 2 }}>

                                {
                                    loading ? <LoadingBox /> :

                                        <Card className='relative'>
                                            <CardContent>
                                                <Typography variant="h5" component="h3">
                                                    {singleJob && singleJob.title}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <Box component="span" sx={{ fontWeight: 700 }}>Salary</Box>: ${singleJob && singleJob.salary}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <Box component="span" sx={{ fontWeight: 700 }}>Category</Box>: {singleJob && singleJob.jobType ? singleJob.jobType.jobTypeName : "No category"}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <Box component="span" sx={{ fontWeight: 700 }}>Location</Box>: {singleJob && singleJob.location}
                                                </Typography>
                                                <Typography variant="body2" sx={{ pt: 2 }}>
                                                    {/* <h3>Job description:</h3> */}
                                                    {singleJob && singleJob.description}
                                                </Typography>
                                            </CardContent>
                                            <img src={gamlaCode} alt="gamla code" className="absolute top-0 right-0 w-10 h-36 object-cover" />
                                        </Card>
                                }
                            </Box>
                            <Box sx={{ flex: 1, p: 2 }}>
                                <Card sx={{ p: 2 }}>
                                    <Button onClick={applyForAJob} sx={{ fontSize: "13px" }} variant='contained'>Applied for this Job</Button>
                                </Card>
                            </Box>

                        </Stack>

                    </Container>
                </Box>
                <Footer />
            </Box>
        </div>
    )
}

export default SingleJob;