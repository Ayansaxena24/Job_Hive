import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import matrixVideo from "../../images/matrixVideo.mp4";
import man from "../../images/man.png";

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
          <CardContent className="min-h-[550px] z-10 mb-10 ">
            <div>
              <div className="flex flex-col">
                <Typography sx={{ fontSize: 32 }} color="#fafafa" gutterBottom>
                  Personal Info
                </Typography>
                <hr style={{ marginBottom: "30px" }} />
              </div>
              <div className="pt-4 flex flex-row">
                <img src={man} className="h-96 w-96 mr-10" />
                <div className="border-2 border-gray-400 rounded-2xl w-full pl-4 pt-4 bg-gradient-to-r from-sky-500 to-teal-100">
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
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default UserInfoDashboard;
