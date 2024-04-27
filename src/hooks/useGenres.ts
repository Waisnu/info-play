// Importing the useData hook from './useData'
import { useData } from './useData';

// Defining the Genre type
export type Genre = {
    image: string | undefined;
    id: number;
    name: string;
    image_background: string
};

// useGenres hook uses useData to fetch genre data from the '/genres' endpoint
export const useGenres = () => useData<Genre>('/genres');
