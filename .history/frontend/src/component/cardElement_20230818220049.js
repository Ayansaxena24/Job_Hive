import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';


const CardElement = ({ jobTitle, description, category, location, id }) => {
    const { palette } = useTheme();
    return (
        <div className='hover:scale-105 ease-in-out duration-500'>
        <Card className='bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r' sx={{ minWidth: 275, mb: 3, mt: 3}}>

            <CardContent >
                <Typography sx={{ fontSize: 15, color: "whitesmoke", fontWeight: 500 }} gutterBottom>
                    <IconButton><LocationOnIcon sx={{ color: "whitesmoke", fontSize: 18 }} /></IconButton> {location}
                </Typography>
                <Typography variant="h5" component="div" sx={{color: "whitesmoke"}}>
                    {jobTitle}
                </Typography>
                <Typography sx={{ mb: 1.5 ,color: "whitesmoke"}}>
                    {category}
                </Typography>
                <Typography variant="body2" sx={{color: "whitesmoke"}}>
                    Description: {description.split(" ").slice(0, 15).join(" ") + "..."}
                </Typography>
            </CardContent>
            <CardActions>
               
Sure, I can help you with that.

The hover feature in your code is not working because you are using the hover modifier to set the background color of the button. However, the hover modifier only applies to the background color of the button, not the gradient.

To fix this, you need to use the stopColor prop of the conic-gradient CSS function to set the background color of the button on hover.

Here is an example of how you can do this:

<Button
className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900"
disableElevation
sx={{backgroundColor:""}}
variant='contained'
size="small"
startIcon={<AddIcon />}

<Link
style={{
textDecoration: "none",
color: "white",
boxShadow: 0,
// This is the new line
background: {
stopColor: "gray-900",
stopOpacity: 0.5,
},
}}
to={/job/${id}}
></CardActions>
More Details
</Link>
</Button>
            </CardActions>
        </Card>
        </div>
    );
}

export default CardElement;