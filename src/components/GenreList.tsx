// Importing the useGenres hook from '../hooks/useGenres'
import { useGenres } from '../hooks/useGenres';

// GenreList component displays a list of genres fetched from the API
const GenreList = () => {
    // Calling the useGenres() hook to fetch genre data
    const { data } = useGenres();

    // Rendering the genre list
    return (
        <ul>
            {/* Mapping through the genre data and rendering each genre */}
            {data.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
    );
};
// Exporting the GenreList component as default
export default GenreList;
