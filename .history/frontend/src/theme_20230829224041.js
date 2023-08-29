import { createTheme } from "@mui/material";
import { blue, lightBlue, grey } from "@mui/material/colors";

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

econst themeColors = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: blue[500],
                    white: "#fff"
                },
                secondary: {
                    main: lightBlue[800],
                    midNightBlue: "#003366"
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: "#003366",
                    white: "#003366"
                },
                secondary: {
                    main: blue[500],
                    midNightBlue: "#2196f3"
                },
                background: {
                    default: "#1e1e1e",
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
            }),
    },
});

// Your custom code
const Dark = {
    background: {
      default: "#1e1e1e",
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  };
  
  export default themeColors(store.getState().mode).merge(Dark);