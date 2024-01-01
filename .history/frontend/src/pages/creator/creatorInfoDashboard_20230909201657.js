import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import matrixVideo from '../../images/matrixVideo.mp4'



const creatorInfoDashboard = () => {
    const { userInfo : user } = useSelector(state => state.userProfile);
    const { palette } = useTheme();
    return (
        <div className='overflow-hidden'>
            <Box
            className = "w-[100%] h-[600px]" 
            // sx={{ maxWidth: "50%", margin: "auto", pt: 10 }}
            >
                <Card
                className='relative min-w-[275] bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r hover:bg-gradient-to-tr hover:from-gray-900 hover:to-gray-600 hover:bg-gradient-to-r duration-300 ease-in-out' 
                // sx={{ minWidth: 275, bgcolor: palette.secondary.midNightBlue }}
                >
            <video autoplay="true" muted loop src={matrixVideo} className=" z-10 w-[100%] h-[100%] object-cover relative opacity-50"/>
                    <CardContent className="absolute top-0 right-0 left-0 bottom-0 z-10">
                        <Typography sx={{ fontSize: 32 }} color="#fafafa" gutterBottom>
                            Personal Info
                        </Typography>
                        <hr style={{ marginBottom: "30px" }} />
                        <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
                            First name: {user && user.firstName}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
                            Last name: {user && user.lastName}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
                            E-mail   :  {user && user.email}
                        </Typography>
                        <Typography sx={{ mb: 1.5, color: "grey", pt: 2 }} color="text.secondary">
                            Status: {user && user.role === 0 ? 
                                    {user && user.role===1 ? "Admin" ? : "Admin"}
                        </Typography>

                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}

export default creatorInfoDashboard