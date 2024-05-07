// Importing the useGenres hook from '../hooks/useGenres'
import {
    Button,
    Heading,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
} from '@chakra-ui/react';
import { Genre, useGenres } from '../hooks/useGenres';
import { getCroppedImageUrl } from '../services/image-url';
interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}
// GenreList component displays a list of genres fetched from the API
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    // Calling the useGenres() hook to fetch genre data
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    // Rendering the genre list
    return (
        <>
            <Heading fontSize='2xl' marginBottom={3} > Genres  </Heading>
            <List>
                {/* Mapping through the genre data and rendering each genre */}
                {data.map((genre) => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image
                                objectFit='cover'
                                boxSize='32px'
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace='normal'
                                textAlign='left'
                                fontWeight={
                                    genre.id === selectedGenre?.id
                                        ? 'bold'
                                        : 'normal'
                                }
                                onClick={() => onSelectGenre(genre)}
                                variant='link'
                                fontSize='lg'
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};
// Exporting the GenreList component as default
export default GenreList;
