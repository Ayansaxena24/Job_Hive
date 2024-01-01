import { Card, CardContent, Stack, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
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
    const {mode} = useSelector(state => state.mode);
    const [searchParams] = useSearchParams();
    const creatorId = searchParams.get('creatorId');
    
    useEffect(() => {
        dispatch(jobLoadSingleAction(id));
        console.log(creatorId);
    }, [id]);

    const applyForAJob = () => {
        dispatch(userApplyJobAction({
            title: singleJob && singleJob.title,
            description: singleJob && singleJob.description,
            salary: singleJob && singleJob.salary,
            location: singleJob && singleJob.location,
            creatorId : creatorId
        }))
    }

    return (
        <div className={`${mode === 'light' ? 'bg-white min-h-screen' : 'bg-gradient-to-t from-gray-700 via-gray-900 to-black border-1'}`}>
            <Box
            className={`${mode === 'light' ? 'bg-green-600 min-h-screen min-w-screen' : 'bg-gradient-to-t from-gray-700 via-gray-900 to-black border-1'}`}
            // sx={{ bgcolor: "#fafafa", height: 50 }}
            >

                <Navbar />
                {/* <img src={greenSpeaker} alt="green speaker" className="w-[10%] absolute" /> */}
                <Box className="absolute top-16 left-0 w-full bg-green-900 h-screen">
                    <Container className="flex justify-center items-center" sx={{ pt: '30px' }}>

                        <Stack
                            direction={{ xs: 'column',  }}
                            spacing={{ xs: 1, sm: 0, md: 0 }}
                        >
                            <Box sx={{ flex: 4, py: 2 }}>

                                {
                                    loading ? <LoadingBox /> :

                                        <Card className='relative h-[400px] w-[1100px]'>
                                            <CardContent className='bg-red-600 h-full flex flex-col justify-between'>
                                                <Typography variant="h5" component="h3">
                                                    {singleJob && singleJob.title}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <Box component="span" sx={{ fontWeight: 700 }}>Salary</Box>: ${singleJob && singleJob.salary}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <Box component="span" sx={{ fontWeight: 700 }}>Category</Box>: {singleJob && singleJob.jobTypeName ? singleJob.jobTypeName : "No category2"}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <Box component="span" sx={{ fontWeight: 700 }}>Location</Box>: {singleJob && singleJob.location}
                                                </Typography>
                                                <Typography variant="body2" sx={{ pt: 0 }}>
                                                <Box component="span" sx={{ fontWeight: 700 }}>Job description</Box>: {singleJob && singleJob.description}
                                                </Typography>
                                            </CardContent>
                                            <img src={gamlaCode} alt="gamla code" className="absolute top-0 right-0 md:w-[300px] h-[300px] sm:w-[220px] object-cover" />
                                        </Card>
                                }
                            </Box>
                            <Box sx={{ flex: 1, p: 2 }}>
                                <Card sx={{ p: 0 }}>
                                    <Button onClick={applyForAJob} sx={{ fontSize: "13px" }} variant='contained'>Apply for this Job</Button>
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