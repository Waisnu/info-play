import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7cff0a328b4f418d9f9139c22ca31ebc',
    },
});