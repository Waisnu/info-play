import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';

type Props = {
    x: Game;
};
const GameCard = ({ x }: Props) => {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={x.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{x.name}</Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;
