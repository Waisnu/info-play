import { HStack, Image, useColorMode } from '@chakra-ui/react';
import infodark from '../assets/infodark.png';
import infolight from '../assets/infolight.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
    const { colorMode } = useColorMode();
    const logoSrc = colorMode === 'dark' ? infodark : infolight;

    return (
        <HStack justifyContent='space-between' padding='15px'>
            <Image src={logoSrc} boxSize='150px' />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
