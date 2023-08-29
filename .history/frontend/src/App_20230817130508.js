import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogIn from "./pages/Login";
import UserDashboard from "./pages/user/userDashboard";
import UserRoute from "./component/userRoute";
import Layout from "./pages/global/Layout";

//HOC
const UserDashboardHOC = Layout(UserDashboard); //instead of userdashboard we will see userdashboardHOC



const App = () => { 
  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline>

        </CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/location/:location" element={<Home/>} />
            <Route path="/search/:keyword" element={<Home/>} /> {/* for extracting keyword during search for  */}
            <Route path="/login" element={<LogIn/>} />
            <Route path="/user/dashboard" element={<UserRoute><UserDashboard /></UserRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
