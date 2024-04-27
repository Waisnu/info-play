import { Platform } from '../hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import {
    FaAndroid,
    FaApple,
    FaLinux,
    FaPlaystation,
    FaXbox,
} from 'react-icons/fa6';
import { FaWindows } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { IconType } from 'react-icons';

type Props = {
    platforms: Platform[];
};

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        //name: PlayStation
        // slug: playstation
        pc: FaWindows,
        FaPlaystation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid,
    };
    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                <Icon
                    key={platform.id}
                    as={iconMap[platform.slug]}
                    color='gray.500'
                />
            ))}
        </HStack>
    );
};

export default PlatformIconList;
