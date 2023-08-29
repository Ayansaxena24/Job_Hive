import { createTheme } from "@mui/material";
import { blue, lightBlue } from "@mui/material/colors";

// export const theme = createTheme({
//     palette: {
//         primary: {
//             main: blue[500],
//         },
//         secondary: {
//             main: lightBlue[500],
//             midNightBlue: "#003366",
//         },
//     },
// });

const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: amber,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: deepOrange[900],
              paper: deepOrange[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });
  