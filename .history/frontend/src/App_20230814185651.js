import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>

        </CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="." element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
