import { CanceledError } from 'axios';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';

// Define a generic type FetchResponse to represent the structure of API responses
type FetchResponse<F> = {
    counter: number; // A counter indicating metadata about the response
    results: F[]; // An array of results of type F
};

// Custom hook to fetch data from an API endpoint
export const useData = <T>(endpoint: string) => {  // Generic " T "  comes from dynammic type from type Game and type Genre
    // State variables to store fetched data, error, and loading state
    const [data, setData] = useState<T[]>([]); // this could be Game[] or Genre[]
    const [error, setError] = useState(''); // Error message string
    const [isLoading, setLoading] = useState(false); // Loading indicator boolean

    useEffect(() => {
        // Create an AbortController instance to handle aborting of fetch requests
        const controller = new AbortController();

        // Set loading state to true to indicate data fetching is in progress
        setLoading(true);

        // Make an API request using the provided endpoint and AbortController's signal
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal }) 
            // .get<FetchResponse> is the structure, while .get<FetchResponse<T>> where it contains <T> from useData line 12.... is the type for the result: array
            .then((res) => {
                // Upon successful response, update the data state with fetched results
                setData(res.data.results);
                // Set loading state to false as data fetching is complete
                setLoading(false);
            })
            .catch((err) => {
                // Handle errors
                // Check if the error is a CanceledError (indicating intentional request cancellation)
                if (err instanceof CanceledError) return;
                // If it's not a CanceledError, update the error state with the error message
                setError(err.message);
                // Set loading state to false as data fetching encountered an error
                setLoading(false);
            });

        // Cleanup function to abort the fetch request when the component unmounts or when endpoint changes
        return () => controller.abort();
    }, [endpoint]); // Dependency array with endpoint as the dependency

    // Return an object containing fetched data, error, and loading state
    return { data, error, isLoading };
};
