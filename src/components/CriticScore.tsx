import { Badge } from '@chakra-ui/react';
import React from 'react';

type Props = {
    score: number;
};

const CriticScore = ({ score }: Props) => {
    const color: string = score > 75 ? 'green' : score < 60 ? 'yellow' : '';

    return <Badge colorScheme={color}>{score}</Badge>;
};

export default CriticScore;
