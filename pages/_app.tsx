import '@/styles/globals.sass';
import type { AppProps } from 'next/app';
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import {darkTheme} from "@/darkTheme";


export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
