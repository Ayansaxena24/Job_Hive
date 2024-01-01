import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import matrixVideo from "../../images/matrixVideo.mp4";
import man from "../../images/man.png";
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            10,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          100,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const UserInfoDashboard = () => {
  const { userInfo: user } = useSelector((state) => state.userProfile);
  const { palette } = useTheme();
  const { mode } = useSelector((state) => state.mode);
  return (
    <div className="overflow-hidden">
      <Box
      // className = "w-[100%] h-[600px]"
      // sx={{ maxWidth: "50%", margin: "auto", pt: 10 }}
      >
        <Card  
        // className='relative min-w-[275] bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r hover:bg-gradient-to-tr hover:from-gray-900 hover:to-gray-600 hover:bg-gradient-to-r duration-300 ease-in-out'
        // sx={{ minWidth: 275, bgcolor: palette.secondary.midNightBlue }}
        >
          {/* <img autoplay="true" muted loop src={matrixVideo} className=" z-10 w-[100%] h-[100%] object-cover relative opacity-50"/> */}
          <CardContent className={` min-h-[600px] z-10  ${mode === 'dark' ? 'bg-[#1E1E1E]' : 'bg-gray-300 from-[#]' }`}>
            <div>
              <div className="flex flex-col">
                <Typography sx={{ fontSize: 32 }} gutterBottom className={`${mode === 'light' ? 'text-black' : 'text-white'}`}>
                  Personal Info
                </Typography>
                <hr style={{ marginBottom: "30px", color: "blue" }}/>
              </div>
              <div className="pt-4 flex flex-row">
                <img src={man} className="h-96 w-96 mr-10" />
                <Tilt options = {defaultOptions} className="border-1 border-blue-200 rounded-2xl w-full pl-4 pt-4 bg-gradient-to-r from-[#001510] to-[#00bf8f]">
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#fafafa" }}
                  >
                    Name: {user && user.firstName} {user && user.lastName}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#fafafa" }}
                  >
                    E-mail : {user && user.email}
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, color: "grey", pt: 2 }}
                    color="text.secondary"
                  >
                    Status:{" "}
                    {user && user.role === 0
                      ? "Regular user"
                      : user && user.role === 1
                      ? "Admin"
                      : "Creator"}
                  </Typography>
                </Tilt>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default UserInfoDashboard;
