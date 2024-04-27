// Importing the useGenres hook from '../hooks/useGenres'
import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import { useGenres } from '../hooks/useGenres';
import { getCroppedImageUrl } from '../services/image-url';

// GenreList component displays a list of genres fetched from the API
const GenreList = () => {
    // Calling the useGenres() hook to fetch genre data
    const { data } = useGenres();

    // Rendering the genre list
    return (
        <List>
            {/* Mapping through the genre data and rendering each genre */}
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image
                            boxSize='32px'
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};
// Exporting the GenreList component as default
export default GenreList;
