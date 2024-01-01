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



export const themeColors = (mode) => ({
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme.mode === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')
},{
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

