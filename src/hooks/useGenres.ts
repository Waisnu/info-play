// Importing the useData hook from './useData'
import { useData } from './useData';

// Defining the Genre type
export type Genre = {
    id: number;
    name: string;
};

// useGenres hook uses useData to fetch genre data from the '/genres' endpoint
export const useGenres = () => useData<Genre>('/genres');
