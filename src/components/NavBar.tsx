import { HStack, Image, useColorMode } from '@chakra-ui/react';
import infodark from '../assets/infodark.png';
import infolight from '../assets/infolight.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
interface Props {
    onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch}: Props ) => {
    const { colorMode } = useColorMode();
    const logoSrc = colorMode === 'dark' ? infodark : infolight;

    return (
        <HStack  padding='15px'>
            <Image src={logoSrc} boxSize='150px' />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
 