import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

type Props = {
    x: Game;
};
const GameCard = ({ x }: Props) => {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={x.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{x.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconList
                        platforms={x.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={x.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;
