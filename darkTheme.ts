import {createTheme} from "@mui/material/styles";


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#fde246'
        },
        secondary: {
            main: '#fe897e'
        },
        error: {
            main: '#f92824'
        },
        warning: {
            main: '#ff8b1a'
        },
        info: {
            main: '#6241bd'
        },
        background: {
            default: '#101316'
        },
    }
})
