import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'dark', // or 'dark' as per your preference
    useSystemColorMode: false, // Set to true if you want to use system color mode
    // Add more configuration options if needed
    disableTransitionOnChange: false
};

const theme = extendTheme({
    config,
    colors: {
        // Define your custom color scheme here
        gray: {
            50: '#f9f9f9',
            100: '#ededed',
            200: '#d3d3d3',
            300: '#b3b3b3',
            400: '#a0a0a0',
            500: '#898989',
            600: '#6c6c6c',
            700: '#20202020',
            800: '121212',
            900: '#111'

        }
    },
});

export default theme;
