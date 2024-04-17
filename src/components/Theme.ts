import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: '#22283',
};

const theme = extendTheme({
    config,
});

export default theme;
