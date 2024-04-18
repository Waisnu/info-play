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
        customColorScheme: {
            light: '#F1EFE7', // Light mode color
            dark: '#22283F', // Dark mode color
        },
    },
});

export default theme;
