import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import { getCroppedImageUrl } from '../services/image-url';

type Props = {
    x: Game;
};
const GameCard = ({ x }: Props) => {
    return (
        <Card >
            <Image src={getCroppedImageUrl(x.background_image)} />
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList
                        platforms={x.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={x.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>{x.name}</Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;
